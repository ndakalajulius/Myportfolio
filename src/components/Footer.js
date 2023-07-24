import React from "react";
import SimpleReactFooter from 'simple-react-footer';

const Footer = () => {
  // Define the data for the footer
  const description =
    "I am a software developer I’ve developed numerous web applications. You name it, I’ve clocked an embarrassing number of hours online working on it. I’m confident my adaptability, web developing experience and commitment would make me a perfect fit for the work.Currently, I am a freelancer, I develop web applications. I’m fiercely competitive in my approach, up-to-date on all the lates trends.I’m positive my knack for developing web applications will makeme an immediate asset";
  const title = "About me";

  const columns = [
    {
      title: "Links",
      resources: [
        {
          name: "Contact",
          link: "/contact",
        },
        {
          name: "About ",
          link: "/about",
        },
        {
          name: "Home",
          link: "/home",
        },
        {
          name: " Projects",
          link: "/project",
        },
      ],
    },
   
  ];

  return (
    <SimpleReactFooter
      description={description}
      title={title}
      columns={columns}
      linkedin="https://www.linkedin.com/in/julius-ndakala-33ba171a5/"
      facebook="https://www.facebook.com/"
      twitter="https://twitter.com/NdakalaWar"
      instagram="https://www.instagram.com/juliusndakala/"
      youtube="UCFt6TSF464J8K82xeA?"
      pinterest="https://www.pinterest.com/jndakala/"
      copyright="black"
      iconColor="black"
      backgroundColor="grey"
      fontColor="black"
      copyrightColor="black"
    />
  );
};

export default Footer;
