/** @format */

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../Notification/Notify";

const Modal = ({ onClose }) => {
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [servicerequired, setServiceRequired] = useState("");
  const [loading, setLoading] = useState(false);

const options = [
  "Custom Theme Development",
  "Custom Software Development",
  "Custom Domain",
  "Search Functionality",
  "E-Commerce",
  "Hospitality",
];

const DropdownOptions = () => {
  return options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));
};

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const templateParams = {
      organization: organization,
      phone: phone,
      email: email,
      address: address,
      servicerequired: servicerequired,
    };
    emailjs
      .send("service_id", "template_id", templateParams, "api_key")
      .then((response) => {
        showSuccessNotification("request sent");
        setLoading(false);
        setOrganization("");
        setPhone("");
        setEmail("");
        setAddress("");
        setServiceRequired("");
      })

      .catch((error) => {
        showErrorNotification(
          "request could not send , please check connection"
        );
        setLoading(false);
      });
  };

  return (
    <>
      <div className=" main-container  inset-0 z-50 w-full fixed bg-transparent flex flex-col justify-center items-center p-4 px-6">
        <div className="inset-0 bg-black bg-opacity-75 absolute "></div>

        <div className="form-holder relative flex flex-col p-4">
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

            <div className="form-elements-container  flex flex-col justify-center items-center p-3 w-full  h-auto gap-6">
              <input
                type="text"
                id="organization"
                placeholder="Enter Your Organization's Name"
                value={organization}
                onChange={(event) => setOrganization(event.target.value)}
                className="form-input-element w-full mx-3 rounded-md h-[40px] px-6 border border-blue-700 outline-0  border-l-2 border-l-lime-400"
                required
              />
              <input
                type="tel"
                id="phonenumber"
                placeholder="Enter Your Phone Number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="form-input-element w-full mx-3 rounded-md h-[40px] px-6 border border-blue-700 outline-0  border-l-2 border-l-lime-400"
                required
              />

              <input
                type="email"
                id="emailaddress"
                placeholder="Enter Your  Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="form-input-element w-full mx-3 rounded-md h-[40px] px-6 border border-blue-700 outline-0  border-l-2 border-l-lime-400"
                required
              />
              <input
                type="text"
                id="address"
                placeholder="Enter Your Address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                className="form-input-element w-full mx-3 rounded-md h-[40px] px-6 border border-blue-700 outline-0  border-l-2 border-l-lime-400"
                required
              />

              <select
                type="dropdown"
                id="servicerequired"
                value={servicerequired}
                onChange={(event) => setServiceRequired(event.target.value)}
                className="form-input-element w-full mx-3 rounded-md h-[40px] px-6 border border-blue-700 outline-0 border-l-2 border-l-lime-400"
                required
              >
                <option disabled>Service Required</option>
                <DropdownOptions />
              </select>

              <button
                type="submit"
                className="submit-button bg-blue-700 p-4 w-[100px] h-[50px] text-white "
              >
                {loading ? <b> submitting....</b> : <b> Submit </b>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
