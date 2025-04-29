"use client";

import React from "react";

import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { AppDispatch, RootState } from "@redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchContentListAsync, setSearch, setIsLoading } from "@redux/slices/contentSlice";


const Header: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const search = useSelector((state: RootState) => state.content.search);

    const pathname = usePathname();

    const renderTitle = () => {
        switch (pathname) {
            case "/":
                return <h1 className={`text-4xl font-bold text-whited`}>SABI</h1>;
            case "/auth/change-password":
                return <h1 className={`text-4xl font-bold text-whited`}>CHANGE PASSWORD</h1>;
            default:
                return <h1 className={`text-4xl font-bold text-whited`}>SABI</h1>;
        }
    };

    const onSubmit = () => {
        if(search.trim() == "") return;
        dispatch(fetchContentListAsync(search))
    }

    return (
        <div>
            <header className="flex flex-col h-40 items-center justify-center p-4 relative bg-dark-blue">
                {renderTitle()}
                <div className="w-full my-4 max-w-xl relative">
                    
                    { pathname == "/auth/change-password" 
                    ? <p></p> 
                    :   <input
                            onChange={(e) => dispatch(setSearch(e.target.value))}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    onSubmit();
                                }
                            }}
                            type="text"
                            placeholder="Search..."
                            className="w-full px-4 py-2 pr-10 text-black rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                        />
                    }
                    
                    {   
                        pathname == "/auth/change-password" 
                        ? <p></p>   
                        : <Search onSubmit={(e) => {
                            e.preventDefault();
                            onSubmit();
                        }} onClick={() => onSubmit()}  className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} /> 
                    } 
                </div>
            </header>
        </div>
    );
}

export default Header;