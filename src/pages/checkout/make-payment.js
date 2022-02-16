import React from "react";
import Header from "../../Component/templet/header";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
const MakePayment = () => {
  return (
    <div>
      <Header pagetitle={"Make Payment"} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "white",
          padding: "10px",
        }}
      >
        <span style={{ marginLeft: "16px" }}>
          <LocationOnOutlinedIcon />
        </span>
        <div style={{width:'100%'}}>
          <div>
            <span>Deliver to: home</span>
            <span
              style={{
                float: "right",
                background: "#1d78d5",
                color: "white",
                padding: "2px 10px",
                borderRadius: "39px",
              }}
            >
              Change
            </span>
          </div>
          <div>jnjn, Bangalore - 560063</div>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
