import React, { useState } from "react";
import { Card, Grid, CircularProgress } from "@material-ui/core";
import { useEffect } from "react";
import axios from "axios";
import {
  get_all_product_category,
  get_product_category,
} from "../../constants/api";
import { useHistory } from "react-router-dom";

const HomeCategoryCard = ({ data }) => {
  const history = useHistory();
  return (
    <Card
      onClick={() => {
        history.push(
          `/show-items-with-id?id=${data.id}?name=${data.category_name}`
        );
      }}
      style={{
        display: "flex",
        flexDirection: "row",
        // width: "100%",
        flex: 1,
        padding: "10px",
        margin: "0px 5px 5px 5px",
      }}
    >
      <span style={{ flex: 1 }}>
        <img
          style={{
            height: "45px",
            width: "45px",
            borderRadius: "30px",
          }}
          src={data.category_img}
          alt={data.category_name}
        />
      </span>
      <span
        style={{
          flex: 2,
          paddingLeft: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {data.category_name}
      </span>
    </Card>
  );
};

const CategoryCard = ({ all }) => {
  const [productCategory, setProductCategory] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const history = useHistory();

  // console.log(all);
  useEffect(() => {
    if (all) {
      setShowLoader(true);
      axios.get(get_all_product_category).then((response) => {
        if (response.data.status) {
          setShowLoader(false);
          setProductCategory(response.data.data);
        }
      });
    } else {
      setShowLoader(true);
      axios
        .post(get_product_category, {
          is_popular: 1,
        })
        .then((response) => {
          if (response.data.status) {
            setShowLoader(false);
            setProductCategory(response.data.data);
          }
        });
    }
  }, [all]);

  return (
    <>
      <div>
        {showLoader ? (
          <div style={{ textAlign: "center" }}>
            <CircularProgress />
          </div>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                overflowX: "auto",
                width: "100%",
                background: "#e8e7e7ad",
                padding: "10px 0px",
              }}
            >
              <Grid container>
                {productCategory.map((deases, index) => (
                  <Grid item xs={6} sm={4} md={2} key={index}>
                    <HomeCategoryCard data={deases} />
                  </Grid>
                ))}
              </Grid>
            </div>
            {!all && (
              <div
                style={{
                  textAlign: "center",
                  margin: "0px 3px 0px 0px",
                  paddingBottom: "10px",
                }}
              >
                <span
                  onClick={() => {
                    history.push(`/shop-by-items`);
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
    </>
  );
};

export default CategoryCard;
