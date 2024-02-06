/** @format */

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../Notification/Notify";

const Modal = ({ onClose }) => {
  const [org, setOrg] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [contactperson, setContactPerson] = useState(" ");
  const [service, setService] = useState(" ");
  const [loading, setLoading] = useState(false);

  //handle the submit function for the contact Form
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    //email js handles the parameters in the form to be sent t the email address
    const templateParams = {
      org: org,
      email: email,
      phone: phone,
      service: service,
      contactperson: contactperson,
    };

    emailjs
      .send(
        "service_id",
        "template_id",
        templateParams,
        "api_key".then((Response) => {
          showSuccessNotification("Request Submitted ");
          setLoading(false);
          setOrg("");
          setPhone("");
          setContactPerson("");
          setEmail("");
          setService("");
        })
      )

      .cath((error) => {
        {
          setLoading(false);
          showErrorNotification("failed, please check your connection");
        }
      });
  };

  return (
    <>
      <div className=" main-container  inset-0 z-50 w-full fixed bg-transparent flex flex-col justify-center items-center p-4 px-6">
        <div className="inset-0 bg-black bg-opacity-75 absolute "></div>
        <div className="form-holder relative">
          <form
            onSubmit={handleSubmit}
            className="form-container  justify-center items-center p-4 px-6 bg-white rounded-md h-[fixed] w-[50vh]   md:w-[80vh]  flex flex-col gap-8"
          >
            <div className="close-button-section flex  flex-col ml-auto">
              <button
                onClick={onClose}
                className="close-button bg-red  rounded-md p-3 font-bold text-2xl text-white "
              >
                &times;
              </button>
            </div>
            <input
              type="text"
              value={org}
              placeholder="Name of Organization"
              onChange={(event) => setOrg(event.target.value)}
              className="form-field border-2 border-blue-700 rounded-md w-[70%] h-[40px] md:h-[50px]  text-black  md:w-full"
              
required            />

            <input
              type="email"
              value={email}
              placeholder="Email Address"
              onChange={(event) => setEmail(event.target.value)}
              className="form-field border-2 border-blue-700 rounded-md w-[70%] h-[40px] md:h-[50px]  text-black  md:w-full 
              "required
            />

            <input
              type="tel"
              value={phone}
              placeholder="Phone Number "
              onChange={(event) => setPhone(event.target.value)}
              className="form-field border-2 border-blue-700 rounded-md w-[70%] h-[40px] md:h-[50px]  text-black  md:w-full 
              "required
            />

            <input
              type="text"
              value={contactperson}
              placeholder="Contact  Person"
              onChange={(event) => setContactPerson(event.target.value)}
              className="form-field border-2 border-blue-700 rounded-md w-[70%] h-[40px] md:h-[50px]  text-black  md:w-full 
              "required
            />

            <select
              type="dropdown"
              value={service}
              onChange={(event) => setService(event.target.value)}
              className="form-field border-2 border-blue-700 rounded-md w-[70%] h-[40px] md:h-[50px]  text-black  md:w-full 
              "required
            >
              <option value=" " disabled>
                {" "}
                Service Required{" "}
              </option>
              <option value="custom software Development">
                {" "}
                Custom Softare Development
              </option>
              <option value="website  development ">
                {" "}
                website Development{" "}
              </option>
              <option value="E-commerce website development ">
                {" "}
                E-commerce website development
              </option>
              <option value="Hospitality"> Hospitality </option>
              <option value="Search Functionality ">
                {" "}
                Search Search functionality{" "}
              </option>
              <option value="Responsive themes"> Responsive Themes </option>
              <option value="Custom Domain"> Custom Domain </option>
            </select>

            <section className="submit-button-section flex flex-col justify-center items-center mx-auto">
              <button className="submit-button bg-blue-700 p-4 w-[100px] h-[50px] text-white ">
                {loading ? <b> submitting....</b> : <b> Submit </b>}
              </button>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
