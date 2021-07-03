import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop < scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <div className="header">
      <div className={`container ${scrolling ? "scrolling" : "static"}`}>
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
