import React from "react";
import "./category.css";
const CategoryforHome2 = () => {
  const CommonDiseases = [
    "apple.png",
    "banana.png",
    "cucumber.png",
    "grapes.png",
    "orange.png",
  ];
  return (
    <div
      className="hide-scroll-bar"
      style={{
        display: "flex",
        flexDirection: "row",
        overflowX: "auto",
        width: "100%",
        background: "white",
        padding: "10px 0px",
      }}
    >
      {CommonDiseases.map((data, index) => (
        <div
          key={index}
          style={{
            flexShrink: 0,
            marginRight: "5px",
            marginLeft: "5px",
            // padding: "10px",
            // width: "calc(100vw - 38px)",
            padding: "8px",
            width: "60px",
            height: "60px",
            position: "relative",
            background: "white",
            borderRadius: "60px",
            border: "2px solid rgb(141 193 26)",
          }}
        >
          <img
            alt="products"
            src={data}
            style={{
              // width: "calc(100vw - 38px)",
              width: "60px",
              height: "60px",
              borderRadius: "60px",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryforHome2;
