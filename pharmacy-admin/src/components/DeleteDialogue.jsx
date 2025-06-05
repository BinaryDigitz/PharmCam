import React from "react";

function DeleteDialogue({ setShowDelete }) {
  return (
    <div className="grid place-content-center h-full text-white">
      <div className="border p-8 bg-green-50 rounded min-w-sm max-w-lg relative  text-black">
        <h2 className=" text-lg font-bold lg:text-xl">Delete your account?</h2>
        <p className="text-gray-600">This proccess is not reversible.</p>
        <div className="flex gap-4 mt-8 justify-end">
          <button
            onClick={() => setShowDelete(false)}
            className="border px-4 rounded py-2 cursor-pointer hover:bg-gray-200"
          >
            Cancel
          </button>
          <button className="border px-4 rounded py-2 text-red-100 hover:bg-black/80 trans cursor-pointer bg-black">
            Yes! Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteDialogue;
