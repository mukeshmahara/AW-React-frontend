import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBox({ placeholder, handleSearch }) {
  return (
    <label className="relative block">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <AiOutlineSearch fontSize={24} className="mb-2 text-indigo-400" />
      </span>

      <input
        className="py-3 pr-3 bg-white border border-indigo-300 rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 pl-9 focus:outline-none focus:border-indigo-300 focus:ring-indigo-300 focus:ring-1 sm:text-sm"
        placeholder={placeholder}
        type="text"
        name="search"
        onChange={handleSearch}
      />
    </label>
  );
}

export default SearchBox;
