import React from "react";
import Navbar from "../components/header/Navbar";
import  Footer  from "../components/footer/Footer";
import Index from "../components/page";
import Contactconten from "../components/page/contactconten";


const Contact = () =>{
    return(
        <>
        <div>
        <Navbar />
        <Index heading="CONTACT." text="Lets have a chat" 
          />
        <Contactconten/>
        <Footer />
        </div>
    
        </>
        )
};

export default Contact;