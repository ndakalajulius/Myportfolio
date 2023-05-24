import React from "react";
import "./FooterStyles.css";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p> Dhanjay Apartments, Nairobi</p>
              <p> Kenya </p>
            </div>
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              +254700308204
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk 
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              juliusndakala35@gmail.com
            </h4>
          </div>
        </div>
        <div className="right"> 
        <h4> About me </h4>
        <p> I am a freelancer, I develop web applications.
        I’m fiercely competitive in my approach, up-to-date on all the latest
        trends.</p>
        <div className="social ">
        <FaFacebook 
        size={30}
        style={{ color: "white", marginRight: "1rem" }}
        
      />
     
      <FaTwitter
        size={30}
        style={{ color: "white", marginRight: "1rem" }}
        
      />
      <FaLinkedin
        size={30}
        style={{ color: "white", marginRight: "1rem" }}
        
      />

        </div>
        </div>
      </div>
    </div>
  );
};
