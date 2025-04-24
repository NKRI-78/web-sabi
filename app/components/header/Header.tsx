"use client";

import React from "react";

import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { AppDispatch } from "@redux/store";
import { useDispatch } from "react-redux";
import { setSearch } from "@redux/slices/contentSlice";


const Header: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const pathname = usePathname();

    const renderTitle = () => {
        switch (pathname) {
            case "/":
                return <h1 className={`text-4xl font-bold text-whited`}>SABI</h1>;
            default:
                return <h1 className={`text-4xl font-bold text-whited`}>SABI</h1>;
        }
    };

    return (
        <div>
            <header className="flex flex-col h-40 items-center justify-center p-4 relative bg-dark-blue">
                {renderTitle()}
                <div className="w-full my-4 max-w-xl relative">
                    <input
                        onChange={(e) => dispatch(setSearch(e.target.value))}
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 pr-10 text-black rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                </div>
            </header>
        </div>
    );
}

export default Header;