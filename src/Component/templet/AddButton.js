import { CircularProgress, IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import { useSelector } from "react-redux";
import axios from "axios";
import { useStateValue } from "../templet/StateProvider";
import {
  add_product_to_basket,
  remove_product_from_basket,
} from "../../constants/api";

const CustomButton = ({
  id,
  image,
  name,
  amount,
  price,
  stage,
  count,
  width,
  item_id,
}) => {
  const [{ basket }, dispacher] = useStateValue();
  // console.log("basket", basket);
  const [showLoader, setShowLoader] = useState(false);
  const user_info = useSelector((state) => state.authorization.user_info);
  const [basketItemId, setBasketItemId] = useState(item_id);
  const isLoggedIn = useSelector((state) => state.authorization.is_loggedin);
  const [itemAmt, setItemAmt] = useState(0);
  const AddtoBasketApi = () => {
    setShowLoader(true);
    axios
      .post(add_product_to_basket, {
        user_id: user_info.id,
        product_id: id,
        product_qnt: amount,
        product_price: price,
        // product_count: "7",
        product_name: name,
        image_url: image,
      })
      .then((response) => {
        console.log(response.data.data);
        const AddResponse = response.data.data;
        // setBasketItemId(AddResponse.id);
        dispacher({
          type: "ADD_TO_BASKET",
          item: {
            id: AddResponse.product_id,
            image: AddResponse.image_url,
            name: AddResponse.product_name,
            amount: AddResponse.product_qnt,
            price: AddResponse.product_name,
            item_id: AddResponse.id,
          },
        });
        if (response.data.status) {
          setShowLoader(false);
        }
      });
  };
  const RemoveProductFromBasket = () => {
    // alert(item_id);
    setShowLoader(true);

    axios
      .post(remove_product_from_basket, {
        // product_id: id,
        // product_qnt: parseInt(amount),
        // user_id: user_info[0].id,
        item_id: item_id,
      })
      .then((response) => {
        if (response.data.status) {
          setShowLoader(false);
        }
        // console.log(response.data.data);
      });
  };

  const addToBasket = () => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      setItemAmt(itemAmt + 1);
      // dispacher({
      //   type: "ADD_TO_BASKET",
      //   item: {
      //     id: id,
      //     image: image,
      //     name: name,
      //     amount: amount,
      //     price: price,
      //     // item_id: item_id,
      //   },
      // });
      AddtoBasketApi();
    } else {
      window.location.href = "/login";
    }
  };
  const removeFromBasket = () => {
    setItemAmt(itemAmt - 1);
    dispacher({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
    RemoveProductFromBasket();
  };
  useEffect(() => {
    // if (stage === "remove") {
    if (count) {
      setItemAmt(count);
    }

    // console.log(name, count);
    // }
  }, [count]);
  useEffect(() => {
    setBasketItemId(item_id);
  }, [item_id]);
  return (
    <>
      {/* {itemAmt == 0 ? "this" : itemAmt == -1 ? "" : ""} */}
      {itemAmt === 0 ? (
        <button
          onClick={stage === "add" ? addToBasket : removeFromBasket}
          style={{
            backgroundColor: "#9e2121",
            marginBottom: "5px",
            marginLeft: "5px",
            height: "35px",
            width: width,
            color: "white",
            border: "none",
            outline: "none",
            borderRadius: "5px",
            fontSize: "15px",
          }}
        >
          {stage === "add" ? "ADD" : "REMOVE"}
        </button>
      ) : (
        <div
          onClick={() => {
            itemAmt === 1 && stage === "remove" && removeFromBasket();
          }}
          style={{
            backgroundColor: "#9e2121",
            marginBottom: "5px",
            marginLeft: "5px",
            height: "35px",
            width: width,
            color: "white",
            border: "none",
            outline: "none",
            borderRadius: "5px",
            fontSize: "17px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {itemAmt === 1 && stage === "remove" ? (
            "REMOVE"
          ) : (
            <>
              <IconButton
                style={{ fontSize: "24px", fontWeight: 500, color: "white" }}
                onClick={() => {
                  addToBasket();
                }}
              >
                <Add />
              </IconButton>
              <span style={{ fontSize: "19px", fontWeight: 500 }}>
                {showLoader ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress
                      style={{ width: "25px", height: "25px", color: "white" }}
                    />
                  </div>
                ) : (
                  <span>{itemAmt}</span>
                )}
              </span>
              <IconButton
                style={{ fontSize: "24px", fontWeight: 500, color: "white" }}
                onClick={() => {
                  removeFromBasket();
                }}
              >
                <Remove />
              </IconButton>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default CustomButton;
