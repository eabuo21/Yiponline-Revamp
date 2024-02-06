/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Solution = () => {
  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-easing="ease-in linear"
        data-aos-duration="2000"
        data-aos-delay="50"
        data-aos-anchor-placement="left right"
        data-aos-mirror="true"
        data-aos-once="true"
       
        className="main-wrapper flex flex-col gap-5 justify-start items-start p-2 px-5 "
      >
        <h2 className="heading-rider-text font-bold font-sans text-xl text-black text-opacity-20 text-left  md:text-2xl">
          SOLUTION PROVIDED
        </h2>
        <p className="second-rider-text-under  font-bold text-black text-3xl font-dm text-left  md:text-5xl ">
          We focus on bringing value and solve business main challenges
        </p>
        <div className="link-route-section  pt-6">
          <Link
            to=""
            className="text-blue-700 font-bold text-xl font-sans text-lft  flex flex-row gap-4 pt-5 pb-4"
          >
            Find Out More
            <p> &rarr;</p>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Solution;
