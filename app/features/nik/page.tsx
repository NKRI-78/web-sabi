"use client";

import ContentNik from "@/app/components/content/ContentNik";
import {
  fetchContentListAsync,
  resetContents,
  setSearch,
} from "@/redux/slices/contentSlice";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
const Nik: React.FC = () => {
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

  return <ContentNik />;
};

export default Nik;
