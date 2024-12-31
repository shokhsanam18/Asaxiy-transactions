// import { useState } from "react";
import "./nav.css";
import { AlignJustify } from "lucide-react";
import { BellDot } from "lucide-react";
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
      <div className="SideBar">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <ul className="list-none no-underline">
          <li className="text-red-400">
            <Link to="/tahlil">Tahlil</Link>
          </li>
          <li>
            <Link to="/conversions">Valyuta kursi</Link>
          </li>
          <li>
            <Link to="/transactions">Transaktsiya boshqaruvi</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
