"use client";

import {
  Mail,
  Phone,
  User,
  Home,
  Locate,
  IdCard,
  Building,
  PersonStanding,
} from 'lucide-react';

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";
import {
  setIsLoading,
  setError,
  fetchContentListAsync,
} from "@redux/slices/contentSlice";
import { LoadingSpinner } from "@components/loading/Spinner";

const useDebouncedValue = (value: string, delay: number) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounced;
};

const ContentItems: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const search = useSelector((state: RootState) => state.content.search);
  const contents = useSelector((state: RootState) => state.content.contents);
  const isLoading = useSelector((state: RootState) => state.content.isLoading);

  const debouncedSearch = useDebouncedValue(search, 500);

  useEffect(() => {
    const fetchData = async () => {
      if (!debouncedSearch.trim()) return;
      
      dispatch(setIsLoading(true));
      try {
        await dispatch(fetchContentListAsync(debouncedSearch));
      } catch (error) {
        dispatch(setError((error as Error).message));
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchData();
  }, [debouncedSearch, dispatch]);

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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {contents.data.List.Tokopedia.Data.map((item, index) => (
                <div
                  key={`tokopedia-${index}`}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <User className="w-4 h-4 flex-shrink-0" />
                    <span>{item.FullName ?? "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span>{item.Email ?? "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>{item.Phone ?? "N/A"}</span>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {contents.data.List.RedDoorz.Data.map((item, index) => (
                <div
                  key={`reddoorz-${index}`}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <User className="w-4 h-4 flex-shrink-0" />
                    <span>{item.FullName ?? "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span>{item.Email ?? "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <Building className="w-4 h-4 flex-shrink-0" />
                    <span>{item.Provider ?? "N/A"}</span>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {contents.data.List.Dukcapil.Data.map((item, index) => (
                <div
                  key={`dukcapil-${index}`}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <User className="w-4 h-4 flex-shrink-0" />
                    <span>{item.FullName ?? "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <Home className="w-4 h-4 flex-shrink-0" />
                    <span>{item.Address ?? "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <Locate className="w-4 h-4 flex-shrink-0" />
                    <span>{item.Location ?? "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <IdCard className="w-4 h-4 flex-shrink-0" />
                    <span>{item.Passport ?? "N/A"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mt-2">
                    <PersonStanding className="w-4 h-4 flex-shrink-0" />
                    <span>{item.Gender ?? "N/A"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Handle if both are empty */}
        {(!contents?.data.List?.Tokopedia?.Data?.length &&
          !contents?.data.List?.RedDoorz?.Data?.length && 
          !contents?.data.List?.Dukcapil?.Data?.length
        ) && (
          <div className="text-center h-screen justify-center items-center flex text-gray-500 text-lg">
            No data available.
          </div>
        )}
      </div>
    </div>
  );
  
};

export default ContentItems;
