import React, { useEffect, useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const transitionNavBar = () =>
    window.scrollY > 500 ? setShow(true) : setShow(false);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  });

  return (
    <div className="header">
      <div className={`container ${!show ? "scrolling" : "static"}`}>
        <h2>Susan Wong</h2>
        <div className="navigations hide-for-mobile">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
          <a href="#gallery">GALLERY</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
