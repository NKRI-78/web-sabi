"use client";

import React, { useEffect } from "react";
import { Clock, Construction } from "lucide-react";
import { useDispatch } from "react-redux";
import { resetContents, setSearch } from "@/redux/slices/contentSlice";

const NotFound: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearch(""));
    dispatch(resetContents());
    return () => {
      dispatch(setSearch(""));
      dispatch(resetContents());
    };
  }, []);

  return (
    <div className="flex items-center w-full justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-xl shadow-md">
        <div className="flex justify-center mb-4 text-yellow-500">
          <Construction size={48} />
        </div>
        <h1 className="text-2xl font-semibold mb-2 text-gray-800">
          Data Sedang di Update
        </h1>
        <p className="text-gray-600 mb-4 flex items-center justify-center gap-2"></p>
      </div>
    </div>
  );
};

export default NotFound;
