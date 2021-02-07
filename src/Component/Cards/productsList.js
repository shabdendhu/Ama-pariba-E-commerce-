import React, { useState, useEffect } from "react";
import axios from "axios";
import { get_product_list } from "../../constants/api";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(get_product_list).then(response => {
      setProducts(response.data.data);
    });
  }, []);
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

export default Products;
