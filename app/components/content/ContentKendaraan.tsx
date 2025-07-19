"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";

import { LoadingSpinner } from "@components/loading/Spinner";
import { resetContents, setSearch } from "@/redux/slices/contentSlice";

const ContentKendaraan: React.FC = () => {
  const dispatch = useDispatch();
  const contents = useSelector((state: RootState) => state.content.contents);
  const isLoading = useSelector((state: RootState) => state.content.isLoading);
  const isRedirect = useSelector(
    (state: RootState) => state.content.isRedirect
  );

  console.log(isRedirect);
  useEffect(() => {
    if (!isRedirect) {
      dispatch(setSearch(""));
      dispatch(resetContents());
    }
    return () => {
      dispatch(setSearch(""));
      dispatch(resetContents());
    };
  }, []);

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
        {/* Indonesian Car Owner */}
        {contents?.data.List?.IndonesiaCarOwner?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">
              Indonesian Car Owner
            </h2>
            <div
              className={
                contents.data.List.IndonesiaCarOwner.Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              }
            >
              {contents.data.List.IndonesiaCarOwner.Data.map((item, index) => (
                <div
                  key={`indonesia-car-owner-${index}`}
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
                    {/* <Link className="text-blue-400" href={`/features/nik`}> */}
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.NIK ?? "N/A"}
                    </span>
                    {/* </Link> */}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.BPKB ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.EngineNumber ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Type ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.VehicleYear ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Handle if both are empty */}
        {!contents?.data.List?.IndonesiaCarOwner?.Data?.length && (
          <div className="text-center h-screen justify-center items-center flex text-gray-500 text-lg">
            No data available.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentKendaraan;
