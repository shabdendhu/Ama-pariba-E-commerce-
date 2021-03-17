import { Checkbox, CircularProgress } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { get_recipe_detail } from "../../constants/api";
import Header from "../templet/header";
import CustomButton from "./AddButton";

const style = {
  servingManegeIcon: {
    background: "#9e2821",
    padding: "3px",
    fontSize: "26px",
    color: "white",
    height: "16px",
    display: "flex",
    width: "16px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
  },
};

const RecipesDetails = ({ openDetailDilog }) => {
  var url = window.location.search;
  var pagetitle = url.substring(url.lastIndexOf("=") + 1);
  console.log(pagetitle);
  const [showLoader, setShowLoader] = useState(false);
  const [proceedtobuy, setProceedtobuy] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [ingridients, setIngridients] = useState([]);
  const [numberOfSeaving, setNumberOfSeaving] = useState(1);
  useEffect(() => {
    setShowLoader(true);
    const params = new URLSearchParams(window.location.search);
    axios
      .get(`${get_recipe_detail}/${parseInt(params.get("id"))}`)
      .then((response) => {
        if (response.data.status) {
          setShowLoader(false);
        }
        const recipeDetail = response.data.data;
        if (recipeDetail && recipeDetail.recipeIngridients) {
          setRecipeDetails(recipeDetail);
          setIngridients(recipeDetail.recipeIngridients);
        }
        console.log(parseInt(params.get("id")), recipeDetail);
      });
  }, []);
  const inCreaseNoOfServing = () => {
    setNumberOfSeaving(numberOfSeaving + 1);
  };
  const deCreaseNoOfServing = () => {
    if (numberOfSeaving > 1) {
      setNumberOfSeaving(numberOfSeaving - 1);
    }
  };
  // useEffect(() => {
  // 	setOpen(!open);
  // 	console.log("open", openDetailDilog);
  // }, [openDetailDilog]);
  return (
    <>
      {/* <Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			> */}
      <Header pagetitle={pagetitle} />

      {showLoader ? (
        <div
          style={{
            marginTop: "70px",
            textAlign: "center",
          }}
        >
          <CircularProgress
            style={{ height: "60px", width: "60px", color: "rgb(89, 26, 7)" }}
          />
        </div>
      ) : (
        <>
          <div style={{ marginTop: "50px", background: "white" }}>
            <div
              style={{
                padding: "5px",
                fontFamily: "fantasy",
                fontWeight: 600,
                color: "#4e0202",
              }}
            >
              {recipeDetails.name}
            </div>

            <img
              src={recipeDetails.image}
              alt={recipeDetails.name}
              style={{ width: "100vw" }}
            />
            <div>
              <div
                style={{
                  paddingLeft: "5px",
                  fontSize: "19px",
                  fontWeight: 600,
                }}
              >
                INGRIDIENTS
              </div>
              {ingridients.map((item, index) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                    padding: "10px 11px",
                    borderBottom: "1px solid #80808070",
                  }}
                  key={index}
                >
                  <img
                    src={item.image}
                    alt="ingridients"
                    style={{ width: "40px" }}
                  />
                  {/* <span>{item.name}</span> */}
                  <span style={{ paddingLeft: "20px", fontWeight: 400 }}>
                    {item.amt_for_recipe}
                  </span>
                </div>
              ))}
              <div style={{ textAlign: "center", margin: "16px 0px 13px 0px" }}>
                <button
                  onClick={() => {
                    setProceedtobuy(true);
                  }}
                  style={{
                    backgroundColor: "#9e2121",
                    marginBottom: "5px",
                    marginLeft: "5px",
                    height: "35px",
                    width: "80%",
                    color: "white",
                    border: "none",
                    outline: "none",
                    borderRadius: "5px",
                    fontSize: "15px",
                    margin: "0px 0px",
                  }}
                >
                  BUY INGRIDIENTS
                </button>
              </div>
            </div>
            <div>
              <div
                style={{
                  fontWeight: 500,
                  padding: "5px",
                  borderBottom: "2px solid black",
                  borderTop: "2px solid black",
                  marginTop: "10px",
                  textAlign: "center",
                  fontSize: "18px",
                  fontFamily: "cursive",
                }}
              >
                COOK PROCESS
              </div>
              <div
                style={{
                  padding: "10px",
                  marginBottom: "30px",
                  borderBottom: "1px solid #8080807a",
                }}
              >
                <span style={{ fontWeight: 600 }}>STEP-1</span>
                <br />
                <span>{recipeDetails.cooking_process}</span>
              </div>
            </div>
          </div>
          {proceedtobuy && (
            <div>
              <div>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    fontWeight: 300,
                    fontFamily: "cursive",
                  }}
                >
                  Showing Ingridients
                  <br /> Quanitiy for
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={style.servingManegeIcon}
                    onClick={deCreaseNoOfServing}
                  >
                    -
                  </span>
                  <span style={{ margin: "7px 6px", color: "#9e2821" }}>
                    {numberOfSeaving} Serving
                  </span>
                  <span
                    style={style.servingManegeIcon}
                    onClick={inCreaseNoOfServing}
                  >
                    +
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    background: " rgb(224 224 224 / 41%)",
                    margin: "3px 12px",
                    borderRadius: "10px",
                    padding: "15px",
                  }}
                >
                  <div style={{ marginBottom: "5px" }}>Current Selection</div>
                  <div style={{ marginBottom: "5px", color: "#9e2821" }}>
                    3 items
                  </div>
                  <div
                    style={{
                      width: "-webkit-fill-available",
                      textAlign: "center",
                    }}
                  >
                    <button
                      style={{
                        backgroundColor: "#9e2121",
                        marginBottom: "5px",
                        marginLeft: "5px",
                        height: "35px",
                        width: "60%",
                        color: "white",
                        border: "none",
                        outline: "none",
                        borderRadius: "5px",
                        fontSize: "15px",
                        margin: "0px 0px",
                      }}
                    >
                      ADD TO BASKET
                    </button>
                  </div>
                </div>
              </div>
              {ingridients.map((item, index) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                    padding: "10px 11px",
                    borderBottom: "1px solid #80808070",
                    position: "relative",
                  }}
                  key={index}
                >
                  <Checkbox />
                  <img
                    src={item.image}
                    alt="ingridients"
                    style={{ width: "40px" }}
                  />
                  {/* <span>{item.name}</span> */}
                  <span style={{ paddingLeft: "20px", fontWeight: 400 }}>
                    {item.amt_for_recipe}
                  </span>
                  <span
                    style={{
                      right: 0,
                      position: "absolute",
                      marginRight: "20px",
                    }}
                  >
                    <CustomButton
                      // id={data.product_id}
                      // image={data.image_url}
                      // name={data.product_name}
                      // amount={productAmount}
                      // price={parseInt(productPrice)}
                      width="90px"
                      stage="add"
                    />
                  </span>
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  background: " rgb(224 224 224 / 41%)",
                  margin: "3px 12px",
                  borderRadius: "10px",
                  padding: "15px",
                }}
              >
                <div style={{ marginBottom: "5px" }}>Current Selection</div>
                <div style={{ marginBottom: "5px", color: "#9e2821" }}>
                  3 items
                </div>
                <div
                  style={{
                    width: "-webkit-fill-available",
                    textAlign: "center",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#9e2121",
                      marginBottom: "5px",
                      marginLeft: "5px",
                      height: "35px",
                      width: "60%",
                      color: "white",
                      border: "none",
                      outline: "none",
                      borderRadius: "5px",
                      fontSize: "15px",
                      margin: "0px 0px",
                    }}
                  >
                    ADD TO BASKET
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* </Dialog> */}
    </>
  );
};

export default RecipesDetails;
