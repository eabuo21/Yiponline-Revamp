/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const CurrentYear = new Date().getFullYear();

  return (
    <>
      <div
        className="footer-main-container flex flex-col gap-3 justify-start items-start p-2  bg-secondary_black h-[fixed] w-full
      
    "
      >
        <ul className=" flex flex-col   lg:grid lg:grid-cols-6 w-full lg:justify-center lg:items-start  lg:px-6  md:grid md:grid-cols-2 ">
          <div className="flex flex-col gap-1 text-white  px-2 pt-6">
            <h2 className="heading-text  font-bold font-dm text-xl">
              OUR ADDRESS
            </h2>
            <p className="font-serif text-opacity-20 text-base">
              {" "}
              Logos Nigeria
            </p>
          </div>

          <div className="flex flex-col gap-1 text-white  px-2 pt-6">
            <h2 className="heading-text  font-bold font-dm text-xl">
              OUR CONTACTS
            </h2>
            <p className="font-serif text-opacity-20 text-base"> Support</p>
            <h2 className="heading-text  font-bold font-dm text-2xl">
              <a href="tel"> 0906543521 </a>
            </h2>
            <p className="font-serif text-opacity-20 text-base"> Sales</p>
            <h2 className="heading-text  font-bold font-dm text-2xl">
              <a href="tel"> 0906543521 </a>
            </h2>
          </div>

          <div className="flex flex-col gap-1 text-white  px-2 pt-6">
            <h2 className="heading-text  font-bold font-dm text-xl">
              USEFUL LINKS{" "}
            </h2>

            <p className="font-serif text-opacity-20 text-base">
              <Link to="">Products</Link>
            </p>
            <p className="font-serif text-opacity-20 text-base">
              <Link to="">Careers</Link>
            </p>
          </div>

          <div className="flex flex-col gap-1 text-white  px-2 pt-6">
            <h2 className="heading-text  font-bold font-dm text-xl">
              OUR SERVICES{" "}
            </h2>

            <p className="font-serif text-opacity-20 text-base">
              <Link to="">Powpa</Link>
            </p>
            <p className="font-serif text-opacity-20 text-base">
              <Link to="">Sinfo</Link>
            </p>
            <p className="font-serif text-opacity-20 text-base">
              <Link to="">Software Dev</Link>
            </p>
          </div>

          <div className="flex flex-col gap-1 text-white  px-2 pt-6 pb-4">
            <h2 className="heading-text  font-bold font-dm text-xl">ABOUT </h2>

            <p className="font-serif text-opacity-20 text-base">
              <Link to="">About Us</Link>
            </p>
            <p className="font-serif text-opacity-20 text-base">
             <a href="mailto:emmaabuo2020@outlook.com">Send a Message </a> 
            </p>
          </div>

          <div className="flex flex-col gap-1 text-white  px-2 pt-6 pb-4">
            <h2 className="heading-text  font-bold font-dm text-xl">
              SOCIAL MEDIA{" "}
            </h2>
            <div className="social-icons-container flex flex-row gap-6 justify-start items-center text-white      md:text-xl">
              <Link
                to=""
                className=" hover:shadow-current hover:shadow-md hover:text-blue-700  transition-all transition-duration-1000 eae-in-out hover:transition-all hover:ease-in-out hover:transition-duration-1000  "
              >
                <FontAwesomeIcon icon={faFacebook} facebook-icon />
              </Link>

              <Link
                to=""
                className=" hover:shadow-current hover:shadow-md hover:text-blue-700  transition-all transition-duration-1000 eae-in-out hover:transition-all hover:ease-in-out hover:transition-duration-1000"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>

              <Link
                to=""
                className=" hover:shadow-current hover:shadow-md hover:text-blue-700  transition-all transition-duration-1000 eae-in-out hover:transition-all hover:ease-in-out hover:transition-duration-1000"
              >
                <FontAwesomeIcon icon={faLinkedin} linkedin-icon />
              </Link>

              <Link
                to=""
                className=" hover:shadow-current hover:shadow-md hover:text-blue-700  transition-all transition-duration-1000 eae-in-out hover:transition-all hover:ease-in-out hover:transition-duration-1000"
              >
                <FontAwesomeIcon icon={faInstagram} instagram-icon />
              </Link>
            </div>
          </div>
        </ul>
        {/*end of footer icons */}

        <div className="lined-section flex flex-col justify-center items-center gap-6  mx-auto w-full pb-6  pt-16">
          <div className="line border border-white opacity-20 w-[90%] h-[1px] "></div>
        </div>

        <section className="log-copyright-section flex flex-col gap-2 justify-center  items-center p-2 mx-auto   md:flex-row md:justify-around md:mx-0 md:gap-8 md:w-full">
          <Link to="/">
            <img
              className="footer-logo "
              src=" https://www.yiponline.com/resources/img/yip-online.png"
              alt="logo"
              height="100"
              width="100"
            />
          </Link>
          <p className="copyrighted-text font-sans text-white  text-opacity-30 txt-center text-sm">
            Yip-Online IT Services &copy; {CurrentYear} All Rights Reserved
          </p>
        </section>
      </div>
    </>
  );
};

export default Footer;
