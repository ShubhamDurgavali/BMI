import React from "react";
import  Navbar  from "../components/Homepage/Navbar";
import CardSection from "../components/Homepage/CardSection";
import Section1 from "../components/Homepage/Section1";
import Section2 from "../components/Homepage/Section2";
import Services from "../components/Homepage/Services";
import Clients from "../components/Homepage/Clients";
import Footer from "../components/Homepage/Footer";

function homepage() {
  return (
    <>
      <div className="App">
        <div className="container" style={{marginTop: "30px" }}>
          <Navbar />
          <Section1 />
          <CardSection />
          <hr style={{ margin: "80px 0" }} />
          <Services />
          <Section2 />
          <hr style={{ margin: "80px 0" }} />
          <Clients />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default homepage;
