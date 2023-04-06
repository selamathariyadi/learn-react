import React from "react";
import Navbar from "../components/header/Navbar";
import  Footer  from "../components/footer/Footer";
import Index from "../components/page"
import Aboutconten from "../components/page/aboutconten";

const About = () =>{
    return(
        <>
        <div>
        <Navbar />
        <Index heading="ABOUT." text="Im a friendly Front-End Developer." 
          />
          <Aboutconten/>
        <Footer />
        </div>
    
        </>
        )
};

export default About;