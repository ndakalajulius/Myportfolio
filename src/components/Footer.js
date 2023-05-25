import React from "react";
import "./FooterStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faMedium,
  faStackOverflow,
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4> About me </h4>
            <p>
              {" "}
              I am a freelancer, I develop web applications. I’m fiercely
              competitive in my approach, up-to-date on all the latest trends.
            </p>
          </div>
          <div className="right">
            <div className="social-container ">
            <h1> Follow me </h1>
              <a
                href="https://twitter.com/NdakalaWa"
                className="twitter social"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/juliusndakala/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://www.facebook.com/julius.ndakala/"
                className="facebook social"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://github.com/ndakalajulius"
                className="github social"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://medium.com/@juliusndakala35"
                className="medium social"
              >
                <FontAwesomeIcon icon={faMedium} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/juliusndakala/"
                className="linkeidin social"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://stackoverflow.com/users/21133024/julius-ndakala"
                className="stackoverflow social"
              >
                <FontAwesomeIcon icon={faStackOverflow} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
