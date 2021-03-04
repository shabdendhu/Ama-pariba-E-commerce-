import { IconButton } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  add_product_to_basket,
  remove_product_from_basket,
} from "../../constants/api";
import { useStateValue } from "../templet/StateProvider";

const CustomButton = ({
  id,
  image,
  name,
  amount,
  price,
  stage,
  count,
  width,
}) => {
  const [{ basket }, dispacher] = useStateValue();
  // console.log("basket", basket);
  const isLoggedIn = useSelector((state) => state.authorization.is_loggedin);
  const [itemAmt, setItemAmt] = useState(0);
  // const AddtoBasketApi = () => {
  // 	axios
  // 		.post(add_product_to_basket, {
  // 			user_id: "23",
  // 			product_id: id,
  // 		})
  // 		.then((response) => {
  // 			console.log(response.data.data.insertId);
  // 		});
  // };
  // const RemoveProductFromBasket = () => {
  // 	axios.post(remove_product_from_basket, {
  // 		id: id,
  // 	});
  // };

  const addToBasket = () => {
    if (isLoggedIn) {
      setItemAmt(itemAmt + 1);
      dispacher({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          image: image,
          name: name,
          amount: amount,
          price: price,
        },
      });
      // AddtoBasketApi();
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
    // RemoveProductFromBasket();
  };
  useEffect(() => {
    // if (stage === "remove") {
    if (count) {
      setItemAmt(count);
    }

    // console.log(name, count);
    // }
  }, [count]);
  return (
    <>
      {/* {itemAmt == 0 ? "this" : itemAmt == -1 ? "" : ""} */}
      {itemAmt == 0 ? (
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
            itemAmt == 1 && stage === "remove" && removeFromBasket();
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
          {itemAmt == 1 && stage === "remove" ? (
            "REMOVE"
          ) : (
            <>
              <IconButton
                style={{ fontSize: "24px", fontWeight: 500, color: "white" }}
                onClick={() => {
                  addToBasket();
                }}
              >
                +
              </IconButton>
              <span style={{ fontSize: "19px", fontWeight: 500 }}>
                {itemAmt}
              </span>
              <IconButton
                style={{ fontSize: "24px", fontWeight: 500, color: "white" }}
                onClick={() => {
                  removeFromBasket();
                }}
              >
                -
              </IconButton>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default CustomButton;
