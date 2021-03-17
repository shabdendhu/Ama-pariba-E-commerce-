import React, { useEffect } from "react";
// import Products from "../Cards/ProductCard";
import Header from "./header";
import Products from "../Cards/productsList";
import CategoryforHome2 from "../category/CategoryforHome2";

const Home = () => {
  useEffect(() => {
    document.body.style.background = "#efefef";
  }, []);
  return (
    <>
      <Header />
      <div style={{ marginTop: "50px" }}>
        {/* <HomeBanner /> */}
        <CategoryforHome2 />
        <Products />
      </div>
    </>
  );
};

export default Home;
