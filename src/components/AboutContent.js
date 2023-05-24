import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'


export const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
    <h1> Who am I? </h1>
    <p>  I am a software developer.
    I’ve developed numerous web applications. You name it, I’ve
    clocked an embarrassing number of hours online working on it. I’m
    confident my adaptability, web developing experience and
    commitment would make me a perfect fit for the work.
    Currently, I am a freelancer, I develop web applications.
    I’m fiercely competitive in my approach, up-to-date on all the latest
    trends.
    I’m positive my knack for developing web applications will make
    me an immediate asset . </p>
    <Link to= "/contact"> 
     <button className="btn">contact </button>
    </Link>
    </div>
    
    
    
    
    
    
    
    </div>
  )
}
