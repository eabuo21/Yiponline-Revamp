/** @format */

import React, { useState, useEffect } from "react";
import Hello from "../../Components/contact/Hello";
import Footer from "../../Components/Feat/Footer";
import HCon from "../../Components/Contact/ConHero";
import ConCards from "../../Components/Contact/ConCards";

const Contact = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handleScroll();
  }, []);
  return (
    <>
      <div className=" Contact-container bg-white h-[fixed] w-full ">
        <section className="hero-section  pb-8">
          <HCon />
        </section>
        <section className="  cards-section pt-16 pb-8 pt-16">
          <ConCards />
        </section>
        <section className="hello-section  pb-8  pt-16 p-4">
          <Hello />
        </section>

        <section className="footer-section w-full ">
          <Footer />
        </section>
      </div>
    </>
  );
};
export default Contact;
