import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

import Subtotal from "../../Component/templet/Subtotal";
// import { useStateValue } from "./StateProvider";
import Header from "../../Component/templet/header";
import { useStateValue } from "../../Component/templet/StateProvider";
import { getBasketTotal } from "../../reducer";
import { make_new_order } from "../../constants/api";
import axios from "axios";
import { useState } from "react";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  const [apipauser, setApipauser] = useState(true);
  console.log("basket", basket);
  var unique = [];
  var distinct = [];
  for (let i = 0; i < basket.length; i++) {
    if (!unique[basket[i].id]) {
      distinct.push(basket[i]);
      unique[basket[i].id] = 1;
    }
  }
  const makeOrder = () => {
    basket.forEach((item, index) => {
      if (apipauser === true) {
        setApipauser(false);
        axios
          .post(make_new_order, {
            order_date: new Date(),
            status: "conformed",
            user_id: "1",
            product_id: item.id,
            product_amt: item.amount
          })
          .then(response => {
            if (response.data.status === true) {
              setApipauser(true);
            }
            console.log(response.data.message);
          });
      }
    });
  };
  return (
    <>
      <Header pagetitle="Checkout" />
      <div className="checkout">
        <div className="checkout__left">
          <div>
            {basket.length === 0 ? (
              <div>
                <h2>your basket is empty</h2>
              </div>
            ) : (
              <div>
                {basket.length > 0 && (
                  <div
                  // style={{ position: "fixed" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        height: "32px",
                        padding: "10px",
                        backgroundColor: "#404240e8",
                        borderRadius: "3px",
                        position: "fixed",
                        bottom: "0px",
                        color: "white",
                        width: " -webkit-fill-available"
                      }}
                    >
                      <CurrencyFormat
                        renderText={value => (
                          <div>
                            <span>
                              <b>Subtotal: </b>
                              <span style={{ paddingLeft: "5px" }}>
                                Rs{value}
                              </span>
                              <br />
                              <span>
                                {basket.length}{" "}
                                {basket.length === 1 ? "Item" : "Items"} in your
                                basket
                              </span>
                            </span>
                            <span
                              style={{
                                right: 0,
                                position: "absolute",
                                margin: "-17px 6px 1px"
                              }}
                            >
                              <button
                                onClick={() => {
                                  makeOrder();
                                }}
                                style={{
                                  outline: "none",
                                  border: "none",
                                  background: "#9e2821",
                                  color: "white",
                                  height: "30px",
                                  width: "113px",
                                  borderRadius: "18px",
                                  border: "1px solid white"
                                }}
                              >
                                CHECKOUT
                              </button>
                            </span>
                          </div>
                        )}
                        desimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousendSeparetor={true}
                        prifix={"Rs"}
                      />
                    </div>
                  </div>
                )}
                <h2 className="checkout__title">youre basket</h2>
                {distinct.map((item, index) => (
                  <CheckoutProduct
                    key={index}
                    // count={count}
                    item={item}
                    id={item.id}
                    image={item.image}
                    price={item.price}
                    amount={item.amount}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
