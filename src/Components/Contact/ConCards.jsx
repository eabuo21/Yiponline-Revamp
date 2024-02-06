/** @format */

import React from "react";
import ConCards from "../../Components/Contact/ContactModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Items() {
  const Cards = [
    {
      background: "white",
      icon: faWhatsapp,
      heading: " Whatsapp",
      text: "Message Us on Whatsapp ",
      number1: "0903 791 2235 ",
    },
    {
      background: "white",
      icon: faPhone,
      heading: "Give us a call: 8am - 5pm ",
      text: " ",
      number1: "0809 530 6440 ",
      number2: "0809 530 6440 ",
    },
  ];

  return (
    <>
      <div className="main-container flex flex-col   justify-center items-center mx-auto   md:flex-row  ">
        {Cards.map((card, index) => (
          <div
            data-aos="fade-in"
            data-aos-easing="ease-in-linear"
            data-aos-duration="2500"
            data-aos-once="true"
            data-aos-mirror="true"
            key={index}
            className="items-to-show-container  "
          >
            <ConCards
              background={card.background}
              icon={card.icon}
              heading={card.heading}
              text={card.text}
              number1={card.number1}
              number2={card.number2}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Items;
