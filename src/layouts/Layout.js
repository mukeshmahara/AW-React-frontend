import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sideBar/SideBar";

function Layout() {
  return (
    <div className="grid grid-cols-7 ">
      <div className="max-h-screen overflow-auto border rounded shadow-lg ">
        <SideBar />
      </div>
      <div className="max-h-screen col-span-6 overflow-auto shadow-lg">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
