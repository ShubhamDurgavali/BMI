import React from "react";
import Footer from "../components/Homepage/Footer";
import Navbar from "../components/Homepage/Navbar";
import ProductCarousel from "../components/Product/ProductCarousel";
import ProductSection from "../components/Product/ProductSection";

function Products() {
  return <>
    <div className="container" style={{marginTop: "30px" }}>
        <Navbar />
        <hr style={{ margin: "40px 0" }} />
        <ProductCarousel />
        <ProductSection />
        <Footer />
    </div>
  </>;
}

export default Products;
