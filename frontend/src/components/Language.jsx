import React, { useContext, useState } from "react";
import { france_flag, placeholder_img, uk_flag } from "../assets/assets";
import AppContext from "../context/AppContext";

function Language() {
  const { lang, setLang } = useContext(AppContext);

  const languages = [
    { name: "EN", flag: uk_flag },
    { name: "FR", flag: france_flag },
  ];
  return (
    <section className=" bg-white/20 relative group border border-gray-200 text-green-950 hover:bg-white/50 trans shadow-green-400/20 shadow-md px-2 py-2 rounded cursor-pointer">
      <button
        title="Change language"
        className="flex items-center gap-1 cursor-pointer  "
      >
        <img
          src={lang === "EN" ? uk_flag : france_flag}
          width={20}
          alt={placeholder_img}
        />
        <span>{lang}</span>
      </button>
      <div className="absolute hidden group-hover:block border border-gray-300 top-10 -right-1 p-2 w-16 rounded">
        <button
          onClick={() => setLang("EN")}
          title="English language"
          className={`flex items-center gap-1 ${
            lang === "EN" && "hidden"
          } cursor-pointer hover:bg-gray-200 w-full `}
        >
          <img src={uk_flag} width={20} alt={placeholder_img} />
          <span>EN</span>
        </button>
        <button
          onClick={() => setLang("FR")}
          title=" Francaise"
          className={`flex items-center gap-1 cursor-pointer ${
            lang === "FR" && "hidden"
          } hover:bg-gray-200 w-full`}
        >
          <img src={france_flag} width={20} alt={placeholder_img} />
          <span>FR</span>
        </button>
      </div>
    </section>
  );
}

export default Language;
