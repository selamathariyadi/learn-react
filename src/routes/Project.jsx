import React from "react";

import Navbar from "../components/header/Navbar";
import  Footer  from "../components/footer/Footer";
import Index from "../components/page";
import  Contencard from "../components/page/contencard";
import Work from "../components/page/work";

const Project = () =>{
    return(
        <>
        <div>
          <Navbar />
          <Index heading="PROJECT." text="Some of my most recent works" 
          />
          <Work/>
          <Contencard/>
          <Footer />
        </div>
    
        </>
        )
};

export default Project;