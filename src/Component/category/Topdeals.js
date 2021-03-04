import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  Icon,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  Checkbox,
} from "@material-ui/core";
import { get_product_list, get_product_qnt_options } from "../../constants/api";
import CloseIcon from "@material-ui/icons/Close";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import axios from "axios";
import CustomButton from "../templet/AddButton";
import { useStateValue } from "../templet/StateProvider";
const TopDeal = ({ item }) => {
  const [{ basket }, dispacher] = useStateValue();
  const [productQntOption, setProductQntOption] = useState([]);
  const [productPrice, setProductPrice] = useState(`${item.product_price}`);
  const [openAmountPicker, setOpenAmountPicker] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState(item.discounted_price);
  const [productAmount, setProductAmount] = useState(
    `${item.default_amt}${item.unit_quantity}`
  );
  //
  const productId = [];
  basket.forEach((item) => {
    productId.push(item.id);
  });
  var count = {};
  productId.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  //
  const productQntSelected = (items) => {
    console.log(items);
    setProductAmount(`${items.quantity}${items.short_unit}`);
    setProductPrice(items.price);
    setDiscountedPrice(items.discounted_price);
    setTimeout(() => {
      setOpenAmountPicker(false);
    }, 100);
  };
  const productAmtApi = () => {
    axios
      .get(`${get_product_qnt_options}/${item.product_id}`)
      .then((response) => {
        let qntydata = response.data;
        if (qntydata.status === true && qntydata.data.length > 0) {
          setProductQntOption(response.data.data);
          setOpenAmountPicker(true);
        }
      });
  };
  useEffect(() => {
    if (openAmountPicker) {
      document.body.style.overflow = "hidden";
    }
    if (!openAmountPicker) {
      document.body.style.overflow = "unset";
    }
  }, [openAmountPicker]);
  return (
    <>
      <Card
        style={{
          flexShrink: 0,
          marginRight: "10px",
          padding: "10px",
          maxWidth: "170px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "132px",
          height: "250px",
        }}
      >
        <div
          style={{
            // flex: "3 1 0%",
            border: " 1px solid rgba(128, 128, 128, 0.32)",
            //   margin: "5px 19px 5px 5px",
            padding: "5px",
            borderRadius: "10px",
            background: "rgb(253, 253, 253)",
            boxShadow: "rgb(0 0 0 / 5%) 0px 5px 15px",
            height: "111px",
            width: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {" "}
          <div
            style={{
              background: "green",
              color: "white",
              padding: "3px",
              borderRadius: "0px 0px 45px 45px",
              fontSize: "13px",
              height: "13px",
              width: "100px",
              // position: "absolute",
              // margin: "-124px -18px 0px -5px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-2px",
            }}
          >
            {item.discount}% off
          </div>
          <img src={item.image_url} style={{ width: "100px" }} />
        </div>
        <div
          style={{
            padding: "7px 0px 0px 0px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ fontSize: "17px", paddingBottom: "5px" }}>
            {item.product_name}
          </span>
          <span>
            {" "}
            <del style={{ color: "#5d5b5b", fontSize: "14px" }}>
              ₹{productPrice}
            </del>
            <span style={{ marginLeft: "15px" }}>₹{discountedPrice}</span>
          </span>
          <div
            onClick={() => {
              productAmtApi();
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
              marginTop: "7px",
            }}
          >
            <span
              style={
                {
                  // flex: 1
                }
              }
            >
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
          <div
            style={{
              margin: "10px 0px -5px -5px",
            }}
          >
            <CustomButton
              id={item.product_id}
              image={item.image_url}
              name={item.product_name}
              amount={productAmount}
              price={parseInt(productPrice)}
              width="117px"
              stage="add"
              count={count[item.product_id]}
            />
          </div>
        </div>
      </Card>
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
              {item.product_name}
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
          {productQntOption.map((item, index) => (
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
                  {item.quantity} {item.short_unit}
                  <del
                    style={{
                      marginLeft: "90px",
                      color: "green",
                      fontWeight: 500,
                    }}
                  >
                    ₹{item.price}
                  </del>
                  <span
                    style={{
                      marginLeft: "14px",
                      color: "green",
                      fontWeight: 600,
                    }}
                  >
                    ₹{item.discounted_price}
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

const TopDeals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(get_product_list).then((response) => {
      setProducts(response.data.data);
      console.log(response.data.data);
    });
  }, []);
  return (
    <>
      <div
        className="hide-scroll-bar"
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          width: "100%",
          margin: "10px 0px",
        }}
      >
        {products.map((item, index) => (
          <TopDeal item={item} />
        ))}
      </div>
      {/* {loading && */}
      {/* <div style={{ textAlign: "center" }}>
        <CircularProgress style={{ height: 32, width: 32, color: "#168388" }} />
      </div> */}
      {/* } */}
    </>
  );
};
export default TopDeals;
