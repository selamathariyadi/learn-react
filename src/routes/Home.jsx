import React from "react";
import Navbar from "../components/header/Navbar";
import HeroImg from "../components/header/HeroImg";
import  Footer  from "../components/footer/Footer";
import Work from "../components/page/work";




const Home = () =>{
    return(
    <>
    <div>
        <Navbar/>
        <HeroImg/>
        <Work/>
        <Footer/>
    </div>

    </>
    )
};

export default Home;