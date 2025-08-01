"use client";

import "./globals.css";
import "reactjs-tiptap-editor/style.css";

import { store } from "@redux/store";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";

import localFont from "next/font/local";

import Header from "@components/header/Header";
import LeftSidebar from "@components/sidebar/LeftSidebar";
import ModalLogout from "@components/modal/logout/Logout";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Provider store={store}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {pathname === "/auth/login" ? (
            <div className="flex items-center justify-center h-screen">
              {children}
            </div>
          ) : (
            <div className="flex">
              {isSidebarOpen && (
                <LeftSidebar
                  isSidebarOpen={isSidebarOpen}
                  setIsSidebarOpen={setIsSidebarOpen}
                />
              )}

              <div
                className={`${
                  isSidebarOpen ? "ml-64" : "ml-0"
                } flex flex-col flex-grow`}
              >
                <Header
                  isSidebarOpen={isSidebarOpen}
                  setIsSidebarOpen={setIsSidebarOpen}
                />

                <div className="flex flex-grow">{children}</div>
              </div>
            </div>
          )}
          <ModalLogout />
        </body>
      </html>
    </Provider>
  );
}
