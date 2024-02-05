/** @format */

import React from "react";
import Solutions from "../../../Components/Home/Solutions/SolutionsCards";

function Solution() {
  const Cards = [
    {
      background: "white",
      image:
        "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "E-COMMERCE",
    },
    {
      background: "white",
      image:
        "https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "HOSPITALITY",
    },
    {
      background: "white",
      image:
        "https://cdn.pixabay.com/photo/2016/03/29/18/37/seo-1288976_960_720.jpg",
      heading: "SEARCH FUNCTIONALITY",
    },
    {
      background: "white",
      image:
        "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "RESPONSIVE THEMES",
    },
    {
      background: "white",
      image:
        "https://cdn.pixabay.com/photo/2017/03/06/15/49/domain-2121820_960_720.jpg",
      heading: "CUSTOM DOMAIN",
    },
  ];
  return (
    <>
      <div className="items-container">
        {Cards.map((card, index) => (
          <div key={index} className="contents-container">
            <Solutions
              background={card.background}
              image={card.image}
              heading={card.heading}
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default Solution;
