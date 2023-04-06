import "./Style.css";

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
 const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome  size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Jl. Kelapa Merah Matraman</p>
                        <p>Jakarta Timur</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone  size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        +62 81388 22826
                    </h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk  size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        selamath6@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About the Company</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sit voluptatem illum id sequi odit, enim ullam vero.</p>
                    <div className="social">
                    <FaFacebook  size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    <FaTwitter  size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    <FaLinkedin  size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    </div>
            </div>            
        </div>
    </div>
  )
}
export default Footer