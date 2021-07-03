import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <h5>JOIN HER NEWSLETTER</h5>
          <div className="text-field">
            <input
              pattern={``}
              type="email"
              placeholder="Enter your e-mail address"
            />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="bottom">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
