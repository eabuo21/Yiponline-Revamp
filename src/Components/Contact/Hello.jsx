/** @format */

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../Notification/Notify";

const Hello = () => {
  //setting email js functionality for mailing in code
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //logic to handle the modal display

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    // send email using emailjs
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    // Access environment variables
    //const serviceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
    //const templateId = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
    //const userId = import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID;

    emailjs
      .send(
        "service_m0sgj2s",
        "template_ahwj8fl",
        templateParams,
        "NPd7Wszo4kPAco2ad"
      )
      .then((response) => {
        setLoading(false);
        showSuccessNotification(" Submitted ");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        setLoading(false);
        showErrorNotification("Submission Failed, please try again");
      });
  };

  return (
    <>
      <div className="hello-container">
        <h1
          data-aos="zoom-in"
          data-aos-anchor-placement="right-top"
          data-aos-easing="ease-in-linear"
          data-aos-duration="2000"
          data-aos-once="true"
          className="hello-text font-normal font-serif text-[60px] text-transparent bg-clip-text bg-gradient-to-br  from-blue-700  via-blue-400  to-gray-400 text-center  pb-12   md:pb-0  md:text-[150px]  md:text-opacity-30"
        >
          Get In-Touch
        </h1>
        <section
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-easing="ease-cubic"
          data-aos-duration="3000"
          data-aos-once="true"
          className="contact-form-section flex flex-col gap-3  justify-center items-center relative bottom-12    md:fle-row md:gap-5   md:bottom-20"
        >
          <div className="form-container p-4 w-[fixed]  flex flex-col gap-4 h-[auto]  border border-grey    bg-blue-800 rounded-[16px] shadow-current shadow-xl   md:mx-auto   md:w-[auto] md:h-[auto]  md:flex-row md:gap-0 ">
            <div className="text-items-section flex flex-col gap-8  md:gap-[10rem]     ">
              <p className="font-normal font-serif text-base text-white py-5 ">
                CURIOUS ABOUT OUR PRODUCTS?
              </p>

              <h1 className="text-[33.32px] font-bold font-serif text-white  py-4">
                YIP is ready and able to make magic for your business.
              </h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="contact-form-fields  flex flex-col gap-8 justify-center items-start  py-6  md:w-[60%] "
            >
              <input
                className="bg-transparent w-full border-0 border-b-2 border-b-secondary_grey outline-0 focus:border-b-secondary_grey p-2 text-white   "
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your  Name"
                required
              />

              <input
                className="bg-transparent w-full border-0 border-b-2 border-b-secondary_grey outline-0 focus:border-b-secondary_grey p-2 text-white"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your Email"
                required
              />

              <textarea
                className="bg-transparent w-full border-0 border-b-2 border-b-secondary_grey outline-0 focus:border-b-secondary_grey p-2 text-white h-[15vh]    md:h-auto"
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Your Message"
                required
              ></textarea>

              <div className="submit-button ">
                <button className="submit-b p-2 w-[fixed]  flex flex-col justify-center items-center text-center  font-serif text-base text-white bg-gradient-to-br from-blue-700 to-black rounded-[12px] ">
                  {loading ? (
                    <b className="text-sm animate-pulse text-center ease-in-out duration-1000 transition-all">
                      submitting....
                    </b>
                  ) : (
                    <b>Send Message </b>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};
export default Hello;
