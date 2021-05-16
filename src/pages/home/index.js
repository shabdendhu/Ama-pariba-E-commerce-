import React from "react";
import CategoryCard from "../../Component/category/categoryCard";
import Shopbyseasonsbest from "../../Component/Product/Shopbyseasonsbest";
import TopDeals from "../../Component/Product/Topdeals";
import HomeBanner from "../../Component/templet/banner";
import Header from "../../Component/templet/header";
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
  return (
    <div>
      <Header />
      <div style={{ marginTop: "50px", background: "#efefef" }}>
        <HomeBanner />
        <h3 style={style.header}>SHOP BY ITEM CATEGORY </h3>
        <CategoryCard />
        {/* for Now It is not available */}
        {/* <h3 style={style.header}>SHOP BY RECIPES INGRIDIENT'S</h3>
				<CategoryforHome1 /> */}
        <h3 style={style.header}>TOP DEALS</h3>
        <TopDeals />
        <h3 style={style.header}>SHOP BY SEASON'S BEST</h3>
        <Shopbyseasonsbest />
        {/* <div
          style={{
            textAlign: "center",
            margin: "0px 3px 0px 0px",
            paddingBottom: "10px",
          }}
        >
          <span
            // onClick={() => {
            // 	history.push(`/shop-by-recipes`);
            // }}
            style={style.viewmore}
          >
            VIEW MORE
          </span>
        </div> */}
        {/* </Link> */}
        <HomeBanner />
      </div>
    </div>
  );
};

export default Home;
