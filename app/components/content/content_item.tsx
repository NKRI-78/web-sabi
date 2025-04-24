"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";
import {
  setIsLoading,
  setError,
  fetchContentListAsync,
} from "@redux/slices/contentSlice";
import { LoadingSpinner } from "@components/loading/Spinner";

// Debounce helper
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
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {contents?.users.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <p className="text-gray-600 text-sm mt-2">{item.email}</p>
              <p className="text-gray-600 text-sm mt-2">{item.age}</p>
              <p className="text-gray-600 text-sm mt-2">{item.address.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentItems;
