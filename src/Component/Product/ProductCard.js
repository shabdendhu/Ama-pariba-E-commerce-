import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useStateValue } from "../templet/StateProvider";
import CustomButton from "../templet/AddButton";
import { get_product_qnt_options, site_url } from "../../constants/api";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import {
  DialogTitle,
  DialogContent,
  Dialog,
  Checkbox,
  Card,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const ProductCard = ({ data }) => {
  // console.log("productCard", data);
  const history = useHistory();

  const defaultData = data.Quantity[0] ? data.Quantity[0] : { Unit: {} };
  const [openAmountPicker, setOpenAmountPicker] = useState(false);
  const [{ basket }] = useStateValue();
  // const [productQntOption, setProductQntOption] = useState([]);
  const [discount, setDiscount] = useState(defaultData.discount);
  const [discountedPrice, setDiscountedPrice] = useState(
    Math.round(
      defaultData.base_price -
        (defaultData.base_price * defaultData.discount) / 100
    )
  );
  const [quantityId, setQuantityId] = useState(defaultData.id);
  const [productPrice, setProductPrice] = useState(`${defaultData.base_price}`);
  const [productAmount, setProductAmount] = useState(
    `${defaultData.quantity}${defaultData.Unit.short_name}`
  );
  // const discount=0
  // data.Quantity.forEach((element, index) => {
  //   if (element) {
  //     discount < element.discount && setDiscount(element.discount);
  //   }
  // });
  const productId = [];
  const productAmt = [];
  basket.forEach((item) => {
    productId.push(item.id);
    productAmt.push(item.amount);
  });
  var count = {};
  productId.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  console.log("basket", basket);
  // console.log("countFrom productCard",count[data.id])
  //logic to get the item_id from basket if the product_id existt
  const Item_id = [];
  const Id = [];
  const basketQuantityId = [];
  const BasketIdWithProductId = {};
  basket.forEach((item) => {
    Item_id.push(item.item_id);
    // console.log("item",item);
    basketQuantityId.push(item.quantityId);
    Id.push(item.id);
  });
  // console.log("Item_id", Item_id);
  // Item_id.forEach((item_id, i) => {console.log("itemid",item_id, i)});

  // for (let i = 0; i < Id.length; i++) {
  // BasketIdWithProductId[Id[i]] = Item_id[i];
  Item_id.forEach(
    (item_id, i) =>
      (BasketIdWithProductId[item_id] = [Id[i], basketQuantityId[i]])
  );

  // console.log("BasketIdWithProductId",BasketIdWithProductId,Item_id,basket)
  // }
  const result = Object.keys(BasketIdWithProductId).find(
    (key) =>
      JSON.stringify(BasketIdWithProductId[key]) ==
      JSON.stringify([data.id, quantityId])
  );

  // console.log("resultFrom productCard", result);
  const productQntSelected = (item) => {
    setQuantityId(item.id);
    setDiscount(item.discount);
    setProductAmount(`${item.quantity}${item.Unit.short_name}`);
    setProductPrice(`${defaultData.base_price}`);
    setDiscountedPrice(
      Math.round(item.base_price - (item.base_price * item.discount) / 100)
    );
    setTimeout(() => {
      setOpenAmountPicker(false);
    }, 100);
  };
  useEffect(() => {
    if (openAmountPicker) {
      document.body.style.overflow = "hidden";
    }
    if (!openAmountPicker) {
      document.body.style.overflow = "unset";
    }
  }, [openAmountPicker]);
  useEffect(() => {
   alert("basket")
  }, [basket])
  return (
    <>
      <React.Fragment>
        <div
          style={{
            borderBottom: "1px solid #80808052",
            background: "rgb(249 249 249)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "10px",
              marginBottom: "5px",
            }}
          >
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  flex: " 3 1 0%",
                  border: "1px solid rgba(128, 128, 128, 0.32)",
                  margin: "5px",
                  padding: "5px",
                  borderRadius: "10px",
                  marginRight: "19px",
                  background: "rgb(253, 253, 253)",
                  boxShadow: "0 5px 15px rgba(0,0,0,.05)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    background: "green",
                    color: "white",
                    padding: "3px",
                    borderRadius: "0px 0px 45px 45px",
                    fontSize: "13px",
                    height: "13px",
                    width: "95px",
                    // position: "absolute",
                    // margin: "-124px -18px 0px -5px",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: 0,
                  }}
                >
                  {discount}% off
                </div>
                <img
                  onClick={() => {
                    history.push(
                      `/product-details?id=${data.id}?name=${data.name}`
                    );
                  }}
                  style={{
                    width: "100px",
                    height: "100px",
                    // paddingTop: "13px",
                  }}
                  alt={data.name}
                  src={data.image}
                />
              </div>
            </div>
            <div
              style={{
                flex: 2,
                display: "flex",
                flexDirection: "column",
                height: "100px",
              }}
            >
              <div
                style={{
                  // flex: 1,
                  paddingLeft: "7px",
                  fontSize: "18px",
                  fontFamily: "ProximaNova-Regular",
                  margin: "9px 0px",
                }}
              >
                {data.name}
              </div>
              <div
                style={
                  {
                    // flex: 1,
                  }
                }
              >
                <div
                  onClick={() => {
                    setOpenAmountPicker(true);
                  }}
                  style={{
                    borderRadius: "5px",
                    border: "1px solid #0080003b",
                    padding: "2px 0px 2px 6px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    fontSize: "15px",
                    height: "25px",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={
                      {
                        // flex: 1
                      }
                    }
                  >
                    {/* {data.Quantity[0]
                      ? `${data.Quantity[0].quantity} ${data.Quantity[0].Unit.short_name}`
                      : ``} */}
                    {productAmount}
                  </span>
                  <span
                    style={{
                      flex: 1,
                      textAlign: "end",
                      paddingRight: "8px",
                    }}
                  >
                    <KeyboardArrowDownIcon style={{ fontSize: "15px" }} />
                  </span>
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  width: "fit-content",
                  height: " fit-content",
                  margin: "4px",
                  marginTop: "8px",
                }}
              >
                <del>₹{productPrice}</del>
                <span style={{ marginLeft: "15px" }}>₹{discountedPrice}</span>
              </div>
            </div>
          </div>
          <div
            style={{ float: "right", marginTop: "-44px", marginRight: "14px" }}
          >
            <CustomButton
              id={data.id}
              image={data.image}
              name={data.name}
              amount={productAmount}
              price={parseInt(discountedPrice)}
              width="117px"
              stage="add"
              count={count[data.id]}
              quantityId={quantityId}
              item_id={result}
            />
          </div>
        </div>
      </React.Fragment>

      <Dialog
        fullWidth={true}
        onClose={() => {
          setOpenAmountPicker(false);
        }}
        open={openAmountPicker}
      >
        <DialogTitle
          style={{ borderBottom: "1px solid gray", padding: "7px" }}
          onClose={() => {
            setOpenAmountPicker(false);
          }}
        >
          <div
            style={{
              position: "relative",

              paddingLeft: "18px",
            }}
          >
            <span
              style={{
                fontSize: " 24px",
                fontWeight: 600,
                fontFamily: "auto",
                color: "#a70606",
              }}
            >
              {data.name}
            </span>
            <span
              onClick={() => {
                setOpenAmountPicker(false);
              }}
              style={{
                position: "fixed",
                right: 0,
                border: "1px solid #a7a3a3",
                margin: "-57px 20px 0px 0px",
                borderRadius: "15px",
                padding: "1px",
                background: "white",
                display: "flex",
              }}
            >
              <CloseIcon />
            </span>
          </div>
        </DialogTitle>
        <DialogContent style={{ padding: "9px 8px" }}>
          {data.Quantity &&
            data.Quantity.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Card
                  style={{
                    padding: "5px",
                    borderRadius: "4px",
                    fontSize: "19px",
                    marginBottom: " 10px",
                  }}
                >
                  <span>
                    {item.quantity} {item.Unit.short_name}
                    <del
                      style={{
                        marginLeft: "90px",
                        color: "green",
                        fontWeight: 500,
                      }}
                    >
                      ₹{item.base_price}
                    </del>
                    <span
                      style={{
                        marginLeft: "14px",
                        color: "green",
                        fontWeight: 600,
                      }}
                    >
                      ₹
                      {Math.round(
                        item.base_price -
                          (item.base_price * item.discount) / 100
                      )}
                    </span>
                  </span>
                  <span
                    style={{
                      right: 0,
                      position: "absolute",
                      margin: "-1px 15px 0px 0px",
                    }}
                  >
                    <Checkbox
                      style={{ padding: "0px" }}
                      onClick={() => {
                        productQntSelected(item);
                      }}
                    />
                  </span>
                </Card>
              </div>
            ))}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
