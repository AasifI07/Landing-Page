import React from "react";
import Header from "../components/Header";
import Navigationbar from "../components/Navigationbar";
import Heroslider from "../components/Heroslider";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Website from "../components/Website";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Blog from "../components/Blog";
import Wedo from "../components/Wedo";
import Discuss from "../components/Discusss";
import Digital from "../components/Digital";
import Try from "../components/Try";

const homepage = () => {
  return (
    <div>
      <Navigationbar />
      <Header />
      <Heroslider />
      <Experience />
      <Portfolio />
      
    <div className="container mx-auto flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12">
 
       <Try/>
       <Website />
       
       </div> 
       

      <Clients/>
      <Blog/>
      <Wedo/>
      <Discuss/>
      <Digital/>
      <Footer/>
    </div>
  );
};

export default homepage;
