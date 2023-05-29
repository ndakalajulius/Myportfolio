import React from "react";
import "./FooterStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome ,faPhone, } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <a href="http://localhost:3000/" className="home social">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </a>
            <div>
              <p> Dhanjay Apartments, Nairobi</p>
              <p> Kenya </p>
            </div>
          </div>
          <div className="phone">
            <a
              href="+254 700-308-204"
              className="phone social"
            >
              <FontAwesomeIcon icon={faPhone} size="2x" />
            </a>
          </div>
          <div className="email">
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              className="email social"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </div>
        <div className="right">
          <h4> About me </h4>
          <p>
            {" "}
            I am a freelancer, I develop web applications. I’m fiercely
            competitive in my approach, up-to-date on all the latest trends.
          </p>
          <div className="social ">
            <a
              href="https://github.com/ndakalajulius"
              className="github social"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>

            <a
              href="https://www.twitter.com/ndakalawa"
              className="twitter social"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>

            <a
              href="https://www.linkedin.com/in/juliusndakala/"
              className="linkedin social"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
