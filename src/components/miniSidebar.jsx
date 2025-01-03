import React from "react";
import { ArrowLeftRight } from "lucide-react";
import { ChartPie } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const MiniSidebar = () => {
  return (
    <div className="bg-blue-600 sticky bottom-0 rounded-md lg:hidden">
      <ul className="list-none no-underline flex justify-center items-center  gap-3">
        <li>
          <Link to="/tahlil">
            <button className="font-bold  text-white  w-full">
              <ChartPie />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/conversions">
            <button className="font-bold text-white w-full">
              <CircleDollarSign />
            </button>
          </Link>
        </li>
        <li>
          <Link to="/transactions">
            <button className="font-bold text-white  w-full">
              <ArrowLeftRight />
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MiniSidebar;
