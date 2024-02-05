/** @format */

import React from "react";
import { Link } from "react-router-dom";

const WeCan = () => {
  return (
    <>
      <div
        className="main-wrapper bg-secondary_black w-full h-[fixed] p-2
            flex flex-col gap-8 justify-start items-start p-4 md:h-[45vh] md:justify-center md:items-center md:mx-auto " 
      >
        <div className=" flex flex-col  md:w-[70%] md:justify-between">
        <section className="line-text-section flex flex-row gap-2 justify-start items-center pb-8 ">
            <div className="underlined-section bg-lime-400 h-[10px] w-[60px]"></div>
            <br/>
          <p className="tet-white font-normal font-sans text-2xl text-white">
            We Can Help
          </p>
        </section>

        <div className=" flex flex-col gap-5    md:flex-row ">
        <h3 className="bottom-rider-text font-bold text-2xl font-dm text-white text-lef  md:font-bold md:text-4xl  md:font-sans md:w-[50%] ">
          LET'S SHOW YOU HOW WE CAN USE TECH TO GROW YOUR BUSINESS !
              </h3>
              
              <button className="get-started-button border-2 border-lime-400 justify-center items-center flex flex-row w-[fixed] p-4  text-white font-bold text-xl  hover:bg-blue-700  transition-colors transition-duration-1000 ease-in-out hover:transition-colors  hover:ease-in-out hover:transition-transform-x-1000">
                  <Link to=" ">
                      Get Started Now &rarr;
                  </Link>
              </button>
              </div>
              </div>
      </div>
    </>
  );
};
export default WeCan;
