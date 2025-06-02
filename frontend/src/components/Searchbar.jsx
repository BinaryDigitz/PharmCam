
import React, { useContext, useState } from "react";
import { search, placeholder_img } from "../assets/assets";
import AppContext from "../context/AppContext";

function Searchbar() {
  const { setShowSearchBar } = useContext(AppContext)
  const [searchInput, setSearchInput] = useState("");
  const [isActive, setSActive] = useState(false);

  function handleActive() {
    setShowSearchBar(true)
    setSActive(!isActive)
  }

  return (
    <div className="grid place-items-cente  overflow-hidden mb-2">
      <div className="flex border border-green-900/40 rounded-lg overflow-hidden flex-nowrap justify-between gap-4  sm:max-w-[90%] lg:w-sm lg:mx-12 ">
        <label
          onClick={ handleActive }
          htmlFor="search"
          className=" p-2  bg-black"
        >
          <img
            src={search}
            width={30}
            className="cursor-pointer"
            alt={placeholder_img}
          />
        </label>
        <input
          type="text"
          id="search"
          onFocus={()=>setShowSearchBar(true)}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="text-sm placeholder:text-green-900 border-none flex-1 outline-none placeholder:italic"
          maxLength={10}
          placeholder="Search medication or pharmacy"
        />
        <button
          onClick={() => setSearchInput("")}
          title="Clear search"
          className="p-2 rounded cursor-pointer "
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
