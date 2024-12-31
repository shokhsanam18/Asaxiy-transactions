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
      <nav className="NavBar">
        <button className="SideBarMenu">
          <AlignJustify className="Menu" />
        </button>
        <div className="right">
          <button className="Bell">
            <BellDot />
          </button>
          <img src={Photo} alt="this is image" className="photo" />
        </div>
      </nav>
      <div className="SideBar">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <ul>
          <li>
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
