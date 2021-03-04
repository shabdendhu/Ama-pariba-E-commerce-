import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../../Component/Cards/ProductCard";
import HomeBanner from "../../Component/templet/banner";
import Header from "../../Component/templet/header";
import { search_product_by_name } from "../../constants/api";

const Searchresult = () => {
  const [searchProduct, setSearchProduct] = useState([]);
  var url = window.location.search;

  var searchText = url.substring(url.lastIndexOf("=") + 1).replace("%20", " ");
  useEffect(() => {
    axios
      .post(search_product_by_name, {
        product_name: searchText,
      })
      .then((response) => {
        setSearchProduct(response.data.data);
        console.log(response.data.data);
      });
  }, []);
  return (
    <div>
      <Header pagetitle={searchText} />
      <div style={{ marginTop: "50px" }}>
        <HomeBanner />
        {searchProduct.map((item, index) => (
          <ProductCard key={item.product_id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Searchresult;
