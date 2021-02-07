import React, { useEffect } from "react";
// import Products from "../Cards/ProductCard";
import Header from "./header";
import HomeBanner from "./banner";
import Products from "../Cards/productsList";

const Home = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: "50px" }}>
        <HomeBanner />

        <Products />
      </div>
    </>
  );
};

export default Home;
