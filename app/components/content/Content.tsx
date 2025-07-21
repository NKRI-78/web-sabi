"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";

import { LoadingSpinner } from "@components/loading/Spinner";
import moment from "moment";
import { resetContents, setSearch } from "@/redux/slices/contentSlice";
import { AppDispatch } from "@redux/store";
import { useRouter } from "next/navigation";

const Content: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const contents = useSelector((state: RootState) => state.content.contents);
  const isLoading = useSelector((state: RootState) => state.content.isLoading);

  useEffect(() => {
    dispatch(setSearch(""));
    dispatch(resetContents());
    return () => {
      dispatch(setSearch(""));
      dispatch(resetContents());
    };
  }, []);

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
        {/* Tokopedia Section */}
        {contents?.data.List?.Tokopedia?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">Tokopedia</h2>
            <div
              className={
                contents.data.List.Tokopedia.Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List.Tokopedia.Data.map((item, index) => (
                <div
                  key={`tokopedia-${index}`}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-x-1 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Nama :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.FullName ?? "N/A"}
                    </span>
                  </div>
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
                      No Hp :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Phone ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RedDoorz Section */}
        {contents?.data.List?.RedDoorz?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">RedDoorz</h2>
            <div
              className={
                contents.data.List.RedDoorz.Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List.RedDoorz.Data.map((item, index) => (
                <div
                  key={`reddoorz-${index}`}
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
                      Email :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Email ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Provider :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Provider ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dukcapil Section */}
        {contents?.data.List?.Dukcapil?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">Dukcapil</h2>
            <div
              className={
                contents.data.List.Dukcapil.Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List.Dukcapil.Data.map((item, index) => (
                <div
                  key={`dukcapil-${index}`}
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
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Lokasi :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Location ?? "N/A"}
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2 text-gray-600 text-sm mt-2"
                    onClick={
                      item.Passport
                        ? () => handleNavigate(item.Passport!, "nik")
                        : () => {}
                    }
                  >
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      NIK :
                    </strong>
                    <span
                      className={`${
                        item.Passport ? "text-blue-500 cursor-pointer" : ""
                      } truncate overflow-hidden whitespace-nowrap max-w-full block`}
                    >
                      {item.Passport ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Gender :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Gender ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List["KomInfo Indonesia"].Data.map(
                (item, index) => (
                  <div
                    key={`tk-indonesiascreen-com-${index}`}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        No Hp :
                      </strong>
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.Phone ?? "N/A"}
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2 text-gray-600 text-sm mt-2"
                      onClick={
                        item.Passport
                          ? () => handleNavigate(item.Passport!, "nik")
                          : () => {}
                      }
                    >
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        NIK :
                      </strong>
                      <span
                        className={`${
                          item.Passport ? "text-blue-500 cursor-pointer" : ""
                        } truncate overflow-hidden whitespace-nowrap max-w-full block`}
                      >
                        {item.Passport ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        Provide :
                      </strong>
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.Provider ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        Tanggal Daftar :
                      </strong>
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

        {/* Bukalapak Section */}
        {contents?.data.List?.BukalaPak?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">Bukalapak</h2>
            <div
              className={
                contents.data.List.BukalaPak.Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List.BukalaPak.Data.map((item, index) => (
                <div
                  key={`bukalapak-${index}`}
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
                      Email :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Email ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Apollo Section */}
        {contents?.data.List?.Apollo?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">Apollo</h2>
            <div
              className={
                contents.data.List.Apollo.Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List.Apollo.Data.map((item, index) => (
                <div
                  key={`apollo-${index}`}
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
                      Email :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Email ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Pekerjaan :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Work ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Negara :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Country ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      URL Linkedin :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.LinkedinURL ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* People Data Labs Section */}
        {contents?.data.List?.PeopleDataLabs?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">
              People Data Labs
            </h2>
            <div
              className={
                contents.data.List.PeopleDataLabs.Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List.PeopleDataLabs.Data.map((item, index) => (
                <div
                  key={`people-data-labs-${index}`}
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
                      Email :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Email ?? "N/A"}
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
                </div>
              ))}
            </div>
          </div>
        )}

        {/* My Pertamina */}
        {contents?.data.List?.MyPertamina?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">
              My Pertamina
            </h2>
            <div
              className={
                contents.data.List.MyPertamina.Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List.MyPertamina.Data.map((item, index) => (
                <div
                  key={`my-pertamina-${index}`}
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
                      Email :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Email ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      No Hp :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Phone ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      No Hp :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Phone ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tk Indoscreen com */}
        {contents?.data.List?.["Tk.indoscreen.com"]?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">
              Tk.Indoscreen.com
            </h2>
            <div
              className={
                contents.data.List["Tk.indoscreen.com"].Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List["Tk.indoscreen.com"].Data.map(
                (item, index) => (
                  <div
                    key={`tk-indonesiascreen-com-${index}`}
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
                        Email :
                      </strong>
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.Email ?? "N/A"}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Instagram */}
        {contents?.data.List?.["Instagram Parsing"]?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">
              Instagram Parsing
            </h2>
            <div
              className={
                contents.data.List["Instagram Parsing"].Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List["Instagram Parsing"].Data.map(
                (item, index) => (
                  <div
                    key={`instagram-parsing-${index}`}
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
                        Email :
                      </strong>
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.Email ?? "N/A"}
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
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Donjuji */}
        {contents?.data.List?.DonJuji?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">
              Tk.Indoscreen.com
            </h2>
            <div
              className={
                contents.data.List.DonJuji.Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List.DonJuji.Data.map((item, index) => (
                <div
                  key={`donjuji-${index}`}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Data :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Data ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Leak Base :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.LeakBase ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Email :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Email ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Wattpad */}
        {contents?.data.List?.Wattpad?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">Wattpad</h2>
            <div
              className={
                contents.data.List.Wattpad.Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List.Wattpad.Data.map((item, index) => (
                <div
                  key={`Wattpad-${index}`}
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
                      Email :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Email ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Negara :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Country ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Tanggal Lahir :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {moment(item.BDay).format("YYYY-MM-DD") ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Lokasi :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Location ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      ID Facebook :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.FacebookID ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Trello */}
        {contents?.data.List?.Trello?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">Trello</h2>
            <div
              className={
                contents.data.List.Trello.Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List.Trello.Data.map((item, index) => (
                <div
                  key={`trello-${index}`}
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
                      Email :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Email ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Twitter */}
        {contents?.data.List?.["Twitter 200M"]?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">
              Twitter 200M
            </h2>
            <div
              className={
                contents.data.List["Twitter 200M"].Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List["Twitter 200M"].Data.map((item, index) => (
                <div
                  key={`twitter-${index}`}
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
                      Email :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Email ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pizap */}
        {contents?.data.List?.Pizap?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">Pizap</h2>
            <div
              className={
                contents.data.List.Pizap.Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List.Pizap.Data.map((item, index) => (
                <div
                  key={`pizap-${index}`}
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
                      Email :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Email ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      ID Facebook :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.FacebookID ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Kominfo */}

        {/* Wahana Express */}
        {contents?.data.List?.["Wahana Express"]?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">
              Wahana Express
            </h2>
            <div
              className={
                contents.data.List["Wahana Express"].Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List["Wahana Express"].Data.map((item, index) => (
                <div
                  key={`wahana-express-${index}`}
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
                      No Hp :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Phone ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      No Hp :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Phone2 ?? "N/A"}
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
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Kota :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.City ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Alamat Pengiriman :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.ShippingAddress ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Wilayah :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.Region ?? "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      Nama Pengirim :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.CompanyName ?? "N/A"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Linkedin Scraped Data */}
        {contents?.data.List?.["LinkedIn Scraped Data"]?.Data?.length !=
          null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">
              LinkedIn Scraped Data
            </h2>
            <div
              className={
                contents.data.List["LinkedIn Scraped Data"].Data.length === 1
                  ? "flex gap-6"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              }
            >
              {contents.data.List["LinkedIn Scraped Data"].Data.map(
                (item, index) => (
                  <div
                    key={`linkedin-scraped-data-${index}`}
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
                        Email :
                      </strong>
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.Email ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        Gender :
                      </strong>
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.Gender ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        ID LinkedIn :
                      </strong>
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.LinkedinID ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        Skills :
                      </strong>
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.Skills ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        Nama Instansi :
                      </strong>
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.CompanyName ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        Industri :
                      </strong>
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.Industry ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        Wilayah :
                      </strong>
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.Region ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                      <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        Geo Location :
                      </strong>
                      <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                        {item.GeoLocation ?? "N/A"}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Indonesian Car Owner */}
        {contents?.data.List?.IndonesiaCarOwner?.Data?.length != null && (
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">
              Data Kendaraan
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
                    onClick={
                      item.NIK
                        ? () => handleNavigate(item.NIK!, "nik")
                        : () => {}
                    }
                  >
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      NIK :
                    </strong>
                    <span
                      className={`${
                        item.NIK ? "text-blue-500 cursor-pointer" : ""
                      } truncate overflow-hidden whitespace-nowrap max-w-full block`}
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
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      No Polisi :
                    </strong>
                    <span className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      {item.AutoNumber ?? "N/A"}
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2 text-gray-600 text-sm mt-2"
                    onClick={
                      item.EngineNumber
                        ? () => handleNavigate(item.EngineNumber, "vehicle")
                        : () => {}
                    }
                  >
                    <strong className="truncate overflow-hidden whitespace-nowrap max-w-full block">
                      No Mesin :
                    </strong>
                    <span
                      className={`${
                        item.EngineNumber ? "text-blue-500 cursor-pointer" : ""
                      } truncate overflow-hidden whitespace-nowrap max-w-full block`}
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
        {!contents?.data.List?.Tokopedia?.Data?.length &&
          !contents?.data.List?.RedDoorz?.Data?.length &&
          !contents?.data.List?.BukalaPak?.Data?.length &&
          !contents?.data.List?.Apollo?.Data?.length &&
          !contents?.data.List?.Pizap?.Data?.length &&
          !contents?.data.List?.Wattpad?.Data?.length &&
          !contents?.data.List?.PeopleDataLabs?.Data?.length &&
          !contents?.data.List?.IndonesiaCarOwner?.Data?.length &&
          !contents?.data.List?.Dukcapil?.Data?.length &&
          !contents?.data.List?.PasswordIndex?.Data?.length &&
          !contents?.data.List?.["NumPass 80M"]?.Data?.length &&
          !contents?.data.List?.["Alien TxtBase"]?.Data?.length &&
          !contents?.data.List?.["naz.api"]?.Data?.length &&
          !contents?.data.List?.["RockYou 2024"].Data?.length &&
          !contents?.data.List?.["KomInfo Indonesia"]?.Data?.length &&
          !contents?.data.List?.["Tk.indoscreen.com"]?.Data?.length &&
          !contents?.data.List?.["Instagram Parsing"]?.Data?.length &&
          !contents?.data.List?.["Twitter 200M"]?.Data?.length &&
          !contents?.data.List?.["Wahana Express"]?.Data?.length && (
            <div className="text-center h-screen justify-center items-center flex text-gray-500 text-lg">
              No data available.
            </div>
          )}
      </div>
    </div>
  );
};

export default Content;
