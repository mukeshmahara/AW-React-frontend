import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import sidebarData from "./sidebarData";

function SideBar() {
  const [active, setActive] = useState("Dashboard");

  const handleClick = (item) => {
    setActive(item.name);
  };
  return (
    <div className="shadow-lg ">
      <div className="flex items-center mb-4">
        <img
          src="logo_transparent.png"
          className="rounded-full card"
          alt="logo"
        />
      </div>
      <hr />
      <div className="max-h-screen p-5 overflow-auto ">
        {sidebarData.map((item) => {
          return (
            <NavLink
              key={item.id}
              to={item.link}
              className={
                active === item.name
                  ? "font-bold text-indigo-900 decoration-sky-500"
                  : ""
              }
              onClick={() => handleClick(item)}
            >
              <div className="grid grid-cols-4 mt-4 ">
                {item.icon}
                <p className="object-none">{item.name}</p>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
