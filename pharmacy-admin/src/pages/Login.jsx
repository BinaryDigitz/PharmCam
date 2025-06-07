import React, { useContext, useState } from "react";
import { Logo } from "../components/exportComp";
import AppContext from "../context/AppContext";
import myFetch from "../lib/myFetch";
import { toast } from "react-toastify";
import { queryClient } from "../main";
import { useMutation } from "@tanstack/react-query";

function Login() {
  const { setLoginForm, setShowRegistrationForm, navigate } =
    useContext(AppContext);
  const [error, setError] = useState("");
  const [viewPassword, setViewPassword] = useState("password");
  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
    rememberMe: false,
  });
  function clearForm() {
    setFormData({
      emailAddress: "",
      password: "",
      rememberMe: false,
    });
  }

  function togglePassword() {
    if (viewPassword === "password") return setViewPassword("text");
    return setViewPassword("password");
  }
  const passwordIcon =
    viewPassword === "password" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        className="fill-gray-600"
      >
        <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        className="fill-gray-600"
      >
        <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
      </svg>
    );
  function fetchFn() {
    const fetchDetails = {
      method: "post",
      endpoint: "/api/v1/pharmacy/sign-in",
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
      toast.error(data.message);
    },
    onError: (data) => {
      setError(data.message);
      toast.error(data.error);
    },
  });
  async function handlerFormSubmit(event) {
    event.preventDefault();
    mutate();
  }
  return (
    <div className="border grid place-items-center h-full">
      <form
        onSubmit={handlerFormSubmit}
        className="bg-white p-8 relative rounded-lg w-[85%] lg:w-sm border border-green-800 mx-auto shadow-green-950/25 shadow-xl"
      >
        <div className="text-start mb-5">
          <Logo variant="small" />
          <p className="text-sm text-gray-500">Login using the form below</p>
        </div>

        {/* Close form */}
        <button
          type="button"
          onClick={() => setLoginForm(false)}
          className="absolute top-2 right-2 bg-slate-200 p-2 px-3 cursor-pointer hover:bg-slate-300 trans rounded"
        >
          X
        </button>

        <div className="mb-2">
          <label
            htmlFor="emailAddress"
            className="block text-start text-sm mb-1"
          >
            Email{" "}
          </label>
          <div className="border rounded-md py-3 flex items-center px-3 gap-2 border-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="gray"
            >
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
            <input
              type="text"
              placeholder="example@emailAddress.com"
              required
              autoComplete="emailAddress"
              minLength={9}
              maxLength={25}
              value={formData.emailAddress}
              onChange={(e) =>
                setFormData({ ...formData, emailAddress: e.target.value })
              }
              className="w-full bg-transparent outline-none border-none text-sm"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-start text-sm mb-1">
            Password
          </label>
          <div className="relative border rounded-md py-3 flex items-center px-3 gap-2 border-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="gray"
            >
              <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
            </svg>
            <input
              type={viewPassword}
              placeholder="Password"
              required
              id="password"
              autoComplete="password"
              value={formData.password}
              minLength={8}
              maxLength={12}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full bg-transparent outline-none border-none text-sm"
            />
            <span
              onClick={togglePassword}
              className="absolute right-3 top-3.5 cursor-pointer "
            >
              {passwordIcon}
            </span>
          </div>
        </div>

        <div className="flex items-center font-medium text-sm  justify-between mb-3">
          <label
            htmlFor="rememberMe"
            className="cursor-pointer flex items-center gap-2"
          >
            <input
              type="checkbox"
              checked={formData.rememberMe}
              onChange={() =>
                setFormData({ ...formData, rememberMe: !formData.rememberMe })
              }
              id="rememberMe"
              className="cursor-pointer"
            />
            Remember me
          </label>
          <p className="text-indigo-700 hover:underline cursor-pointer">
            Forgot Password
          </p>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full disabled:bg-black/50 cursor-pointer bg-black hover:bg-black/80 text-white mt-4 rounded-lg py-3 text-sm mb-2"
        >
          {isPending ? "Loding..." : "Login"}
        </button>
        <p className="text-sm text-red-500 font-medium text-center mb-2">
          {error}
        </p>
        <div className="flex items-center gap-3 mb-3 ">
          <hr className="border-0.5 border-gray-400 w-1/2" />
          <span className="text-xs">Or</span>
          <hr className="border-0.5 border-gray-400 w-1/2" />
        </div>
        <div className=" flex items-center justify-center gap-2 mt-2">
          <p>Don't have an account?</p>
          <button
            onClick={() => {
              setLoginForm(false);
              setShowRegistrationForm(true);
            }}
            type="button"
            className="text-indigo-700  text-sm font-medium cursor-pointer hover:text-indigo-900 hover:underline"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
