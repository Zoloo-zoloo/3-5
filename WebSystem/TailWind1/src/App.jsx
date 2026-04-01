import { useState } from "react";
// import TWHicheel from "./Component/TWHicheel";
// import Web1 from "./Component/Web1";
// import Hero from "./Component/Hero";
// import Feature from "./Component/Feature";
// import Schedule from "./Component/Schedule";
// import Monitor from "./Component/Monitor";
// import Service from "./Component/Service";
// import Price from "./Component/Price";
// import Footer from "./Component/Footer";
import Banner from "./Components/Banner";
import NavBar from "./Components/NavBar";
import CourseList from "./Components/CourseList";
import WhyChooseUS from "./Components/WhyChooseUS";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      {/* <div>
        <Web1 />
      </div>
      <div>
        <Hero />
      </div>
      // <div>
      //   <Feature />
      // </div>
      <div>
        <Schedule />
      </div>
      <div>
        <Monitor/>
      </div>
      <div>
        <Price />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Footer />  
      </div> */}
      <div>
        <NavBar/>
      </div>
      <div>
        <Banner/>
      </div>
      <div>
        <CourseList/>
      </div>
      <div>
        <WhyChooseUS/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App;