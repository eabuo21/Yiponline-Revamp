/** @format */

import React, { useEffect } from "react";
import Hero from "../../Components/Home/Hero";
import Arrays from "../../Components/Home/CardArray";
import { Link } from "react-router-dom";
import WeCan from "../../Components/Home/WeCanHelp";
import Solution from "../../Components/Home/Solutions/Solution";
import Cards2 from "../../Components/Home/Solutions/SolutionsItemsCards";
import Footer from "../../Components/Feat/Footer";
import Rider from "../../Components/Home/Rider";


const Home = () => {
  //set the page t scroll to the top when the component mounts the screen
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="home-container bg-white  h-screen  w-full ">
        <section
          className="hero-section   relative pb-9  bg-gradient-to-br from-blue-400 via-blue-700 to-blue-300  pt-12 ">
          <Hero />
        </section>

        <div className="cards-section pb-6  pt-16 flex flex-col gap-5  md:grid md:grid-cols-2  md:justify-between   md:items-center md:ml-[7rem]">
          <Arrays />
          <section className="rider-section relative top-16 pb-8 md:ml-[6rem]">
          <Rider />
          </section>
        </div>

        <section className="we-can-help-section  pb-16 pt-16">
          <WeCan />
        </section>

        <section className="Solutions-provided-section pt-16 pb-16  md:grid md:grid-cols-2 md:grid-reverse ">
          <Solution />
          <Cards2 />
        </section>

        <div className="footer-section  h-[50vh] bg-secondary_black">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
