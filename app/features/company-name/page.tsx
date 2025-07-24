"use client";

import React, { Suspense } from "react";
import NotFound from "@/app/components/notfound/NotFound";
import ContentCompany from "@/app/components/content/ContentCompany";

const CompanyName: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center">Loading</div>
      }
    >
      <ContentCompany />
    </Suspense>
  );
};

export default CompanyName;
