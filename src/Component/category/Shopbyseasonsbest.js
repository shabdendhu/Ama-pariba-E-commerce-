import { CircularProgress, Grid } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { get_seasons_best_items } from "../../constants/api";
const CategoryItem = ({ item }) => {
  return (
    <>
      <div
        onClick={() => {
          // const searchName = item.product_name.replace(/ +/g, "");
          window.location.href = `/search-results?id=${item.product_id}?name=${item.product_name}`;
          // console.log(market);
        }}
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
            src={item.image_url}
          />
        </div>
        <span style={{ fontWeight: 400, textAlign: "center" }}>
          {item.product_name}
        </span>
      </div>
    </>
  );
};
const Shopbyseasonsbest = () => {
  const [seasonsBest, setSeasonsBest] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
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
  useEffect(() => {
    setShowLoader(true);
    axios.get(`${get_seasons_best_items}/1`).then((response) => {
      // console.log(response.data.data);
      if (response.data.status) {
        setShowLoader(false);
      }
      setSeasonsBest(response.data.data);
    });
  }, []);
  return (
    <div style={{ background: "#efefef" }}>
      {
        showLoader ? (
          <div style={{ textAlign: "center" }}>
            <CircularProgress />
          </div>
        ) : (
          // :<div style={{ background: "#efefef" }}>
          <Grid container>
            {seasonsBest.map((item, index) => (
              <Grid item xs={4} sm={3} md={1} key={index}>
                <CategoryItem key={item.product_id} item={item} />
              </Grid>
            ))}
          </Grid>
        )
        // {/* </div> */}
      }
    </div>
  );
};

export default Shopbyseasonsbest;
