"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@redux/store";

import { getUserName } from "@lib/utils";
import { usePathname } from "next/navigation";
import { setShowLogoutModal } from "@redux/slices/modalSlice";
import { GetProfile } from "@app/lib/profileService";
import { setFullname } from "@redux/slices/profileSlice";

const LeftSidebar: React.FC = () => {
  
  const dispatch = useDispatch<AppDispatch>();

  const fullname = useSelector((state: RootState) => state.profile.fullname);

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await GetProfile();
      if (profile?.data?.profile.fullname) {
        dispatch(setFullname(profile.data.profile.fullname));
      }
    };
    fetchProfile();
  }, [dispatch]);

  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-4 z-[110]">
      <div className="flex items-center gap-2 mb-4">
        <img
          src={"/favicon.ico"}
          alt=""
          className="w-10 rounded-full bg-slate-200"
        />
        <h2 className="text-md font-bold">
          {fullname}
        </h2>
      </div>

      <ul>
        <li className="mb-4">
          <div>
            <Link
              href="/"
              className={`hover:text-gray-400 ${pathname === "/all-transaction" ? "underline" : ""
                }`}
            >
            Home
            </Link>
          </div>
        </li>
        <li className="mb-4">
          <div>
            <Link
              href="/auth/profile"
              className={`hover:text-gray-400 ${pathname === "/all-transaction" ? "underline" : ""
                }`}
            >
            Profile
            </Link>
          </div>
        </li>
        <li className="mb-4">
          <div>
            <Link
              href="/auth/change-password"
              className={`hover:text-gray-400 ${pathname === "/all-transaction" ? "underline" : ""
                }`}
            >
            Change Password
            </Link>
          </div>
        </li>
        <li className="mb-4">
          <button
            onClick={() => {
              dispatch(setShowLogoutModal(true));
            }}
            className="hover:text-gray-400"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
