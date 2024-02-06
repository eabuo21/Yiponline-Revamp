/** @format */

import React from "react";
import Kards from "../../Components/Home/CardsMop";

function Cs() {
  const Cards = [
    {
      background: "white",
      image:
        "https://images.pexels.com/photos/5324973/pexels-photo-5324973.jpeg?auto=compress&cs=tinysrgb&w=1600",
      heading: "Mission",
      text: "Building accessible tech to Structure & Scale-up up African Businesses!",
    },

    {
      background: "white",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "Vision",
      text: "Building a Friction-free Africa attractive for reverse migration",
    },
  ];

  return (
    <>
      <div className="flex-items-container  flex flex-col gap-8  md:flex-row md:justify-center md:items-center ">
        {Cards.map((card, index) => (
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in linear"
            data-aos-duration="2500"
            data-aos-mirror="true"
            data-aos-anchor-placement="top right"
            data-aos-debounce="true"
            data-aos-once="true"
            key={index}
            className="items-centered-items"
          >
            <Kards
              background={card.background}
              image={card.image}
              heading={card.heading}
              text={card.text}
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default Cs;
