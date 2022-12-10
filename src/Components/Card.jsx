import React, { useState } from "react";

export default function Card({ Poster, Title }) {
  return (
    <div className="rounded-lg shadow-md w-[300px] ">
      <img className="object-contain w-full h-48" src={Poster} alt={Title} />
      <div className="p-4 text-center flex flex-col">
        <span className="text-xl  font-semibold tracking-tight text-blue-600">{Title}</span>
      </div>
    </div>
  );
}
