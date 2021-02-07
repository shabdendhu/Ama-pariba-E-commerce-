import React from "react";
import Header from "../../Component/templet/header";
import HomeBanner from "../../Component/templet/banner";
import ProductsByCategory from "../../Component/Cards/productsByCategorys";

const shopByCategory = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: "50px" }}>
        <HomeBanner />
        <ProductsByCategory id={10} />
      </div>
    </>
  );
};

export default shopByCategory;
