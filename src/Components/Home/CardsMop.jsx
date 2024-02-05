/** @format */

import react from "react";

const cards = ({background, image, heading, text}) => {
  return (
    <>
      <div className="main-wrapper   flex flex-col gap-8 justify-start items-start p-2 px-4 md:flex-row ">
        <div
          className="items-container-background p-5 justify-start items-start flex flex-col gap-2 shadow-current shadow-md rounded-md px-4
           md:w-[300px] "
          style={{
            background: background,
          }}
        >
          <img
            className="rider-image   w-auto h-auto  md:w-[300px] md:h-[200px] "
            src={image}
            alt="image"
          />
          <h4 className="heading-rider-text font-bold text-black font-sans text-2xl text-left  ">
            {" "}
            {heading}{" "}
          </h4>
          <p className="last-rider-text font-sans font-normal text-black text-xl text-left w-[75%]   md:w-full">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};
export default cards;
