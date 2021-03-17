import { Grid } from "@material-ui/core";
import React from "react";
const CategoryItem = ({ item }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "7px 5px",
        }}
      >
        <div
          style={{
            padding: "5px 5px 3px",
            width: " 50px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgb(150 146 146 / 51%)",
            borderRadius: "7px",
            background: "white",
            height: "50px",
            overflow: "hidden",
            marginBottom: "7px",
          }}
        >
          {/* <span style={{ fontWeight: 400 }}>min_price</span> */}
          <br />

          <img
            // onClick={() => {
            // 	const pagename = item.name.replace(/ +/g, "");
            // 	history.push(`/recipe-details?id=${item.id}?name=${pagename}`);
            // }}
            style={{
              height: "50px",
              padding: "5px",
            }}
            alt="seasonaryItems"
            src={item.img}
          />
        </div>
        <span style={{ fontWeight: 400, textAlign: "center" }}>
          {item.name}
        </span>
      </div>
    </>
  );
};
const Shopbyseasonsbest = () => {
  const seasonitem = [
    { img: "apple.png", name: "Apple" },
    { img: "orange.png", name: "Orange" },
    { img: "butterchiken.png", name: "Butterchiken" },
    { img: "apple.png", name: "Apple" },
    { img: "orange.png", name: "Orange" },
    { img: "butterchiken.png", name: "Butterchiken" },
    { img: "apple.png", name: "Apple" },
    { img: "orange.png", name: "Orange" },
    { img: "butterchiken.png", name: "Butterchiken" },
  ];
  return (
    <div style={{ background: "#efefef" }}>
      <Grid container>
        {seasonitem.map((item, index) => (
          <Grid item xs={4} sm={3} md={1} key={index}>
            <CategoryItem item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Shopbyseasonsbest;
