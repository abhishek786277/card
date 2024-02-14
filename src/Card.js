import React from "react";
import "./index.css";

function Card(props) {
  console.log(props);
  return (
    <div className="h-screen w-screen grid  place-items-center">
      <div className="bg-gray-20 flex gap-20 justify-evenly h-60 items-center w-fit shadow-lg p-28">
        <div className="shadow-sm">
          <img className="" src={props.imglink} alt="" />
        </div>
        <div className="">
          <img src="" alt="" />
          <div className="text-blue-500 font-medium text-lg py-2 cursor-pointer hover:underline hover:translate-x-2">
            {props.fname} {props.lname}
          </div>
          <div className="text-blue-500 font-medium text-lg py-2 cursor-pointer hover:underline hover:translate-x-2">{props.gender}</div>
          <div className="text-blue-500 font-medium text-lg py-2 cursor-pointer hover:underline hover:translate-x-2">{props.phoneno}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
