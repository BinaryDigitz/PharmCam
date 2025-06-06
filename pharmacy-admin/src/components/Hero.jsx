import React, { useContext } from "react";
import { HeroCTA, Login } from './exportComp'
import AppContext from "../context/AppContext";
import { RegisterPharmacy } from "./LazyExport";


function Hero() {
 const { showLoginForm, showRegistrationForm} = useContext(AppContext)
  return (
    <div className="px-8 grid place-items-center text-center  mt-16 md:mt-12 2xl:mt-34 relative">
      <h2 className="heading2 montserrat lg:w-[70%]">
        YOUR TRUSTED PARTNER IN <span className="text-green-900">HEALTH</span> &
        WELLNESS.
      </h2>
      <div className="text-green-950">
        <h2 className="paragraph1">
          Bringing the Pharmacy to Your Fingertips.
        </h2>
        <p className="paragraph1 text ">
          Search for any medication any where in Cameroon, and see the nearest
          pharmacy close to you.
        </p>
      </div>
     <HeroCTA />
      {/* <div className="size-30 -top-30 left-0 lg:size-40 2xl:size-50 absolute md:left-30 md:top-10 lg:-bottom-50 rounded-full bg-gradient-to-b from-green-400/20  to-white/20"></div>
      <div className="size-80 lg:size-104 absolute -right-40 -bottom-80 lg:-bottom-50 rounded-full bg-gradient-to-b from-green-400/20  to-white/20"></div> */}

      <div className={`${showLoginForm ? 'fixed inset-0 bg-black/60 backdrop-blur-sm ' : 'hidden'}`}>
          <Login />
      </div>
      <div className={`${showRegistrationForm ? 'fixed inset-0 bg-black/60 backdrop-blur-sm overflow-y-scroll' : 'hidden'}`}>
          <RegisterPharmacy />
      </div>
    </div>
  );
}

export default Hero;
