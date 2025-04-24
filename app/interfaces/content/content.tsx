// To parse this data:
//
//   import { Convert, Content } from "./file";
//
//   const content = Convert.toContent(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Content {
    users: User[];
    total: number;
    skip:  number;
    limit: number;
}

export interface User {
    id:         number;
    firstName:  string;
    lastName:   string;
    maidenName: string;
    age:        number;
    gender:     string;
    email:      string;
    phone:      string;
    username:   string;
    password:   string;
    birthDate:  string;
    image:      string;
    bloodGroup: string;
    height:     number;
    weight:     number;
    eyeColor:   string;
    hair:       Hair;
    ip:         string;
    address:    Address;
    macAddress: string;
    university: string;
    bank:       Bank;
    company:    Company;
    ein:        string;
    ssn:        string;
    userAgent:  string;
    crypto:     Crypto;
    role:       string;
}

export interface Address {
    address:     string;
    city:        string;
    state:       string;
    stateCode:   string;
    postalCode:  string;
    coordinates: Coordinates;
    country:     string;
}

export interface Coordinates {
    lat: number;
    lng: number;
}

export interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType:   string;
    currency:   string;
    iban:       string;
}

export interface Company {
    department: string;
    name:       string;
    title:      string;
    address:    Address;
}

export interface Crypto {
    coin:    string;
    wallet:  string;
    network: string;
}

export interface Hair {
    color: string;
    type:  string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toContent(json: string): Content {
        return cast(JSON.parse(json), r("Content"));
    }

    public static contentToJson(value: Content): string {
        return JSON.stringify(uncast(value, r("Content")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Content": o([
        { json: "users", js: "users", typ: a(r("User")) },
        { json: "total", js: "total", typ: 0 },
        { json: "skip", js: "skip", typ: 0 },
        { json: "limit", js: "limit", typ: 0 },
    ], false),
    "User": o([
        { json: "id", js: "id", typ: 0 },
        { json: "firstName", js: "firstName", typ: "" },
        { json: "lastName", js: "lastName", typ: "" },
        { json: "maidenName", js: "maidenName", typ: "" },
        { json: "age", js: "age", typ: 0 },
        { json: "gender", js: "gender", typ: "" },
        { json: "email", js: "email", typ: "" },
        { json: "phone", js: "phone", typ: "" },
        { json: "username", js: "username", typ: "" },
        { json: "password", js: "password", typ: "" },
        { json: "birthDate", js: "birthDate", typ: "" },
        { json: "image", js: "image", typ: "" },
        { json: "bloodGroup", js: "bloodGroup", typ: "" },
        { json: "height", js: "height", typ: 3.14 },
        { json: "weight", js: "weight", typ: 3.14 },
        { json: "eyeColor", js: "eyeColor", typ: "" },
        { json: "hair", js: "hair", typ: r("Hair") },
        { json: "ip", js: "ip", typ: "" },
        { json: "address", js: "address", typ: r("Address") },
        { json: "macAddress", js: "macAddress", typ: "" },
        { json: "university", js: "university", typ: "" },
        { json: "bank", js: "bank", typ: r("Bank") },
        { json: "company", js: "company", typ: r("Company") },
        { json: "ein", js: "ein", typ: "" },
        { json: "ssn", js: "ssn", typ: "" },
        { json: "userAgent", js: "userAgent", typ: "" },
        { json: "crypto", js: "crypto", typ: r("Crypto") },
        { json: "role", js: "role", typ: "" },
    ], false),
    "Address": o([
        { json: "address", js: "address", typ: "" },
        { json: "city", js: "city", typ: "" },
        { json: "state", js: "state", typ: "" },
        { json: "stateCode", js: "stateCode", typ: "" },
        { json: "postalCode", js: "postalCode", typ: "" },
        { json: "coordinates", js: "coordinates", typ: r("Coordinates") },
        { json: "country", js: "country", typ: "" },
    ], false),
    "Coordinates": o([
        { json: "lat", js: "lat", typ: 3.14 },
        { json: "lng", js: "lng", typ: 3.14 },
    ], false),
    "Bank": o([
        { json: "cardExpire", js: "cardExpire", typ: "" },
        { json: "cardNumber", js: "cardNumber", typ: "" },
        { json: "cardType", js: "cardType", typ: "" },
        { json: "currency", js: "currency", typ: "" },
        { json: "iban", js: "iban", typ: "" },
    ], false),
    "Company": o([
        { json: "department", js: "department", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "address", js: "address", typ: r("Address") },
    ], false),
    "Crypto": o([
        { json: "coin", js: "coin", typ: "" },
        { json: "wallet", js: "wallet", typ: "" },
        { json: "network", js: "network", typ: "" },
    ], false),
    "Hair": o([
        { json: "color", js: "color", typ: "" },
        { json: "type", js: "type", typ: "" },
    ], false),
};
