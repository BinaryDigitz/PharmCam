import React, { useContext, useState } from "react";
import { Logo, Title } from "../components/exportComp";
import { cameroon } from "../assets/data";
import { toast } from "react-toastify";
import AppContext from "../context/AppContext";
import myFetch from "../lib/myFetch";
import { queryClient } from "../main";
import { useMutation } from "@tanstack/react-query";

function RegisterPharmacy() {
  const { setShowRegistrationForm, setLoginForm, navigate } =
    useContext(AppContext);
  const [selectedRegion, setRegion] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    pharmacyName: "",
    phoneNumber: "",
    emailAddress: "",
    pharmacistName: "",
    region: "",
    password: "",
    town: "",
  });
  function clearForm() {
    setFormData({
      pharmacyName: "",
      phoneNumber: "",
      emailAddress: "",
      pharmacistName: "",
      region: "",
      password: "",
      town: "",
    });
  }

  const towns =
    selectedRegion && cameroon.find((item) => item.region === selectedRegion);

  function handleChange(event) {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  }
  function fetchFn() {
    const fetchDetails = {
      method: "post",
      endpoint: "/api/v1/pharmacy/register",
      body: formData,
      id: "",
    };
    return myFetch(fetchDetails);
  }
  const { mutate, isPending } = useMutation({
    mutationFn: fetchFn,
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["Pharmacy"] });
        clearForm();
      return setTimeout(() => navigate("/dashboard"), 1000);
      }
      setError(data.error);
      setError(data.message)
    },
    onError: (data) => {
      setError(data.message);
      toast.error(data.error);
    },
  });
  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
      mutate();
  }
  return (
    <section className="grid place-items-center text-whit">
      <div className="">
        {/* <Title text1={"Register"} text2={"Pharmacy"} /> */}
        <form
          onSubmit={handleSubmit}
          className="w-[85%] lg:w-sm relative border bg-white border-green-900 my-8 shadow-green/70 shadow-xl rounded px-4 py-6 mx-auto mt-"
        >
          <button
            onClick={() => setShowRegistrationForm(false)}
            className="absolute top-2 right-2 bg-slate-200 p-2 px-3 cursor-pointer hover:bg-slate-300 trans rounded"
          >
            X
          </button>
          <div className="my-4">
            <Logo />
            <p className="text-left px-4 text-gray-500">
              Please register using the form below
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="pharmacyName" className="text-left">
              Pharmacy Name
            </label>
            <input
              type="text"
              placeholder="Mercy pharmacy"
              className="border border-gray-400 py-2 rounded px-3 mt-1 w-full"
              required
              id="pharmacyName"
              autoComplete="pharmacy name"
              value={formData.pharmacyName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="phoneNumber" className="text-left">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+237 673 737 232"
              className="border border-gray-400 py-2 rounded px-3 mt-1 w-full"
              required
              id="phoneNumber"
              autoComplete="phone"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-left">
              Email Address
            </label>
            <input
              type="email"
              placeholder="contact@pharmacy.com"
              className="border border-gray-400 py-2 rounded px-3 mt-1 w-full"
              required
              id="emailAddress"
              autoComplete="email"
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="pharmacistName" className="text-left">
              Pharmacist Name
            </label>
            <input
              type="text"
              placeholder="Dr. John Doe"
              className="border border-gray-400 py-2 rounded px-3 mt-1 w-full"
              required
              id="pharmacistName"
              autoComplete="fullName"
              value={formData.pharmacistName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-left">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="border border-gray-400 py-2 rounded px-3 mt-1 w-full"
              required
              id="password"
              autoComplete="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="region" className="text-left">
              Region
            </label>
            <select
              name="region"
              id="region"
              className="border border-gray-400 py-2 rounded px-3 mt-1 w-full"
              required
              autoComplete=" name"
              value={formData.region}
              onChange={(event) => {
                setFormData({ ...formData, region: event.target.value });
                setRegion(event.target.value);
              }}
            >
              <option value="">Please select region</option>
              {cameroon &&
                cameroon.map((item) => (
                  <option value={item.region} key={item.region}>
                    {item.region}
                  </option>
                ))}
            </select>
          </div>
          <div
            className={` ${
              !selectedRegion ? "opacity-40" : ""
            }flex flex-col mb-4`}
          >
            <label htmlFor="town" className="text-left">
              Town
            </label>
            <select
              disabled={!selectedRegion}
              name="town"
              id="town"
              className="border border-gray-400 py-2 rounded px-3 mt-1 w-full"
              required
              autoComplete=" name"
              value={formData.town}
              onChange={handleChange}
            >
              <option value="">Please select town</option>
              {towns &&
                towns.towns.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
          <button className="bg-black mt-4 hover:bg-black/80 trans w-full text-green-50 py-3 rounded cursor-pointer">
            {isPending ? "Loading..." : "Register"}
          </button>
          <p className="text-sm text-red-500 text-center mt-2 h-4">{error}</p>
          <p className="flex justify-center items-center gap-2">
            <span>Have an account?</span>
            <button
              type="button"
              onClick={() => {
                setShowRegistrationForm(false);
                setLoginForm(true);
              }}
              className="text-indigo-700 cursor-pointer hover:underline"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </section>
  );
}

export default RegisterPharmacy;
