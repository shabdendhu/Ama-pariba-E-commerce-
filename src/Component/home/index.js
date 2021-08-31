import React from "react";
import Body from "./body";
import LeftNav from "./leftNav";
const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1300px",
        margin: "0 auto 0",
        padding: " 0 16px",
        // boxSizing: "border-box",
        background:'white'
      }}
    >
      <div
        style={{
          width: "18.5%",
          float: "left",
          minHeight: "1px",
          position: "relative",
          marginRight: "24px",
        }}
      >
        <LeftNav />
      </div>
      <div
        style={{
          width: "calc(100% - 21.5%)",
          float: "right",
          minHeight: "1px",
          position: "relative",
          // maxWidth:"1000px"
        }}
      >
        <Body />
      </div>
    </div>
  );
};

export default Home;
