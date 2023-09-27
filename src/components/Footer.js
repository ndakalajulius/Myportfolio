import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div class="footer-content">
      <div class="footer-logo">
        <p>
          Software engineering graduate looking for real-world experience in
          this field. Interested in learning more about the development of
          mobile applications, web applications and accessible software. Has
          experience implementing computer systems in low-income communities,
          helping a new generation of students become digitally literate. Has
          proficiency in both front-end and back-end software development.
        </p>
      </div>
      <div class="footer-links">
        <ul>
          <li>
            <a href="./home">Home</a>
          </li>
          <li>
            <a href="./about">About</a>
          </li>
          <li>
            <a href="./projects">projects</a>
          </li>
          <li>
            <a href="./contact">Contact</a>
          </li>
        </ul>
      </div>

      <div class="footer-social">
        <ul>
          <li>
            <a href="https://www.facebook.com/julius.ndakala/"></a>
          </li>
          <li>
            <a href="https://twitter.com/ndakala_julius"></a>
          </li>
          <li>
            <a href="linkedin.com/in/julius-ndakala-33ba171a5"></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
