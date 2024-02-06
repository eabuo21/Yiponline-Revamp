/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Archs = ({ background, image, heading, text }) => {
  return (
    <>
      <div className="main-wrapper   flex flex-col gap-8 justify-start items-start p-2 px-4 md:flex-row ">
        <div
          className="items-container-background p-5 justify-start items-start flex flex-col gap-2 shadow-current shadow-md rounded-md px-4 w-[fixed] h-[fixed] justify-center items-center
           md:w-[fixed] md:h-[fixed] "
          style={{
            background: background,
          }}
        >
          <img
            src={image}
            alt="image"
            className="rider-image   w-[100px] h-[100px]  md:w-[100px] md:h-[100px]  rounded-[50%] "
          />
          <h4 className="heading-rider-text font-bold text-black font-sans text-2xl text-left  md:text-3xl  md:text-center">
            {" "}
            {heading}{" "}
          </h4>
          <p className="last-rider-text font-sans font-normal text-black text-xl text-left w-full   md:w-ful  md:text-xl md:text-center">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default Archs;
