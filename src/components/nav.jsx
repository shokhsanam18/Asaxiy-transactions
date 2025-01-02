import { useState } from "react";
import { AlignJustify } from "lucide-react";
import { BellDot } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";
import { ChartPie } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import Photo from "../assets/people19.png";
import Logo from "../assets/asaxiy-logo.svg";
import { Link } from "react-router-dom";
import { useSidebarStore } from "../Store";

const Navbar = () => {
  const {side, SideBarShow} = useSidebarStore()
  return (
    <>
      <nav className="NavBar bg-white sticky z-20 top-0 flex shadow-sm p-5 h-[90px] justify-between items-center flex-wrap flex-shrink">
        <div className="flex items-center justify-center">
          <button
            className="SideBarMenu w-16 h-11 bg-neutral-100 border-none rounded-md flex justify-center items-center fixed left-96 hover:bg-gray-100"
            onClick={SideBarShow}
          >
            <AlignJustify className="Menu text-gray-800 hover:text-gray-600" />
          </button>
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

      {side ? (
        <div className="SideBar h-screen w-[320px] z-30 fixed top-0 left-0 bg-neutral-100 flex p-5 gap-10 flex-col translate-x-0 transition-all">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </div>
          <ul className="list-none no-underline flex justify-center items-start flex-col gap-4">
            <li className=" w-[260px] ">
              <Link to="/tahlil">
                <button className="font-bold  bg-blue-600 text-white rounded-md flex items-center justify-start gap-3 p-3 text-xs uppercase w-full hover:shadow-xl">
                  <ChartPie className="inline-block" />
                  Tahlil
                </button>
              </Link>
            </li>
            <li className="w-[260px]">
              <Link to="/conversions">
                <button className="font-bold  bg-blue-600 text-white rounded-md flex items-center justify-start gap-3 p-3 text-xs uppercase w-full hover:shadow-xl">
                  <CircleDollarSign /> Valyuta kursi
                </button>
              </Link>
            </li>
            <li className="w-[260px]">
              <Link to="/transactions">
                <button className="font-bold bg-blue-600 text-white rounded-md flex items-center justify-start gap-3 p-3 text-xs uppercase w-full hover:shadow-xl">
                  <ArrowLeftRight />
                  Transaktsiya boshqaruvi
                </button>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="SideBar h-screen w-[320px] z-30 fixed top-0 left-0 bg-neutral-100 flex p-5 gap-10 flex-col -translate-x-full transition-all">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </div>
          <ul className="list-none no-underline flex justify-center items-start flex-col gap-4">
            <li className=" w-[260px] ">
              <Link to="/tahlil">
                <button className="font-bold  bg-blue-600 text-white rounded-md flex items-center justify-start gap-3 p-3 text-xs uppercase w-full hover:shadow-xl">
                  <ChartPie className="inline-block" />
                  Tahlil
                </button>
              </Link>
            </li>
            <li className="w-[260px]">
              <Link to="/conversions">
                <button className="font-bold  bg-blue-600 text-white rounded-md flex items-center justify-start gap-3 p-3 text-xs uppercase w-full hover:shadow-xl">
                  <CircleDollarSign /> Valyuta kursi
                </button>
              </Link>
            </li>
            <li className="w-[260px]">
              <Link to="/transactions">
                <button className="font-bold bg-blue-600 text-white rounded-md flex items-center justify-start gap-3 p-3 text-xs uppercase w-full hover:shadow-xl">
                  <ArrowLeftRight />
                  Transaktsiya boshqaruvi
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
