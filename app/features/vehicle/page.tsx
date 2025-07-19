"use client";

import React, { useEffect } from "react";
import ContentKendaraan from "@/app/components/content/ContentKendaraan";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { resetContents, setSearch } from "@/redux/slices/contentSlice";
import { useSearchParams } from "next/navigation";

const Vehicle: React.FC = () => {
  const dispatch = useDispatch();
  const params = useSearchParams();
  const isRedirect = params.get("redirect") === "1";

  useEffect(() => {
    if (!isRedirect) {
      dispatch(setSearch(""));
      dispatch(resetContents());
    }
  }, [isRedirect]);

  return <ContentKendaraan />;
};

export default Vehicle;
