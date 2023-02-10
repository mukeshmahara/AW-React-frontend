import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";
import { Link } from "react-router-dom";

function _header() {
  return (
    <div class="px-6 pt-6 lg:px-8">
      <nav class="flex items-center justify-between" aria-label="Global">
        <div class="flex lg:flex-1">
          <Link to={"/"} class="-m-1.5 p-1.5">
            <span class="sr-only">MK Software Solution</span>
            <img
              class="h-32"
              src="logo_transparent.png"
              height="250px"
              alt=""
            />
          </Link>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span class="sr-only">Open main menu</span>
            {/* <!-- Heroicon name: outline/bars-3 --> */}
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <Link
            to={"/projects"}
            class="text-sm font-semibold leading-6 text-gray-900"
          >
            Our Projects
          </Link>

          <Link
            to={"/team"}
            class="text-sm font-semibold leading-6 text-gray-900"
          >
            Team
          </Link>

          <Link to={"#"} class="text-sm font-semibold leading-6 text-gray-900">
            Marketplace
          </Link>

          <Link to={"#"} class="text-sm font-semibold leading-6 text-gray-900">
            Company
          </Link>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to={"/login"}
            class="text-sm mx-5 border rounded p-2 font-semibold leading-6 text-gray-900"
          >
            sign in <FaSignInAlt className="inline" />{" "}
          </Link>
          <Link
            to={"/sign up"}
            class="text-sm border rounded p-2 bg-indigo-50 font-semibold leading-6 text-transparent-100"
          >
            sign up <IoMdCreate className="inline" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default _header;
