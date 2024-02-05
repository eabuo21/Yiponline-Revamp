/** @format */

import react from "react";

const SolCards = ({ background, image, heading }) => {
  return (
    <>
      <div className="main-wrapper   flex flex-col gap-8 justify-start items-start p-2 px-4 ">
        <div
          className="items-container-background p-5 justify-start items-start flex flex-col gap-2 shadow-current shadow-md rounded-md px-4 "
          style={{
            background: background,
          }}
        >
          <img
            className="rider-image   w-auto h-auto "
            src={image}
            alt="image"
          />
          <h4 className="heading-rider-text font-bold text-blue-700 font-dm text-xl text-left ">
            {" "}
            {heading}{" "}
          </h4>
        </div>
      </div>
    </>
  );
};
export default SolCards;
