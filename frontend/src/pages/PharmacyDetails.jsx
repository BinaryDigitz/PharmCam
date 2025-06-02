
import { pharmacies,  } from "../assets/data";
import { Back, Loading } from "../components/exportComp";
import { WorkingDays } from "../components/LazyExport";
import React, { useEffect, useState } from "react";
import {
  personnel,
  verified,
  call,
  email,
  location,
  direction,
  placeholder_img
} from "../assets/assets";
import { useParams } from "react-router-dom";

function PharmacyDetails() {
  const [pharmacy, setPharmacy] = useState();
  const { region, town, pharmacyId } = useParams();

  useEffect(() => {
    async function fetchPharmacy() {
        const selectedRegion = pharmacies.find((item) => item.region === region)
      const selectedPharmacy = selectedRegion.pharmacies.find(
        (pharmacy) => pharmacy.id === pharmacyId && pharmacy.region === region && pharmacy.town === town
      );
      setPharmacy(selectedPharmacy);
    }
    fetchPharmacy();
  }, [pharmacyId]);
  

  if (!pharmacyId) return <Loading />;
  if (!pharmacy) {
    return (
      <section className="grid h-full place-items-center text-center">
        <div>
          <h2 className="text-lg lg:text-xl">Error fetching data</h2>
          <p className="text-neutral-600">Try again later</p>
        </div>
      </section>
    );
  }
  return (
    <div className="my-4 relative px-4  overflow-hidde">
      <div className="hidden md:block absolute  md:top-0 left-4">
        <Back link="/pharmacy-list" />
      </div>
      {/* <h1 className="heading3 hidden md:block mb-4 mano text-center">PHARMACY DETAILS</h1> */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 justify-around lg:w-[70%] mx-auto">
        <section className=" p-4 rounded-xl md:w-sm border border-green-950/20 text-[14px] max-h-[330px] lg:text-[16px]">
          <div className="flex gap-4 items-center bg-green-500/10 p-4 rounded">
            <img src={verified} width={25} alt={placeholder_img} />
            <p className="text-lg lg:text-xl font-bold">{pharmacy?.name}</p>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex gap-4 items-center ">
              <img src={personnel} width={25} alt={placeholder_img} />
              <p className="heading">{pharmacy?.pharmacist}</p>
            </div>
            <div className="flex gap-4 items-center ">
              <img src={call} width={25} alt={placeholder_img} />
              <p className="heading">+237 {pharmacy?.phone}</p>
            </div>
            <div className="flex gap-4 items-center ">
              <img src={email} width={25} alt={placeholder_img} />
              <p className="heading">{pharmacy?.email}</p>
            </div>
            <div className="flex gap-4 items-center ">
              <img src={location} width={25} alt={placeholder_img} />
              <p className="heading">{`${town}, ${region} Region`}</p>
            </div>
            <button
            title="Open map to pharmacy"
             className="flex gap-4 items-center cursor-pointer rounded-lg mt-4 bg-black hover:bg-black/90 trans text-green-100 py-2 justify-center">
              <img src={direction} width={25} alt={placeholder_img} />
              <p className="heading">Direction</p>
            </button>
          </div>
        </section>
        <section className=" p-4 rounded-xl border h-[400px] border-green-950/20 lg:w-xl overflow-y-scroll scrollbar-hidden">
         <WorkingDays />
        </section>
      </div>
    </div>
  );
}

export default PharmacyDetails;
