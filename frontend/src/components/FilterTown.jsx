import React from "react";
import { cameroon } from "../assets/data";

function FilterTown({ region, filterCity, handleSelect }) {
  const selectRegion = cameroon.find((item) => item.region === region);
  return (
    <form className=" border">
      <label htmlFor="city" className="sr-only">
        City
      </label>
      <select
        title="Filter town"
        className={`py-2 px-1 rounded  bg-white text-green-950" cursor-pointer lg:hover:scale-x-105 trans`}
        onChange={handleSelect}
        value={filterCity}
        name="city"
        id="city"
      >
        {selectRegion.towns.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </form>
  );
}

export default FilterTown;
