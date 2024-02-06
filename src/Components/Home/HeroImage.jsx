/** @format */

import React from "react";
import BgImage from "../../assets/images/bgimage.png";

const Image = () => {
  return (
    <>
      <div className="  relative top-[4rem] image-bg-background flex flex-col     lg:relative lg:top-[7rem]  bg-white ">
        <img
          className="image-bg rounded-[50%]"
          src={BgImage}
          alt="image"
          width="700px"
          height="600px"
        />
      </div>
    </>
  );
};

export default Image;
