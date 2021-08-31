import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CategoryCard from "../../Component/category/categoryCard";
import Shopbyseasonsbest from "../../Component/Product/Shopbyseasonsbest";
import TopDeals from "../../Component/Product/Topdeals";
import HomeBanner from "../../Component/templet/banner";
import Header from "../../Component/templet/header";
import DesktopHome from '../../Component/home/index'
const style = {
  header: {
    // background: "#efefef",
    background: "white",
    margin: 0,
    borderBottom: "1px solid gray",
    borderTop: "1px solid gray",
    // paddingBottom: "5px",
    padding: "5px",
    textAlign: "center",
    // fontFamily: "cursive",
  },
  viewmore: {
    textAlign: "center",
    border: "1px solid black",
    width: "fit-content",
    padding: "3px 100px",
    borderRadius: "6px",
    background: "#591a07",
    color: "white",
    textDecoration: "none",
  },
};

const Home = () => {
  const deviceType = useSelector((state) => state.authorization.device_type);
  console.log("deviceType", deviceType);
  return (
    <div>
      <Header />
      {deviceType === "mobile" ? (
        <div style={{ background: "#efefef" }}>
          <HomeBanner />
          <h3 style={style.header}>SHOP BY ITEM CATEGORY </h3>
          <CategoryCard />
          <h3 style={style.header}>TOP DEALS</h3>
          <TopDeals />
          <h3 style={style.header}>SHOP BY SEASON'S BEST</h3>
          <Shopbyseasonsbest />
          <HomeBanner />
        </div>
      ) : (
       <DesktopHome/>
      )}
    </div>
  );
};

export default Home;
