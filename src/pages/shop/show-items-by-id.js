import React from "react";
import Header from "../../Component/templet/header";
import HomeBanner from "../../Component/templet/banner";
import ProductsByCategory from "../../Component/Cards/productsByCategorys";

const shopByCategory = () => {
  var url = window.location.search;
  var pagetitle = url.substring(url.lastIndexOf("=") + 1);
  return (
    <>
      <Header pagetitle={pagetitle} />
      <div style={{ marginTop: "50px" }}>
        <HomeBanner />
        <ProductsByCategory />
      </div>
    </>
  );
};

export default shopByCategory;
