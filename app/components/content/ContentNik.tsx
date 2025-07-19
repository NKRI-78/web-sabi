"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";

import { LoadingSpinner } from "@components/loading/Spinner";
import { resetContents, setSearch } from "@/redux/slices/contentSlice";

const ContentNik: React.FC = () => {
  const dispatch = useDispatch();
  const contents = useSelector((state: RootState) => state.content.contents);
  const isLoading = useSelector((state: RootState) => state.content.isLoading);
  const isRedirect = useSelector(
    (state: RootState) => state.content.isRedirect
  );

  useEffect(() => {
    if (!isRedirect) {
      dispatch(setSearch(""));
      dispatch(resetContents());
    }
    return () => {
      dispatch(setSearch(""));
      dispatch(resetContents());
    };
  }, [isRedirect]);

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
        {/* Dukcapil Section */}
        {contents?.data.List?.Dukcapil?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">Dukcapil</h2>
            <div
              className={
                contents.data.List.Dukcapil.Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              }
            >
              {contents.data.List.Dukcapil.Data.map((item, index) => (
                <div
                  key={`dukcapil-${index}`}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.FullName ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Address ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Location ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Passport ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Gender ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Kominfo Section */}
        {contents?.data.List?.["KomInfo Indonesia"]?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">
              KomInfo Indonesia
            </h2>
            <div
              className={
                contents.data.List["KomInfo Indonesia"].Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              }
            >
              {contents.data.List["KomInfo Indonesia"].Data.map(
                (item, index) => (
                  <div
                    key={`tk-indonesiascreen-com-${index}`}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.Phone ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.Passport ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.Provider ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.RegDate ?? "N/A"}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Handle if both are empty */}
        {!contents?.data.List?.Dukcapil?.Data?.length &&
          !contents?.data.List?.["KomInfo Indonesia"]?.Data?.length && (
            <div className="text-center h-screen justify-center items-center flex text-gray-500 text-lg">
              No data available.
            </div>
          )}
      </div>
    </div>
  );
};

export default ContentNik;
