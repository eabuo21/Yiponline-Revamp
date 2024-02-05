import React, {useEffect} from "react";


const Contact = () => {
  //set the  browser to scroll to the top of the page when the  component mounts th screen
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    handleScroll();
  }, [1]);
  return (
    <>
      <div className="Contact-container"></div>
    </>
  );
};
export default Contact;
