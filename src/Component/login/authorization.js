import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import Header from "../templet/header";
import Login from "./login";
import Register from "./register";

const Authentication = () => {
  const [activeTab, setActiveTab] = useState(1);
  const openPage = (page) => {
    setActiveTab(page);
  };
  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: "#efefef",
          marginTop: "48px",
          width: "-webkit-fill-available",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            fontSize: "20px",
            height: "50px",
            position: "fixed",
            width: "-webkit-fill-available",
            top: "48px",
            zIndex: 99,
          }}
        >
          <div
            style={{
              width: "100%",
              textAlign: "center",
              borderRight: "1px solid black",
              background: activeTab === 0 ? "green" : "lightgreen",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
            
            onClick={() => {
              openPage(0);
              console.log(activeTab);
            }}
          >
            LogIn
          </div>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              background: activeTab === 0 ? "lightgreen" : "green",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
            onClick={() => {
              openPage(1);
              console.log(activeTab);
            }}
          >
            Register
          </div>
        </div>
        <SwipeableViews enableMouseEvents index={activeTab}>
          <div>{activeTab === 0 && <Login />}</div>
          <div>{activeTab === 1 && <Register />}</div>
        </SwipeableViews>
      </div>
    </>
  );
};
export default Authentication;
