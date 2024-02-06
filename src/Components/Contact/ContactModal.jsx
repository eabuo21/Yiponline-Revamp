/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Archs = ({ background, icon, heading, text, number1, number2 }) => {
  return (
    <>
      <div className="main-wrapper   flex flex-col gap-8 justify-start items-start p-2 px-4 md:flex-row ">
        <div
          className="items-container-background p-5 justify-start items-start flex flex-col gap-2 shadow-current shadow-md rounded-md px-4 w-[280px] h-[300px]
           md:w-[500px] md:h-[400px] "
          style={{
            background: background,
          }}
        >
          <FontAwesomeIcon
            icon={icon}
            svg-icon
            className="rider-image   w-[25px] h-[25px]  md:w-[30px] md:h-[30px] "
          />
          <h4 className="heading-rider-text font-bold text-black font-sans text-2xl text-left  md:text-3xl ">
            {" "}
            {heading}{" "}
          </h4>
          <p className="last-rider-text font-sans font-normal text-black text-xl text-left w-[75%]   md:w-ful  md:text-2xll">
            {text}
          </p>
          <p className="last-rider-text font-sans font-normal text-blue-700 md:font-[700] text-xl text-left w-[75%]   md:w-full  md:text-4xl">
            <a href=" ">{number1}</a>
          </p>

          <p className="last-rider-text font-sans font-normal text-blue-700 md:font-[700] text-xl text-left w-[75%]   md:w-full  md:text-4xl">
            <a href=" ">{number2}</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Archs;
