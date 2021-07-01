import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../Component/Product/ProductCard";
import Header from "../../Component/templet/header";
// import { user_history } from "../../constants/api";
import { gql, useQuery } from "@apollo/client";
import { Card } from "@material-ui/core";
// import { user_info } from "../../constants/storage-keys";
const myHistoryQuery = gql`
  query ($id: Int) {
    get_allBasket(id: $id) {
      id
      createdAt
      product {
        id
        name
        image
        rating
      }
      quantityOption {
        id
        quantity
        # product_id
        base_price
        unit {
          id
          full_name
          short_name
        }
      }
    }
  }
`;

const HistoryCard = ({ item }) => {
  // console.log("itemitem",item)
  return (
    <Card
      style={{
        margin: "1ch 4px 0ch",
        height: "7ch",
        display: "flex",
        position: "relative",
        padding: "5px",
      }}
      onClick={() => {
        window.location.href = `/search-results?id=${item.product.id}?name=${item.product.name}`;
      }}
    >
      {/* <div style={{display:"flex"}}> */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img style={{ height: "50px" }} src={item.product.image} />
      </div>
      <div style={{ flex: 5 }}>
        <div style={{ margin: "9px 4px -2px" }}>
          <span style={{ fontSize: "17px", fontFamily: "fantasy" }}>
            {item.product.name}
          </span>
          <br />
          <span style={{ fontWeight: 400, paddingTop: "2px" }}>
            {item.quantityOption.quantity}
            {item.quantityOption.unit.short_name}
          </span>
        </div>
        <div
          style={{
            fontWeight: 400,
            fontSize: "13px",
            position: "absolute",
            right: 0,
            paddingRight: "5px",
            marginBottom: "15px",
          }}
        >
          <span>On:</span> {item.createdAt}
        </div>
      </div>
      {/* </div> */}
      <span
        style={{
          width: "10px",
          background: "red",
          height: "10px",
          margin: "7px 7px 0px 0px",
          borderRadius: "10px",
        }}
      ></span>
    </Card>
  );
};
const MyHistory = () => {
  const user_info = useSelector((state) => state.authorization.user_info);
  const [productHistory, setProductHistory] = useState([]);
  const { networkStatus, called, loading, data } = useQuery(myHistoryQuery, {
    variables: { id: user_info && user_info.id },
  });

  useEffect(() => {
    if (networkStatus === 7) {
      // console.log("history", data.get_allBasket);
      setProductHistory(data.get_allBasket);
    }
  }, [networkStatus]);
  // useEffect(() => {
  //   axios.post(user_history, { user_id: user_info.id }).then((response) => {
  //     if (response.data.status) {
  //       setProductHistory(response.data.data);
  //     }
  //     console.log(response.data.data);
  //   });
  // }, []);
  return (
    <div>
      <Header pagetitle="My History" />
      <div style={{ marginTop: "55px", background: "#efefef" }}>
        {productHistory.map((item) => (
          // <ProductCard key={item.product_id} data={item} />
          <HistoryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyHistory;
