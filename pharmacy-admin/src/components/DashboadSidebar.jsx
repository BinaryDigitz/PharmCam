import React, { useContext, useState } from "react";
import {
  home,
  calender,
  online,
  drugs,
  admin,
  placeholder_img,
  log_out,
} from "../assets/assets";
import AppContext from "../context/AppContext";

function DashboadSidebar() {
  const { navigate } = useContext(AppContext);
  const [activePage, setActivePage] = useState("Home");
  const navlinks = [
    { name: "Home", link: "dashboard/", img: home },
    { name: "Working days", link: "/dashboard/working-days", img: calender },
    { name: "on call", link: "/dashboard/on-call", img: online },
    { name: "Medications", link: "/dashboard/medications", img: drugs },
    { name: "Profile", link: "/dashboard/profile", img: admin },
  ];

  return (
    <section className="hidden lg:block rounded-md shadow-lg h-full w-1/5 bg-green-950 mt-8">
      <div className="p-4">
        {navlinks.map((item) => (
          <div
            onClick={() => {
              setActivePage(item.name);
              navigate(item.link);
            }}
            title={`Visit ${item.name}`}
            key={item.name}
            className={`flex items-center gap-2 text-white cursor-pointer ${
              activePage === item.name
                ? "bg-green-700"
                : "hover:bg-green-800/30"
            }  g-green-900 mb-1 rounded px-4 py-2`}
          >
            <img
              src={item.img}
              width={25}
              loading="lazy"
              alt={placeholder_img}
            />
            <p>{item.name}</p>
          </div>
        ))}
        <div
          className={`flex items-center gap-2 text-white cursor-pointer ${
            activePage === "Log out"
              ? "bg-green-700"
              : "hover:bg-red-800/70 hover:text-red-300"
          }  g-green-900 mb-1 rounded px-4 py-2`}
        >
          <img src={log_out} width={25} loading="lazy" alt={placeholder_img} />
          <p>{"Log out"}</p>
        </div>
      </div>
    </section>
  );
}

export default DashboadSidebar;
