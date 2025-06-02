import React, { useContext, useEffect, useState } from "react";
import { pharmacies } from "../assets/data";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import FilterTown from "../components/FilterTown";
import Searchbar from "../components/Searchbar";
import DisplaySearch from "../components/DisplaySearch";

function PharmacyList() {
  const { town, navigate, showSearchBar } = useContext(AppContext);
  const [selectedPharmacies, setSelectedPharmacies] = useState([]);
  const [pharmacyState, setPharmacyState] = useState("all");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState(town.town);

  function handleSelect(event) {
    setCity(event.target.value);
    setPharmacyState("all");
    const result =
      region && region?.pharmacies.filter((item) => item.town === city);
    setSelectedPharmacies(result);
  }
  function handleOpenPharmacies() {
    setPharmacyState("open");
    const result =
      region && region?.pharmacies.filter((item) => item.town === city);
    const isOpen = result.filter((item) => item.isOpen);
    setSelectedPharmacies(isOpen);
  }
  function handleAllPharmacies() {
    setPharmacyState("all");

    const result =
      region && region?.pharmacies.filter((item) => item.town === city);
    setSelectedPharmacies(result);
  }
  useEffect(() => {
    function filterPharmacy() {
      const regionPharmacy =
        town.region && pharmacies.find((item) => item.region === town.region);
      setRegion(regionPharmacy);

      const result =
        regionPharmacy &&
        regionPharmacy?.pharmacies.filter((item) => item.town === town.town);
      setSelectedPharmacies(result);
    }
    filterPharmacy();
    // setSelectedPharmacies(pharmacies);
  }, []);

  if (selectedPharmacies.length < 1) {
    return (
      <div className="grid place-items-center h-full">
        <h1 className="flex flex-col">
          <span className="text-lg lg:text-xl">
            No available pharmacy in this town.
          </span>
          <button
            onClick={() => navigate("/select-preference")}
            className="montsarrat py-1.5 px-4 cursor-pointer  bg-black text-white rounded mt-2 max-w-40 lg:hover:w-41 mx-auto trans"
          >
            Select Town
          </button>
        </h1>
      </div>
    );
  }
  return (
    <div className="mt-4 p-4 rounded  bg-white/20 relative">
      <h1 className="montserrat font-bold text-lg lg:text-2xl text-center mb-4">
        {town.region.toUpperCase()} REGION
      </h1>
      <Searchbar />
      <div className="text-sm flex gap-4 bg-green-950/90 shadow-lg justify-cente items-center justify-center lg:justify-start p-4 rounded lg:w-6xl mx-auto">
        <button
          title="View all pharmacies"
          onClick={() => handleAllPharmacies("all")}
          className={`py-2 px-4 rounded text-sm ${
            pharmacyState === "all"
              ? "bg-green-700 text-green-100"
              : "bg-white text-green-950"
          }  cursor-pointer  lg:hover:scale-x-105 trans`}
        >
          All
        </button>
        <button
          title="View open pharmacies"
          onClick={() => handleOpenPharmacies("open")}
          className={`py-2 px-4 rounded  ${
            pharmacyState === "open"
              ? "bg-green-700 text-green-100"
              : "bg-white text-green-950"
          }  cursor-pointer lg:hover:scale-x-105 trans`}
        >
          Currently Open
        </button>
        <FilterTown
          region={town.region}
          handleSelect={handleSelect}
          filterCity={city}
        />
      </div>
      <div
        className={`${
          showSearchBar ? "absolute" : "hidden"
        }  z-40 bg-white left-[50%] top-28 border rounded-lg -translate-x-[50%] min-w-[95%] backdrop:blur-5xl`}
      >
        <DisplaySearch />
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 overflow-y-scroll p-4 place-items-center lg:w-6xl mx-auto gap-2 mt-8 border border-gray-300 shadow-lg rounded">
        {selectedPharmacies &&
          selectedPharmacies.map((pharmacy) => (
            <Link to={`/pharmacies/${pharmacy.id}`} key={pharmacy.id}>
              <article
                className={`p-4 rounded-xl min-w-[360px] md:w-lg  ${
                  pharmacy.onCall
                    ? "bg-green-100"
                    : "bg-gray-100/70 hover:bg-gray-200/60 trans"
                }`}
              >
                <div className="flex items-center gap-4 cursor-pointer">
                  <div>
                    {pharmacy.isOpen ? (
                      <p
                        className="size-2 bg-green-400 rounded-full"
                        aria-label="pharmacy is open"
                      ></p>
                    ) : (
                      <p
                        className="size-2 bg-gray-600 rounded-full"
                        aria-label="pharmacy is closed"
                      ></p>
                    )}
                  </div>
                  <p
                    className={`${
                      pharmacy.isOpen ? "font-bold" : "opacity-80"
                    } flex-1`}
                  >
                    {pharmacy.name}
                  </p>
                  <div>
                    {pharmacy.isOpen ? (
                      <div className="text-xs italic text-green-700">
                        <p>Currently open</p>
                        <div className="text-gray-600">
                          {pharmacy.isOnCall ? (
                            <p className="text-green-700">On call today</p>
                          ) : (
                            <p>
                              <span>Closes at </span>
                              <span className="text-red-600"> 18:30</span>
                            </p>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="text-xs italic text-gray-600">
                        <p>Currently closed</p>
                        <p className="text-gray-600">
                          <span>Opens at </span>
                          <span className="text-gray-600"> 18:30</span>
                        </p>
                      </div>
                    )}
                  </div>
                  <div>{/* <p>Oncall today</p> */}</div>
                </div>
              </article>
            </Link>
          ))}
      </section>
    </div>
  );
}

export default PharmacyList;
