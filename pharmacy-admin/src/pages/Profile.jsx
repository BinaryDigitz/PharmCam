import React, { useState } from "react";
import { Title } from "../components/exportComp";
import { UpdateProfile, DeleteDialogue } from "../components/LazyExport";
import {
  verified,
  placeholder_img,
  personnel,
  call,
  email,
  direction,
  location,
  remove,
} from "../assets/assets";

function Profile() {
  const [showDelete, setShowDelete] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  return (
    <section className="mx-auto max-w-lg lg:mt-8 relative">
      <Title text1={""} text2={"Profile"} />

      <div className="w-sm lg:w-lg mx-auto mt-4 mt-8">
        <section className=" p-4 rounded-xl md:w-sm bg-gradient-to-b  from-green-700/80 to-green-50 text-[16px] mx-auto lg:text-[16px]">
          <div className="flex gap-4 items-center bg-gradient-to-b  from-green-700/70 to-green-950 p-4 rounded">
            <img src={verified} width={25} alt={placeholder_img} />
            <p className="text-lg lg:text-xl font-bold text-green-100">
              Pharmacy Eden
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-4 text-green-">
            <div className="flex gap-4 items-center ">
              <img src={personnel} width={25} alt={placeholder_img} />
              <p className="heading">Dr. Boris Ayam</p>
            </div>
            <div className="flex gap-4 items-center ">
              <img src={call} width={25} alt={placeholder_img} />
              <p className="heading">+237 653775159 </p>
            </div>
            <div className="flex gap-4 items-center ">
              <img src={email} width={25} alt={placeholder_img} />
              <p className="heading">contact@email.com</p>
            </div>
            <div className="flex gap-4 items-center ">
              <img src={location} width={25} alt={placeholder_img} />
              <p className="heading">Douala, Littoral Region</p>
            </div>
            <button
              title="update your profile"
              onClick={() => setShowUpdate(true)}
              className="flex gap-4 items-center cursor-pointer rounded-lg mt-4 bg-black hover:bg-black/90 trans text-green-100 py-3 justify-center"
            >
              <img src={direction} width={25} alt={placeholder_img} />
              <p className="heading">Update account</p>
            </button>
            <button
              title="Delete"
              onClick={() => setShowDelete(true)}
              className="flex gap-4 items-center cursor-pointer text-red-100 rounded-lg mt-2 bg-red-800 hover:bg-red-800/90 trans text-green-100 py-3 justify-center"
            >
              <img src={remove} width={25} alt={placeholder_img} />
              <p className="heading">Delete account</p>
            </button>
          </div>
        </section>
      </div>
      <div
        className={
          showDelete ? "fixed inset-0 bg-black/60 backdrop-blur-sm " : "hidden"
        }
      >
        <DeleteDialogue setShowDelete={setShowDelete} />
      </div>
      <div
        className={
          showUpdate ? "fixed inset-0 bg-black/60 backdrop-blur-sm " : "hidden"
        }
      >
        <UpdateProfile setShowUpdate={setShowUpdate} />
      </div>
    </section>
  );
}

export default Profile;
