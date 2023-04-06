import "./Style.css";
import React from 'react'

import IntroImg from '../../assets/hero1.jpg';
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <>
    <div className="hero">
        <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" /> 
        </div>
        <div className="conten">
            <p>Hi, I'M a FrontEnd.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
    </>
  )
}
export default HeroImg