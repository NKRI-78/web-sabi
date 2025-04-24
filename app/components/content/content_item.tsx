"use client";

import React, { useEffect } from "react";

import { LoadingSpinner } from "@components/loading/Spinner";

import { AppDispatch, RootState } from "@redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsLoading,
  setError,
  fetchContentListAsync,
} from "@redux/slices/contentSlice";

const ContentItems: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const search = useSelector((state: RootState) => state.content.search)
  const isLoading = useSelector((state: RootState) => state.content.isLoading);

  useEffect(() => {
    dispatch(setIsLoading(true));
    try {
      dispatch(fetchContentListAsync());
    } catch (error) {
      dispatch(setError((error as Error).message));
    } finally {
      dispatch(setIsLoading(false));
    }
  }, []);

  return isLoading ? (
    <div className="w-full flex items-center justify-center h-screen">
      <LoadingSpinner />
    </div>
  ) : (
    <div className="bg-white h-screen p-4 py-10 w-full">
      <div className="overflow-x-auto max-w-[1400px] max-h-[900px]">
        <p className="text-black">{search}</p>
      </div>
    </div>
  );
};

export default ContentItems;