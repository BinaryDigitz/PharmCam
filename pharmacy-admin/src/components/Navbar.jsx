import React from "react";
import { Logo, Language, Hambuger, User } from "./exportComp";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="px-4 py-8 lg:py-4  ">
      <nav className="flex justify-between md:justify-around items-center">
        <Link to="/">
          <Logo textSize="heading4" logoSize={"size-8"} />
        </Link>
        <div className="flex items-center gap-4">
          <Language />
       
          <Hambuger />
          <User />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
