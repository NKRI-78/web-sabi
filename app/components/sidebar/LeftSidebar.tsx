"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@redux/store";
import { ChevronRight, ChevronDown, ChevronsLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { setShowLogoutModal } from "@redux/slices/modalSlice";
import { GetProfile } from "@app/lib/profileService";
import { setFullname } from "@redux/slices/profileSlice";

interface LeftSidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const fullname = useSelector((state: RootState) => state.profile.fullname);
  const pathname = usePathname();

  const [showDropdownIdentity, setShowDropdownIdentity] = useState(false);
  const [showDropdownLocation, setShowDropdownLocation] = useState(false);
  const [showDropdownInformation, setShowDropdownInformation] = useState(false);
  const [showDropdownVehicle, setShowDropdownVehicle] = useState(false);
  const [showDropdownBill, setShowDropdownBill] = useState(false);
  const [showDropdownFinance, setShowDropdownFinance] = useState(false);
  const [showDropdownSecurity, setShowDropdownSecurity] = useState(false);
  const [showDropdownSettings, setShowDropdownSettings] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await GetProfile();
      if (profile?.data?.profile.fullname) {
        dispatch(setFullname(profile.data.profile.fullname));
      }
    };
    fetchProfile();
  }, [dispatch]);

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-4 z-[110] overflow-y-auto">
      <div className="flex justify-end">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <ChevronsLeft />
        </button>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <img
          src={"/favicon.ico"}
          alt=""
          className="w-10 rounded-full bg-slate-200"
        />
        <h2 className="text-md font-bold">{fullname}</h2>
      </div>

      <ul>
        <li className="mb-4">
          <Link
            href="/"
            className={`hover:text-gray-400 ${
              isActive("/") ? "text-green-400 font-bold" : ""
            }`}
          >
            Global Search
          </Link>
        </li>
        <li className="mb-4">
          <button
            onClick={() => setShowDropdownIdentity(!showDropdownIdentity)}
            className="hover:text-gray-400 w-full text-left flex items-center justify-between"
          >
            <span>Identitas dan Kependudukan</span>
            {showDropdownIdentity ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>
          {showDropdownIdentity && (
            <ul className="ml-4 mt-2 max-h-64 overflow-y-auto pr-2">
              {[
                { label: "N.I.K", path: "nik" },
                {
                  label: "Register",
                  path: "register",
                },
                {
                  label: "Kartu Keluarga",
                  path: "cek-kk",
                },
              ].map((feature, idx) => (
                <li key={idx} className="mb-2">
                  <Link
                    href={`/features/${feature.path}`}
                    className={`hover:text-gray-300 ${
                      isActive(`/features/${feature.path}`)
                        ? "text-green-400 font-bold"
                        : ""
                    }`}
                  >
                    {feature.label
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="mb-4">
          <button
            onClick={() => setShowDropdownLocation(!showDropdownLocation)}
            className="hover:text-gray-400 w-full text-left flex items-center justify-between"
          >
            <span>Lokasi dan Pelacakan</span>
            {showDropdownLocation ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>
          {showDropdownLocation && (
            <ul className="ml-4 mt-2 max-h-64 overflow-y-auto pr-2">
              {[
                { label: "Location", path: "location" },
                {
                  label: "GSM Tracker",
                  path: "gsm-tracker",
                },
              ].map((feature, idx) => (
                <li key={idx} className="mb-2">
                  <Link
                    href={`/features/${feature.path}`}
                    className={`hover:text-gray-300 ${
                      isActive(`/features/${feature.path}`)
                        ? "text-green-400 font-bold"
                        : ""
                    }`}
                  >
                    {feature.label
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li className="mb-4">
          <Link
            href="/features/vehicle"
            className={`hover:text-gray-400 ${
              isActive("/features/vehicle") ? "text-green-400 font-bold" : ""
            }`}
          >
            Kendaraan
          </Link>
        </li>
        <li className="mb-4">
          <button
            onClick={() => setShowDropdownBill(!showDropdownBill)}
            className="hover:text-gray-400 w-full text-left flex items-center justify-between"
          >
            <span>Informasi Perusahaan</span>
            {showDropdownBill ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>
          {showDropdownBill && (
            <ul className="ml-4 mt-2 max-h-64 overflow-y-auto pr-2">
              {[
                { label: "Nama Perusahaan", path: "company-name" },
                { label: "Nama Owner", path: "owner-company" },
              ].map((feature, idx) => (
                <li key={idx} className="mb-2">
                  <Link
                    href={`/features/${feature.path}`}
                    className={`hover:text-gray-300 ${
                      isActive(`/features/${feature.path}`)
                        ? "text-green-400 font-bold"
                        : ""
                    }`}
                  >
                    {feature.label
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="mb-4">
          <button
            onClick={() => setShowDropdownFinance(!showDropdownFinance)}
            className="hover:text-gray-400 w-full text-left flex items-center justify-between"
          >
            <span>Keuangan</span>
            {showDropdownFinance ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>
          {showDropdownFinance && (
            <ul className="ml-4 mt-2 max-h-64 overflow-y-auto pr-2">
              {[
                { label: "E Wallet", path: "e-wallet" },
                { label: "Bank", path: "cek-rekening" },
              ].map((feature, idx) => (
                <li key={idx} className="mb-2">
                  <Link
                    href={`/features/${feature.path}`}
                    className={`hover:text-gray-300 ${
                      isActive(`/features/${feature.path}`)
                        ? "text-green-400 font-bold"
                        : ""
                    }`}
                  >
                    {feature.label
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="mb-4">
          <button
            onClick={() => setShowDropdownSecurity(!showDropdownSecurity)}
            className="hover:text-gray-400 w-full text-left flex items-center justify-between"
          >
            <span>CyberLeaks Check</span>
            {showDropdownSecurity ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>
          {showDropdownSecurity && (
            <ul className="ml-4 mt-2 max-h-64 overflow-y-auto pr-2">
              {[{ label: "Phising", path: "phising" }].map((feature, idx) => (
                <li key={idx} className="mb-2">
                  <Link
                    href={`/features/${feature.path}`}
                    className={`hover:text-gray-300 ${
                      isActive(`/features/${feature.path}`)
                        ? "text-green-400 font-bold"
                        : ""
                    }`}
                  >
                    {feature.label
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="mb-4">
          <button
            onClick={() => setShowDropdownSettings(!showDropdownSettings)}
            className="hover:text-gray-400 w-full text-left flex items-center justify-between"
          >
            <span>Settings</span>
            {showDropdownSettings ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>
          {showDropdownSettings && (
            <ul className="ml-4 mt-2 max-h-64 overflow-y-auto pr-2">
              {[
                { label: "Profile", path: "profile" },
                {
                  label: "Change Password",
                  path: "change-password",
                },
              ].map((feature, idx) => (
                <li key={idx} className="mb-2">
                  <Link
                    href={`/auth/${feature.path}`}
                    className={`hover:text-gray-300 ${
                      isActive(`/features/${feature.path}`)
                        ? "text-green-400 font-bold"
                        : ""
                    }`}
                  >
                    {feature.label
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className="mb-4">
          <button
            onClick={() => dispatch(setShowLogoutModal(true))}
            className="text-red-500 hover:text-red-600"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
