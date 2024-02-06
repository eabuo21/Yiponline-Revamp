/** @format */

import React, { useState, useEffect } from "react";
import ProHero from "../../Components/Products/ProHero";
import Feat from "../../Components/Feat/Footer";
import Services from "../../Components/Products/Services";
import Productscards from "../../Components/Products/Cards";
import Modal from "../../Components/Forms/ProductsForm";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showmodal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="main-container">
        <section className="products-hero-section pb-8 pt-12">
          <ProHero />
        </section>
        <section className="products-services-section pt-16 pb-12">
          <Services />
        </section>
        <section className="cards-section   pt-16 pb-12">
          <Productscards />
        </section>

        <section className="modal-button-section flex flex-col  pt-16 pb-12 px-6 justify-start items-start    md:justify-center md:items-center md:mx-auto  ">
          <h3
            className="heading-text font-bold text-blue-700 text-xl   
                  md:text-3xl font-dm pb-12"
          >
            NEED A CUSTOM SOLUTION ?
          </h3>
          <button
            onClick={() =>
              openModal()((document.body.style.overflow = "hidden"))
            }
            className="modal-button  bg-blue-700 border-2 border-lime-400 p-4 text-white  hover:bg-black hover:transition-colors hover:duration-700 ease-in-out transition-900 "
          >
            <p className="font-cur font-bold text-xl"> Request Service</p>
          </button>
          {showmodal && (
            <Modal
              onClose={() =>
                closeModal()((document.body.style.overflow = "auto"))
              }
            />
          )}
        </section>

        <section className="footer-section ">
          <Feat />
        </section>
      </div>
    </>
  );
};
export default Products;
