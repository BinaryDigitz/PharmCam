
import React, { useState } from "react";
import { search, close } from "../assets/assets";

function Searchbar() {
  const [searchInput, setSearchInput] = useState("");
  const [isActive, setSActive] = useState(false);

  function handleActive() {
    setSActive(!isActive)
  }

  return (
    <div className="grid place-items-center w-full">
      <div className="flex border border-green-900/40 rounded  justify-between gap-4  w-sm lg:w-lg ">
        <label
          onClick={ handleActive }
          htmlFor="search"
          className=" p-2 rounded bg-black/10 "
        >
          <Image
            src={search}
            width={30}
            className="cursor-pointer"
            alt="search icon"
          />
        </label>
        <input
          type="text"
          id="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="text-sm placeholder:text-green-900 border-none flex-1 outline-none placeholder:italic"
          maxLength={10}
          placeholder="Search medication or pharmacy"
        />
        <button
          onClick={() => setSearchInput("")}
          title="Clear search"
          className="p-2 rounded cursor-pointer hover:bg-green-400/20"
        >
          <Image
            src={search}
            width={30}
            alt="clear search"
            className=" rounded  "
          />
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
