import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftRight } from "lucide-react";
import { ChartPie } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import { useSidebarStore } from "../Store";
import Logo from "../assets/asaxiy-logo.svg";

export const Sidebar = () => {
  const { side } = useSidebarStore();
  return (
    <>
      {side ? (
        <div className="SideBar z-10 h-screen w-[320px] sticky top-0 left-0 bg-neutral-100 flex p-5 gap-10 flex-col translate-x-0 transition-all">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </div>
          <ul className="list-none no-underline flex justify-center items-start flex-col gap-3">
            <li className=" w-[260px] ">
              <Link to="/tahlil">
                <button className="font-bold  bg-blue-600 text-white rounded-md flex items-center justify-start gap-3 p-3 text-xs uppercase w-full hover:shadow-xl">
                  <ChartPie />
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
      ) : null}
    </>
  );
};
