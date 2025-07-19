import React, { Suspense } from "react";
import ContentKendaraan from "@/app/components/content/ContentKendaraan";

const Vehicle: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center">Loading</div>
      }
    >
      <ContentKendaraan />
    </Suspense>
  );
};

export default Vehicle;
