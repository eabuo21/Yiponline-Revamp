/** @format */

import React, { useState } from "react";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../Notification/Notify";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //handle the submit function for the contact Form
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    //email js handles the parameters in the form to be sent t the email address
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_id",
        "template_id",
        templateParams,
        "api_key".then((Response) => {
          showSuccessNotification("message sent successfully");
          setLoading(false);
          setName("");
          setEmail("");
          setMessage("");
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
      <div className="form-container"></div>
    </>
  );
};
export default Form;
