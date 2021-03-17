import React, { useState, useEffect } from "react";
import axios from "axios";
import { get_productsbycategory } from "../../constants/api";
import ProductCard from "./ProductCard";
import { CircularProgress } from "@material-ui/core";

const ProductsByCategory = () => {
  const [products, setProducts] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setShowLoader(true);

    axios
      .get(`${get_productsbycategory}/${parseInt(params.get("id"))}`)
      .then((response) => {
        if (response.data.status) {
          setShowLoader(false);
          setProducts(response.data.data);
        }
        // console.table(response.data.data);
      });
  }, []);
  // useEffect(() => {
  // 	document.body.style.background = "#efefef";
  // }, []);
  return (
    <>
      {showLoader ? (
        <div style={{ textAlign: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <div>
          {products.map((product) => (
            <ProductCard
              key={product.product_id}
              id={product.product_id}
              image={product.image_url}
              name={product.product_name}
              amount="10kg"
              price={product.product_price}
              data={product}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsByCategory;
