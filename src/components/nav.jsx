// import { useState } from "react";
import "./nav.css";
import { AlignJustify } from "lucide-react";
import { BellDot } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";
import { ChartPie } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import Photo from "../assets/people19.png";
import Logo from "../assets/asaxiy-logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [nav, setNav] = useState(false);

  return (
    <>
      <nav className="NavBar sticky flex shadow-sm p-5 h-[90px] justify-between items-center">
        <div className="flex items-center justify-center">
          <button className="SideBarMenu w-16 h-11 bg-neutral-100 border-none rounded-md flex justify-center items-center">
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
      <div className="SideBar h-screen w-[420px]  bg-red-300 flex relative p-5 gap-5 flex-col">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <ul className="list-none no-underline flex justify-center items-center flex-col gap-3">
          <li className=" w-full ">
            <Link to="/tahlil">
              <button className="font-medium  bg-blue-500 text-white rounded-md flex items-center justify-start gap-3 p-2 text-xs uppercase w-full">
                <ChartPie className="inline-block" />
                Tahlil
              </button>
            </Link>
          </li>
          <li className="w-full">
            <Link to="/conversions">
              <button className="font-medium  bg-blue-500 text-white rounded-md flex items-center justify-start gap-3 p-2 text-xs uppercase w-full">
                <CircleDollarSign /> Valyuta kursi
              </button>
            </Link>
          </li>
          <li className="w-full">
            <Link to="/transactions">
              <button className="font-medium  bg-blue-500 text-white rounded-md flex items-center justify-start gap-3 p-2 text-xs uppercase w-full">
                <ArrowLeftRight />
                Transaktsiya boshqaruvi
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
