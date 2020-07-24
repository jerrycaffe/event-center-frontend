import React from "react";
import "../src/styles/styles.css";
import "./App.css";

import AboutUs from "../src/components/aboutUs";
import NewsLetter from "./components/newsLetter";
import Login from "./components/login/Login";
import SignUp from "./components/SignUp"

function App() {
  return (
    
     <div className="container">
       {/* to view signup page; div.container>SignUp>footer */}
    {/* <Login/> */}
    <SignUp/>
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
