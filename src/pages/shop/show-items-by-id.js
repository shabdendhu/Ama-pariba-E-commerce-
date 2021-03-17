import React from "react";
import Header from "../../Component/templet/header";
import HomeBanner from "../../Component/templet/banner";
import ProductsByCategory from "../../Component/Cards/productsByCategorys";
import { useStateValue } from "../../Component/templet/StateProvider";

const ShopByCategory = () => {
  const [{ basket }] = useStateValue();
  var url = window.location.search;
  var pagetitle = url.substring(url.lastIndexOf("=") + 1);

  //

  // var count = {};
  // basket.forEach(function (i) {
  //   delete i.item_id;
  //   // console.log("filterdObjfilterdObj", i);
  //   var key = JSON.stringify(i);
  //   count[key] = (count[key] || 0) + 1;
  //   // console.log(i.id);
  // });
  // console.log("countcountcount", count);
  //
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

export default ShopByCategory;
