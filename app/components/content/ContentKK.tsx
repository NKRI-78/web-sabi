"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";

import { LoadingSpinner } from "@components/loading/Spinner";
import { useRouter, useSearchParams } from "next/navigation";
import {
  fetchContentKKListAsync,
  fetchContentListAsync,
  resetContentKK,
  resetContents,
  setSearch,
} from "@/redux/slices/contentSlice";

const ContentKK: React.FC = () => {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search");

  useEffect(() => {
    const redirect = sessionStorage.getItem("isRedirect") === "true";

    if (!redirect) {
      dispatch(setSearch(""));
      dispatch(resetContentKK());
    }
    sessionStorage.removeItem("isRedirect");
  }, []);

  useEffect(() => {
    if (searchValue) {
      dispatch(setSearch(searchValue));
      dispatch(fetchContentKKListAsync(searchValue));
    }
  }, [searchValue]);

  const contentKK = useSelector((state: RootState) => state.content.contentKK);
  const isLoading = useSelector((state: RootState) => state.content.isLoading);

  const handleNavigate = async (keyword: string, pathname: string) => {
    router.push(`/features/${pathname}?search=${keyword}`);
    sessionStorage.setItem("isRedirect", "true");
  };

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
        {contentKK && contentKK.length !== 0 && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">
              Kartu Keluarga
            </h2>
            <div
              className={
                contentKK && contentKK.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contentKK &&
                contentKK.map((item, index) => (
                  <div
                    key={`indonesia-car-owner-${index}`}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        Nama :
                      </strong>
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.nama ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        Alamat :
                      </strong>
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.alamat ?? "N/A"}
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2 text-gray-600 text-sm mt-2"
                      onClick={
                        item.nik
                          ? () => handleNavigate(item.nik!, "nik")
                          : () => {}
                      }
                    >
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        NIK :
                      </strong>
                      <span
                        className={`${
                          item.nik ? "text-blue-500 cursor-pointer" : ""
                        } truncate overflow-hidden whitespace-nowrap max-w-full block`}
                      >
                        {item.nik ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        Kota :
                      </strong>
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.kota ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        Kecamatan :
                      </strong>
                      <span
                        className={`truncate overflow-hidden whitespace-nowrap max-w-full block`}
                      >
                        {item.kecamatan ?? "N/A"}
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2 text-gray-600 text-sm mt-2"
                      onClick={
                        item.no_kk
                          ? () => handleNavigate(item.no_kk!, "cek-kk")
                          : () => {}
                      }
                    >
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        No KK :
                      </strong>
                      <span
                        className={`${
                          item.no_kk ? "text-blue-500 cursor-pointer" : ""
                        } truncate overflow-hidden whitespace-nowrap max-w-full block`}
                      >
                        {item.no_kk ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        Tanggal Lahir :
                      </strong>
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.tgl_lahir ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        Tempat Lahir :
                      </strong>
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.tmpt_lahir ?? "N/A"}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Handle if both are empty */}
        {!contentKK && (
          <div className="text-center h-screen justify-center items-center flex text-gray-500 text-lg">
            No data available.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentKK;
