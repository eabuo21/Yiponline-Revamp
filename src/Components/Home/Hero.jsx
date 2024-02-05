/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div
        className="hero-container  px-7  flex flex-col justify-start items-start p-[4rem] bg-gradient-to-br from-blue-400 via-blue-700 to-blue-300 h-[fixed] w-full
          
           "
        /*stylings for larger screen  sizes */
      >
        <section
          className="need-grow-section   w-full  px-2 pt-[2rem]
        md:pt-[4rem]  md:w-[50%]"
        >
          <h2
            className="heading-text text-white font-sans text-2xl font-bold text-left pb-3
          md:text-7xl "
          >
            DOES YOUR BUSINESS NEED TO GROW?
          </h2>
          <p
            className="rider-text  font-serif text-white text-base font-bold text-left  pb-6 
          md:text-xl"
          >
            You're in luck, we have just what you need: simple, affordable and
            quick-to-deploy technology, tools and apps for your SME and Large
            Enterprises!
          </p>

          <div className="button-router   ">
            <button className="router  flex flex-row justify-center items-center gap-4  border-2 border-lime-400 p-4 w-[fixed] text-white font-bold font-sans text-xl   ">
              <Link to="">
                Get Started Now
                <span> &rarr; </span>
              </Link>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
export default Hero;
