import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../../Component/Product/ProductCard";
import HomeBanner from "../../Component/templet/banner";
import Header from "../../Component/templet/header";
import { gql, useLazyQuery } from "@apollo/client";
const SearchProductQuery = gql`
  query ($name: String!) {
    get_product_by_name(name: $name) {
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
const Searchresult = () => {
  const [searchProduct, setSearchProduct] = useState([]);
  var url = window.location.search;

  var searchText = url.substring(url.lastIndexOf("=") + 1).replace("%20", " ");
  const [SearchProduct, SearchProductRes] = useLazyQuery(SearchProductQuery);
 
  useEffect(() => {
    if (searchText.length > 0) {
      SearchProduct({
        variables: {
          name: searchText,
        },
      });
    }
  }, [searchText]);
  useEffect(() => {
    if (SearchProductRes.data) {
      setSearchProduct(SearchProductRes.data.get_product_by_name);
    }
  }, [SearchProductRes.data]);
  return (
    <div>
      <Header pagetitle={searchText} />
      <div >
        <HomeBanner />
        {searchProduct.map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Searchresult;
