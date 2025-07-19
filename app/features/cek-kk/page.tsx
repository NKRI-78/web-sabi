import React, { Suspense } from "react";
import ContentKK from "@components/content/ContentKK";

const OnProgress: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center">Loading</div>
      }
    >
      <ContentKK />
    </Suspense>
  );
};

export default OnProgress;
