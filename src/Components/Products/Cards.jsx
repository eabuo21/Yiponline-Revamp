/** @format */

import React from "react";
import ProCards from "../../Components/Products/ProductsCards";

function Items() {
  const Cards = [
    {
      background: "white",
      image: "https://www.yiponline.com/resources/img/demos/it-services/icons/SimpooBooks.png",
      heading: " POWPA",
      text: "Our flagship product POWPA, helps anyone build a successful online business. Powpa allows anyone to set up an online store in minutes for the price of small chops and coke.Not only that, Popwa also has all the business tools that make managing all your business operations feel like a walk in the park. ",
    },
    {
      background: "white",
      image:"https://www.yiponline.com/resources/img/demos/it-services/icons/SimpooBooks.png",
      heading: "SIMPOO ",
      text: "Simpoo effortlessly keeps track of financial transactions, handles billing for clients, and facilitates online payments. Every business needs to make bookkeeping Simpoo! ",
    },


      {
      background: "white",
      image: "https://www.yiponline.com/resources/img/demos/it-services/icons/SimpooBooks.png",
      heading: "CUSTOM SOFTWARE DEVELOPMENT ",
      text: "Upgrade to a perfect fit ! At Yip, we tailor-make software that fit your business like a glove. Our team of experts creates unique solutions, tailored to your specific needs. Say goodbye to generic apps and hello to a tailor-made one. Contact us and see the difference Yeep can make!",
    },
  ];

  return (
    <>
      <div className="main-container flex flex-col   justify-center items-center mx-auto   md:grid md:grid-cols-3  shrink-0 ">
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
            <ProCards
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

export default Items;
