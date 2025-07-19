import ContentNik from "@/app/components/content/ContentNik";
import React, { Suspense } from "react";

const Nik: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center">Loading</div>
      }
    >
      <ContentNik />
    </Suspense>
  );
};

export default Nik;
