import { useState } from "react";
import './nav.css'
import { AlignJustify } from "lucide-react";
import { BellDot } from "lucide-react";
import Photo from "../assets/people19.png";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="NavBar">
      <button className="SideBarMenu">
        <AlignJustify className="Menu"/>
      </button>
      <div className="right">
        <button className="Bell">
          <BellDot />
        </button>
        <img src={Photo} alt="this is image"  />
      </div>
    </nav>
  );
};

export default Navbar;
