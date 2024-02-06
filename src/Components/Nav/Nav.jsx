/** @format */

// Navigation.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationLinks = [
    { name: "Products", to: "/products" },
    { name: "Careers", to: "/Careers" },
    { name: "Contact", to: "/Contact" },
    { name: "JoinUs", to: "/JoinUs" },
  ];

  return (
    <Disclosure
      as="nav"
      className={`p-4 z-50 sticky ${
        scrolling
          ? "bg-gray-800 transition-colors transition-duration-1000  ease-in-out "
          : "bg-white  "
      }`}
    >
      {({ open }) => (
        <>
          <div className="container mx-auto flex items-center justify-between  ">
            {/* Logo */}
            <div className="flex-shrink-0 text-black ">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <div className="my-logo p-2 ">
                  <img
                    src="https://www.yiponline.com/resources/img/yip-online.png"
                    alt="logo"
                    className="logo-image"
                    width="100px"
                    height="120px"
                  />
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className=" desktop-navigation      lg:flex lg:flex-row space-x-4 ">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`text-black hover:text-blue-700 font-passion text-xl ${
                    scrolling ? "text-white" : "text-black"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button (hidden on large screens) */}
            <div className="lg:hidden ">
              <Disclosure.Button
                className="text-black border-2 border-blue bg-blue-700 p-2 text-white"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="sr-only">Open Menu</span>
                <svg
                  className="w-6 h-6 transform origin-center"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ transform: menuOpen ? "rotate(90deg)" : "none" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Menu (hidden on large screens) */}
          <Transition
            show={menuOpen}
            as={Fragment}
            enter="transition duration-300 ease-in-out cubic"
            enterFrom="-translate-y-[50%]"
            enterTo="translate-y-0"
            leave="transition duration-200 ease-in cubic"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <Disclosure.Panel className="lg:hidden bg-white fixed inset-0 z-50 w-auto flex flex-col justify-center items-center gap-4 text-2xl">
              <div className="flex flex-col space-y-4 p-4">
                {navigationLinks.map((link) => (
                  <Link
                    data-aos="flip-right"
                    data-aos-easing="ease-in cubic"
                    data-aos-duration="2000"
                    data-aos-delay="50"
                    data-aos-anchor-placement="top-bottom"
                    data
                    key={link.name}
                    to={link.to}
                    className="text-black hover:text-red font-sans text-3xl "
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                <button
                  onClick={() => setMenuOpen(false)}
                  className="close-button text-4xl text-black border-2 border-blue-700  p-1"
                >
                  X
                </button>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
