"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@redux/store";

import { ChevronRight, ChevronDown } from "lucide-react";

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

  const [showDropdown, setShowDropdown] = useState(false);

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
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="hover:text-gray-400 w-full text-left flex items-center justify-between"
        >
          <span>Features</span>
          {showDropdown ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
        {showDropdown && (
          <ul className="ml-4 mt-2">
            <li className="mb-2">
              <Link href="/features/nik" className="hover:text-gray-300">
                Nik
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/features/register" className="hover:text-gray-300">
                Register
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/features/cek-kk" className="hover:text-gray-300">
                Cek KK
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/features/cek-pos" className="hover:text-gray-300">
                Cek POS
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/features/trace-nik" className="hover:text-gray-300">
                Trace NIK
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/features/trace-imei" className="hover:text-gray-300">
                Trace IMEI
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/features/nopol" className="hover:text-gray-300">
                Nopol
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/features/noka" className="hover:text-gray-300">
                Noka
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/features/nosin" className="hover:text-gray-300">
                Nosin
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/features/pln" className="hover:text-gray-300">
                PLN
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/features/e-wallet" className="hover:text-gray-300">
                E-Wallet
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/features/cek-rekening" className="hover:text-gray-300">
                Cek Rekening
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/features/imei-2-phone" className="hover:text-gray-300">
                IMEI 2 Phone
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/features/phone-2-imei" className="hover:text-gray-300">
                Phone 2 IMEI 
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/features/gsm-tracker" className="hover:text-gray-300">
                GSM Tracker 
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/features/bill" className="hover:text-gray-300">
                Bill 
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/features/phising" className="hover:text-gray-300">
                Phising 
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/features/cek-imei" className="hover:text-gray-300">
                Cek IMEI
              </Link>
            </li>
          </ul>
        )}
      </li>
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
