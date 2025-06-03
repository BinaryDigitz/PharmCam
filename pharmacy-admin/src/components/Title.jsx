import React from "react";

function Title({ text1, text2 }) {
  return (
    <h1 className="heading3 text-center ">
      <span className="montserrat">{text1}</span>
      <span className="ml-3 border-b-2 border-green-800 montserrat">{text2}</span>
    </h1>
  );
}

export default Title;
