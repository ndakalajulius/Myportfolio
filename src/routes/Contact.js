import React from "react";
import { Navbar } from "../components/Navbar";
import  Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import Forms from "../components/Forms";
// import Forms from "../components/Forms";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading = "CONTACT" text= " Lets have a chat"/>
      <Forms />
      <Footer />
    </div>
  );
};

export default Contact;
