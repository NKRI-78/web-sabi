"use client";

import React from "react";
import { Construction } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center w-full justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-xl shadow-md">
        <div className="flex justify-center mb-4 text-yellow-500">
          <Construction size={48} />
        </div>
        <h1 className="text-2xl font-semibold mb-2 text-gray-800">
          Page Under Construction
        </h1>
        <p className="text-gray-600 mb-4 flex items-center justify-center gap-2">
          This feature is currently in progress.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
