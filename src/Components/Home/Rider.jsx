/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Rider = () => {
  return (
    <>
      <div className="rider-under-text-section  flex flex-col gap-8 justify-start items-start p-2 px-5  pb-12 pt-4  md:pt-8 ">
        <object
          className="objects-container  w-auto h-auto p-2 bg-white  rounded-md shadow-current shadow-md 
            
            md:w-[75%] "
        >
          <h4 className="header-rider-text font-normal text-base text-black text-left  text-opacity-30 pb-6 ">
            WHO WE ARE
            <div className="underlined-section bg-blue-700 h-[7px] w-[60px]"></div>
          </h4>
          <p className="under-rider-text  text-black font-dm font-bold text-2xl text-left  pb-8  ">
            We Yeepsters make running a business a breeze by developing smart
            technology that simplifies tasks, streamlines operations, and boosts
            efficiency and profits.
          </p>
          <span className="second-rider-text  text-base font-normal pb-16 text-left ">
            Yeep that's what we do! We'll take care of the technical side of
            things, so you can focus on the fun part of running your business.
            Let's work together to make your business soar!
          </span>
          <section className="link-section pt-12 pb-8">
            <Link to="" className="text-blue-700 font-bold text-xl text-center">
              Find Out More &rarr;
            </Link>
          </section>
        </object>
      </div>
    </>
  );
};

export default Rider;
