import React, { useState, useEffect } from "react";
import axios from "axios";
import { get_productsbycategory } from "../../constants/api";
import ProductCard from "./ProductCard";
import { CircularProgress } from "@material-ui/core";
import { gql, useQuery } from "@apollo/client";

const ProductByCategoryQuery = gql`
  query ($category_id: Int!) {
    get_product_by_category(category_id: $category_id) {
      id
      name
      # category_id
      # brand_id
      image
      rating
      # created_by
      # updated_by
      # is_active
      Category: category {
        name
        id
        # created_by
        # updated_by
        # is_active
      }
      Brand: brand {
        id
        name
        company_name
        ratings
        # created_by
        # updated_by
        # is_active
      }
      Quantity: qntity {
        id
        quantity
        product_id
        base_price
        unit_id
        discount
        # created_by
        # updated_by
        # is_active
        Unit: unit {
          full_name
          short_name
          # created_by
          # updated_by
          # is_active
        }
      }
    }
  }
`;
const ProductsByCategory = () => {
  const [products, setProducts] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const params = new URLSearchParams(window.location.search);
  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   setShowLoader(true);

  //   axios
  //     .get(`${get_productsbycategory}/${parseInt(params.get("id"))}`)
  //     .then((response) => {
  //       if (response.data.status) {
  //         setShowLoader(false);
  //         setProducts(response.data.data);
  //       }
  //       // console.table(response.data.data);
  //     });
  // }, []);
  const { networkStatus, called, loading, data } = useQuery(
    ProductByCategoryQuery,
    {
      variables: { category_id: parseInt(params.get("id")) },
    }
  );
  useEffect(() => {
    if (networkStatus === 7) {
      console.log(data.get_product_by_category);
      setShowLoader(false);
      setProducts(data.get_product_by_category);
    }
  }, [networkStatus]);
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
