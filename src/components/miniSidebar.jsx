import React from "react";
import { ArrowLeftRight } from "lucide-react";
import { ChartPie } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const MiniSidebar = () => {
  return (
    <div className="bg-blue-600 sticky bottom-0 rounded-t-2xl h-14 lg:hidden flex justify-center items-center">
      <ul className="list-none no-underline flex justify-evenly gap-12 items-center w-full">
        <li className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
          <Link to="/tahlil">
            <button className="font-bold  text-blue-500 flex justify-center">
              <ChartPie />
            </button>
          </Link>
        </li>
        <li className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
          <Link to="/conversions">
            <button className="font-bold  text-blue-500 flex justify-center">
              <CircleDollarSign />
            </button>
          </Link>
        </li>
        <li className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
          <Link to="/transactions">
            <button className="font-bold  text-blue-500 flex justify-center">
              <ArrowLeftRight />
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MiniSidebar;
