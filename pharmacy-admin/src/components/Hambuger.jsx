import React, { useContext } from "react";
import { menu, placeholder_img } from "../assets/assets";
import AppContext from "../context/AppContext";

function Hambuger() {
  const { isLoggedin } = useContext(AppContext);
  return (
    <div
      title="Change theme"
      className={`${
        !isLoggedin && "hidden"
      } md:hidden hover:bg-white/20  text-green-950 hover:opacity-80 trans px-4 py-2 rounded cursor-pointer`}
    >
      <img loading="lazy" width={30} src={menu} alt={placeholder_img} />
    </div>
  );
}

export default Hambuger;
