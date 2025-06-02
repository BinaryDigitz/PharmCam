import React, { useContext } from "react";
import { close, placeholder_img } from "../assets/assets";
import AppContext from "../context/AppContext";

function DisplaySearch() {
  const { setShowSearchBar } = useContext(AppContext);
  return (
    <section className="relative p-4 rounded-lg w-full   min-h-[63vh] lg:min-h-[50dvh]  scrollbar-hidden ">
      <button
        onClick={() => setShowSearchBar(false)}
        title="Close search"
        className="absolute right-4 top-4 cursor-pointer "
      >
        <img src={close} width={25} alt={placeholder_img} />
      </button>
    </section>
  );
}

export default DisplaySearch;
