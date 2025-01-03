import React from "react";
import { AlignJustify } from "lucide-react";
import { BellDot } from "lucide-react";
import Photo from "../assets/people19.png";
import { useSidebarStore } from "../Store";
import Logo from "../assets/asaxiy-logo.svg";

export const Nav = () => {
  const { SideBarShow } = useSidebarStore();
  return (
    <nav className="NavBar bg-white sticky top-0 flex shadow-sm p-5 h-[90px] justify-between items-center flex-wrap ">
      <div className="flex items-center justify-center">
        <button
          className="SideBarMenu w-16 h-11 bg-neutral-100 border-none rounded-md lg:flex hidden justify-center items-center hover:bg-gray-100"
          onClick={SideBarShow}
        >
          <AlignJustify className="Menu text-gray-800 hover:text-gray-600" />
        </button>
        <div className="logo lg:hidden">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
      </div>
      <div className="right flex gap-4 items-center justify-center">
        <div className="flex justify-center items-center">
          <button className="Bell h-14 w-14 rounded-full border-none bg-neutral-50 shadow-md hover:bg-gray-100 flex justify-center items-center">
            <BellDot className="text-gray-800 self-center" />
          </button>
        </div>

        <img
          src={Photo}
          alt="this is image"
          className="photo h-14 w-14 rounded-full border-none bg-neutral-50 shadow-md"
        />
      </div>
    </nav>
  );
};
