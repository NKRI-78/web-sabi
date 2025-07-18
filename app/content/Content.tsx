import React from "react";

import type { Metadata } from "next";
import Content from "@/app/components/content/Content";

export const metadata: Metadata = {
  title: "Admin | All Transaction",
  description: "All Transaction",
};

const ContentPage: React.FC = () => {
  return (
    <Content/>
  );
};

export default ContentPage;
