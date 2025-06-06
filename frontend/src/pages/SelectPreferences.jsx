import React, { useContext, useState } from "react";
import { Logo, Title } from "../components/exportComp";
import { cameroon } from "../assets/data";
import AppContext from "../context/AppContext";

function SelectPreferences() {
  const { setTown, navigate } = useContext(AppContext);
  const [selectedTown, setSelectedTown] = useState({ region: "", town: "" });
  const city =
    selectedTown?.region &&
    cameroon.find((item) => {
      return item.region === selectedTown.region;
    });

  async function handleSubmit(event) {
    event.preventDefault();
    setTown(selectedTown);
    setSelectedTown({ region: "", town: "" })
    navigate('/pharmacy-list')

  }

  return (
    <div>
      <Title text1="SELECT" text2={"TOWN"} />
      <section className="border border-gray-300 shadow rounded-lg my-8 px-4 py-8 w-[90%] lg:w-sm mx-auto">
        <Logo />
        <p className="text-gray-500  px-4">
          Please select preferences using the form.
        </p>
        <form onSubmit={handleSubmit} className="px-4 text-s">
          <div className="mt-8 mb-4">
            <label htmlFor="region" className="block mx-0.5">
              Region
            </label>
            <select
              name="region"
              id="region"
              required
              value={selectedTown.region}
              onChange={(e) =>
                setSelectedTown({ ...selectedTown, region: e.target.value })
              }
              autoComplete="Region"
              className="border border-gray-300 pl-2 w-full py-3 bg-transparent rounded mt-1 cursor-pointer "
            >
              <option value="">Please Select Region</option>
              {cameroon.map((item) => (
                <option value={item.region} key={item.region}>
                  {item.region}
                </option>
              ))}
            </select>
          </div>
          <div className={`mb-4 ${!selectedTown.region && "opacity-40"}`}>
            <label htmlFor="town" className="block mx-0.5">
              Town
            </label>
            <select
              name="town"
              id="town"
              required
              value={selectedTown.town}
              onChange={(e) =>
                setSelectedTown({ ...selectedTown, town: e.target.value })
              }
              autoComplete="Town"
              className={`${
                !selectedTown.region ? "cursor-not-allowed" : "cursor-pointer"
              } border border-gray-300 pl-2 w-full py-3 bg-transparent rounded mt-1 cursor-pointe`}
            >
              <option value="">Please Select Town</option>
              {city &&
                city?.towns.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
          <button
          type="submit"
           className="mt-4 bg-green-900 hover:bg-green-950/40 w-full text-green-100 py-3 rounded cursor-pointer">
            Set Preference
          </button>
        </form>
      </section>
    </div>
  );
}

export default SelectPreferences;
