import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "./StateProvider";
// import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
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
        width: " -webkit-fill-available",
      }}
    >
      <CurrencyFormat
        renderText={(value) => (
          // <>
          //   <p>
          //     Subtotal ({basket.length} items):
          //     <strong>
          //       <i className="fa fa-inr"></i>
          //       {value}
          //     </strong>
          //   </p>
          // </>
          <div>
            <span>
              <b>Subtotal: </b>
              <span style={{ paddingLeft: "5px" }}>Rs{value}</span>
              <br />
              <span>
                {basket.length} {basket.length === 1 ? "Item" : "Items"} in your
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
              {" "}
              <button
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
  );
}

export default Subtotal;
