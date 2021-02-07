import React, { useState, useEffect } from "react";
import axios from "axios";
import { get_productsbycategory } from "../../constants/api";
import ProductCard from "./ProductCard";

const ProductsByCategory = ({ id }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    axios
      .get(`${get_productsbycategory}/${parseInt(params.get("id"))}`)
      .then(response => {
        setProducts(response.data.data);
      });
  }, [id]);
  return (
    <>
      <div style={{ marginTop: "" }}>
        {products.map(product => (
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
    </>
  );
};

export default ProductsByCategory;
