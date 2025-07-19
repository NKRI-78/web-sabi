"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";

import { LoadingSpinner } from "@components/loading/Spinner";
import { resetContents, setSearch } from "@/redux/slices/contentSlice";

const ContentKendaraan: React.FC = () => {
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
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List.IndonesiaCarOwner.Data.map((item, index) => (
                <div
                  key={`indonesia-car-owner-${index}`}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Nama :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.FullName ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Alamat :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Address ?? "N/A"}
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2 text-gray-600 text-sm mt-2"
                    // onClick={
                    //   item.NIK
                    //     ? () => handleNavigate(item.NIK!, "nik")
                    //     : () => {}
                    // }
                  >
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      NIK :
                    </strong>
                    <span
                      className={`truncate overflow-hidden whitespace-nowrap max-w-full block`}
                    >
                      {item.NIK ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      BPKB :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.BPKB ?? "N/A"}
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2 text-gray-600 text-sm mt-2"
                    // onClick={
                    //   item.EngineNumber
                    //     ? () => handleNavigate(item.EngineNumber, "vehicle")
                    //     : () => {}
                    // }
                  >
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      No Mesin :
                    </strong>
                    <span
                      className={`truncate overflow-hidden whitespace-nowrap max-w-full block`}
                    >
                      {item.EngineNumber ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Tipe :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Type ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Tahun Pembuatan :
                    </strong>
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
