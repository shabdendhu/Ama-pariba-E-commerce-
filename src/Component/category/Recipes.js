import { Card, Grid, CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { get_recipe_list } from "../../constants/api";

const CategoryItem = ({ item }) => {
  const history = useHistory();

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
            borderRadius: "41px",
            background: "white",
            height: "50px",
            overflow: "hidden",
            marginBottom: "7px",
          }}
        >
          {/* <span style={{ fontWeight: 400 }}>min_price</span> */}
          <br />

          <img
            onClick={() => {
              const pagename = item.name.replace(/ +/g, "");
              history.push(`/recipe-details?id=${item.id}?name=${pagename}`);
            }}
            style={{
              height: "50px",
              padding: "5px",
            }}
            src={item.icon}
          />
        </div>
        <span style={{ fontWeight: 400, textAlign: "center" }}>
          {item.name}
        </span>
      </div>
    </>
  );
};
const CategoryforHome1 = ({ all }) => {
  const history = useHistory();
  const [recipeList, setRecipeList] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    if (all) {
      setShowLoader(true);
      axios.get(get_recipe_list).then((response) => {
        if (response.data.status) {
          setShowLoader(false);
          setRecipeList(response.data.data);
        }
      });
    } else {
      setShowLoader(true);
      axios.get(`${get_recipe_list}/1`).then((response) => {
        if (response.data.status) {
          setShowLoader(false);
          setRecipeList(response.data.data);
        }
      });
    }
  }, []);
  return (
    <div style={{ background: "#efefef", textAlign: "center" }}>
      {showLoader ? (
        <div style={{ textAlign: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <Grid container>
            {recipeList.map((item, index) => (
              <Grid item xs={4} sm={3} md={1} key={index}>
                <CategoryItem item={item} />
              </Grid>
            ))}
          </Grid>
          {!all && (
            <div style={{ textAlign: "center", margin: "0px 3px 9px 0px" }}>
              <span
                onClick={() => {
                  history.push(`/shop-by-recipes`);
                }}
                style={{
                  textAlign: "center",
                  border: "1px solid black",
                  width: "fit-content",
                  padding: "3px 100px",
                  borderRadius: "6px",
                  background: "#591a07",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                VIEW MORE
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CategoryforHome1;
