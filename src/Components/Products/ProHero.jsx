/** @format */

import React from "react";
import { Link } from "react-router-dom";



const ProHero = () => {
  return (
    <>
      <div className="  bg-blue-700 w-full h-[fixed]  flex flex-col p-4 px-8 justify-center items-start md:justify-center md:items-center md:mx-auto ">
        <h2 className="header  text-white font-bold font-dm text-2xl   pt-12  md:text-5xl  md:text-center   md:pt-16">
          World-Class, Bottom-Line Friendly Solutions For Your Business
        </h2>
        <p className="second-rider-text font-bold text-white text-base text-left pt-8 md:text-xl">
          Our Products & Services
          <div className="bg-white h-[1px] w-[70px]"></div>
        </p>

        <div className="buttons-container flex flex-col gap-8 justify-start items-start pt-12 md:flex-row ">
          <button className="router  flex flex-row justify-center items-center gap-4  border-2 border-lime-400 p-4 w-[fixed] text-white font-bold font-sans text-xl   ">
            <Link to="https://powpa.com/" target="_blank">
              Visit Powpa
              <span> &rarr; </span>
            </Link>
          </button>

          {/*second-button-section*/}
          <button className="router  flex flex-row justify-center items-center gap-4  border-2 border-lime-400 p-4 w-[fixed] text-white font-bold font-sans text-xl   ">
            <Link to="https://simpoo.com/" target="_blank">
              Visit Simpoo
              <span> &rarr; </span>
            </Link>
                  </button>
                  
        </div>
      </div>
    </>
  );
};

export default ProHero;
