import React from "react";
import Header from "../src/components/LandingPageHearder";
import Showcase from "../src/components/Showcase";
import Services from "../src/components/Services";
import Footer from "../src/components/Footer";
import "../src/styles/styles.css";
import hallImage from './images/hallimage.png'
import "./App.css";
import AboutUs from "../src/components/aboutUs";
import NewsLetter from "./components/newsLetter";
import Login from "./components/login/Login";

function App() {
  return (
    
     <div className="container">
       {/* to view login page; div.container>Login>footer */}
    <Login/>
       {/* <Header />
       <div className="content-wrap">
         <Showcase />
         <div className="page-contents">
           <AboutUs/>
         <div className="page-contents-img">
           <img src={hallImage} alt="magnititude hall"/>
         </div>
     </div>
     <Services />
    <NewsLetter/> */}
     <Footer />
       {/* </div> */}
    </div>
  );
}

export default App;
