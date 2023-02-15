import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";
import { Link } from "react-router-dom";

function _header() {
  return (
    <div className="px-6 pt-6 lg:px-8">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to={"/"} className="-m-1.5 p-1.5">
            <span className="sr-only">MK Software Solution</span>
            <img
              className="h-32"
              src="logo_transparent.png"
              height="250px"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            {/* <!-- Heroicon name: outline/bars-3 --> */}
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to={"/projects"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Our Projects
          </Link>

          <Link
            to={"/team"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Team
          </Link>

          <Link to={"#"} className="text-sm font-semibold leading-6 text-gray-900">
            Marketplace
          </Link>

          <Link to={"#"} className="text-sm font-semibold leading-6 text-gray-900">
            Company
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to={"/login"}
            className="p-2 mx-5 text-sm font-semibold leading-6 text-gray-900 border rounded"
          >
            sign in <FaSignInAlt className="inline" />{" "}
          </Link>
          <Link
            to={"/sign up"}
            className="p-2 text-sm font-semibold leading-6 border rounded bg-indigo-50 text-transparent-100"
          >
            sign up <IoMdCreate className="inline" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default _header;
