
import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function User() {
 const {user, isLoggedin, navigate , setLoggedin} = useContext(AppContext)

  return (
    <div className="hidden md:block ">
      {isLoggedin ? (
        <div className="flex items-center gap-4">
          <div
            title="User profile"
            className="group relative cursor-pointer "
          >
            <p className=" size-8 lg:size-10 rounded-full grid place-items-center bg-black text-white">M</p>
            <div className="w-40 p-4 bg-green-100/20 hidden absolute rounded shadow text-sm group-hover:flex top-10 flex-col gap-1.5">
                <p title=" Profile"
                 className="text-black hover:bg-green-400/20 rounded text-nowrap">Profile</p>
                <p title="Verify account"
                className="text-black hover:bg-green-400/20 rounded">Verify account</p>
                <p title="Log out"
                className="text-red-500 hover:bg-red-400/20 rounded">Log out</p>

            </div>
          </div>
          <button
            title="Log out"
            className=" md:hidden border border-gray-500 rounded px-4 py-2 text-sm shadow md:hover:scale-x-105 trans cursor-pointer"
          >
            Log out
          </button>
        </div>
      ) : (
        <button
        onClick={() => navigate('/login')}
          title="Login page"
          className="text-sm bg-black md:hover:scale-x-105 text-green-100 px-4 py-2 rounded shadow cursor-pointer "
        >
          Login / Create acount
        </button>
      )}
    </div>
  );
}

export default User;
