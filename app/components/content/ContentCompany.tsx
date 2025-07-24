"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";

import { LoadingSpinner } from "@components/loading/Spinner";
import { resetContentCompany, setSearch } from "@/redux/slices/contentSlice";

const ContentCompany: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setSearch(""));
    dispatch(resetContentCompany());
  }, []);

  const contentCompany = useSelector(
    (state: RootState) => state.content.contentCompany
  );

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
        {/* Kartu Keluarga */}
        {contentCompany && contentCompany.length !== 0 && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">
              Perusahaan
            </h2>
            <div
              className={
                contentCompany && contentCompany.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contentCompany &&
                contentCompany.map((item, index) => (
                  <div
                    key={`indonesia-car-owner-${index}`}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        Nama :
                      </strong>
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.nama
                          ? item.nama.replace(/Profil Perusahaan /g, "")
                          : "N/A"}
                      </span>
                    </div>
                    {item.url && (
                      <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                        <a
                          href={item.url}
                          target="_blank"
                          className="font-semibold underline"
                        >
                          Lihat Dokumen
                        </a>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Handle if both are empty */}
        {!contentCompany && (
          <div className="text-center h-screen justify-center items-center flex text-gray-500 text-lg">
            No data available.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCompany;
