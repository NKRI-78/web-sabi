import React, { Suspense } from "react";
import ContentRegister from "@/app/components/content/ContentRegister";

const Register: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center">Loading</div>
      }
    >
      <ContentRegister />
    </Suspense>
  );
};

export default Register;
