"use client";

import "./globals.css";
import "reactjs-tiptap-editor/style.css";

import {  store } from "@redux/store";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";

import localFont from "next/font/local";

import Header from "@components/header/Header";

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

  return (
    <Provider store={store}>
        <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            {pathname === "/auth/login" 
              ? (
                <div className="flex items-center justify-center h-screen">
                  {children}
                </div>
              ) 
              : ( 
                  <div className="flex flex-col flex-grow">
                    <Header />

                    <div className="flex flex-grow">
                      {children}
                    </div>
                  </div>
                ) 
              }
            </body>
          </html>
      </Provider>
    );
}
