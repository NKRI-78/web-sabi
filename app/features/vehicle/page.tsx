"use client";

import React, { useEffect } from "react";
import ContentKendaraan from "@/app/components/content/ContentKendaraan";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import {
  fetchContentListAsync,
  resetContents,
  setSearch,
} from "@/redux/slices/contentSlice";
import { useSearchParams } from "next/navigation";

const Vehicle: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("search");

  useEffect(() => {
    const redirect = sessionStorage.getItem("isRedirect") === "true";

    if (!redirect) {
      dispatch(setSearch(""));
      dispatch(resetContents());
    }
    sessionStorage.removeItem("isRedirect");
  }, []);

  useEffect(() => {
    if (searchValue) {
      dispatch(setSearch(searchValue));
      dispatch(fetchContentListAsync(searchValue));
    }
  }, [searchValue]);

  return <ContentKendaraan />;
};

export default Vehicle;
