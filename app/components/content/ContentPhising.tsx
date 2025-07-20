"use client";

import React from "react";
import { useSelector } from "react-redux";

import { LoadingSpinner } from "@components/loading/Spinner";
import { RootState } from "@/redux/store";

const ContentPhising: React.FC = () => {
  const contents = useSelector((state: RootState) => state.content.contents);
  const isLoading = useSelector((state: RootState) => state.content.isLoading);

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-4 py-10 w-full">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Naz Api Section */}
        {contents?.data.List?.["naz.api"]?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">naz.api</h2>
            <div
              className={
                contents.data.List["naz.api"].Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List["naz.api"].Data.map((item, index) => (
                <div
                  key={`naz.api-${index}`}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      NickName :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.NickName ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Password :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Password ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      URL :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Url ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RockYou 2024 Section */}
        {contents?.data.List?.["RockYou 2024"]?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">
              RockYou 2024
            </h2>
            <div
              className={
                contents.data.List["RockYou 2024"].Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List["RockYou 2024"].Data.map((item, index) => (
                <div
                  key={`rockyou-2024-${index}`}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Password :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Password ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NumPass 80M Section */}
        {contents?.data.List?.["NumPass 80M"]?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">
              NumPass 80M
            </h2>
            <div
              className={
                contents.data.List?.["NumPass 80M"]?.Data?.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List["NumPass 80M"].Data.map((item, index) => (
                <div
                  key={`num-pass-${index}`}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Phone :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Phone ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Password :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Password ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PasswordIndex Section */}
        {contents?.data.List?.PasswordIndex?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">
              PasswordIndex
            </h2>
            <div
              className={
                contents.data.List?.PasswordIndex?.Data?.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List.PasswordIndex.Data.map((item, index) => (
                <div
                  key={`password-index-${index}`}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Email :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Emails ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Password :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Password ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Alien TxtBase 2024 Section */}
        {contents?.data.List?.["Alien TxtBase"]?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">
              Alien TxtBase
            </h2>
            <div
              className={
                contents.data.List["Alien TxtBase"].Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List["Alien TxtBase"].Data.map((item, index) => (
                <div
                  key={`alien-txtbase-${index}`}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Email :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Email ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Password :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Password ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      URL :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Url ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Handle if both are empty */}
        {!contents?.data.List?.PasswordIndex?.Data?.length &&
          !contents?.data.List?.["NumPass 80M"]?.Data?.length &&
          !contents?.data.List?.["Alien TxtBase"]?.Data?.length &&
          !contents?.data.List?.["naz.api"]?.Data?.length &&
          !contents?.data.List?.["RockYou 2024"]?.Data?.length && (
            <div className="text-center h-screen justify-center items-center flex text-gray-500 text-lg">
              No data available.
            </div>
          )}
      </div>
    </div>
  );
};

export default ContentPhising;
