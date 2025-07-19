"use client";

import React, { useEffect } from "react";
import ContentKK from "@/app/components/content/ContentKK";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useSearchParams } from "next/navigation";
import { fetchContentListAsync, resetContents, setSearch } from "@/redux/slices/contentSlice";

const OnProgress: React.FC = () => {
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

  return <ContentKK />;
};

export default OnProgress;
