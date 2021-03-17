import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import Header from "../../Component/templet/header";
import { useStateValue } from "../../Component/templet/StateProvider";
import { getBasketTotal } from "../../reducer";
import { get_basket_items, make_new_order } from "../../constants/api";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const EmptyBasketNotication = () => {
  const history = useHistory();
  return (
    <div
      style={{
        background: "#efefef",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "170px",
        flexDirection: "column",
      }}
    >
      <img
        src="emptybasket.png"
        alt="emptybasket_icon"
        style={{ width: "200px", borderRadius: "30px" }}
      />
      <div> YOUR BASKET IS EMPTY</div>
      {/* <div> */}
      <button
        onClick={() => {
          history.push("/");
        }}
        style={{
          backgroundColor: "#9e2121",
          margin: "30px",
          height: "35px",
          width: "50%",
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
        START SHOPPING
      </button>
      {/* </div> */}
    </div>
  );
};

const Checkout = () => {
  const [{ basket }] = useStateValue();
  // const [{ user }] = useStateValue();
  // const isLoggedIn = useSelector((state) => state.authorization.is_loggedin);
  const [apipauser, setApipauser] = useState(true);
  // console.log("basket", basket);
  // var unique = [];
  // var distinct = [];
  // for (let i = 0; i < basket.length; i++) {
  //   if (!unique[basket[i].id]) {
  //     distinct.push(basket[i]);
  //     unique[basket[i].id] = 1;
  //   }
  // }

  console.log(basket);
  const shorteddistinct = basket.sort((a, b) => {
    return a.id - b.id;
  });
  console.log("distinct", shorteddistinct);
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
            product_amt: item.amount,
          })
          .then((response) => {
            if (response.data.status === true) {
              setApipauser(true);
            }
            console.log(response.data.message);
          });
      }
    });
  };
  // useEffect(() => {
  //   axios
  //     .post(get_basket_items, {
  //       user_id: 1,
  //     })
  //     .then((response) => {
  //       console.log("response.data.data.insertId", response.data.data);
  //     });
  // }, []);
  return (
    <>
      <Header pagetitle="My Basket" />
      <div className="checkout">
        <div className="checkout__left">
          <div>
            {basket.length === 0 ? (
              <div>
                <EmptyBasketNotication />
              </div>
            ) : (
              <div style={{ background: "#efefef", marginTop: "50px" }}>
                {basket.length > 0 && (
                  <div
                  // style={{ position: "fixed" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        height: "40px",
                        padding: "10px",
                        paddingBottom: "10px",
                        backgroundColor: "gray",
                        position: "fixed",
                        bottom: 0,
                        color: "white",
                        width: " -webkit-fill-available",
                      }}
                    >
                      <CurrencyFormat
                        renderText={(value) => (
                          <div>
                            <span style={{ paddingBottom: "10px" }}>
                              <b>Subtotal: </b>
                              <span style={{ paddingLeft: "5px" }}>
                                Rs: {value}
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
                                margin: "-17px 6px 1px",
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
                <div
                  style={{
                    background: "white",
                    borderBottom: "1px solid gray",
                    borderTop: "1px solid gray",
                    // paddingBottom: "5px",
                    padding: "5px",
                    textAlign: "center",
                  }}
                >
                  YOUR BASKET
                </div>
                <div style={{ marginBottom: "55px" }}>
                  {shorteddistinct.map((item, index) => (
                    <CheckoutProduct
                      key={item.item_id}
                      // key={index}
                      // count={count}
                      item={item}
                      id={item.id}
                      image={item.image}
                      price={item.price}
                      amount={item.amount}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
