import React from "react";
import { Nav } from "./navbar";
import { Sidebar } from "./sidebar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Nav />
        <Outlet />
      </div>
    </div>
  );
};
