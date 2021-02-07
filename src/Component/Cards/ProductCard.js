import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useStateValue } from "../templet/StateProvider";
import CustomButton from "../templet/AddButton";
import { get_product_list, get_product_qnt_options } from "../../constants/api";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Dialog,
  Icon,
  IconButton,
  Checkbox,
  Card
} from "@material-ui/core";

const ProductCard = ({ data }) => {
  const [openAmountPicker, setOpenAmountPicker] = useState(false);
  const [{ basket }, dispacher] = useStateValue();
  const [productQntOption, setProductQntOption] = useState([]);
  const [productAmount, setProductAmount] = useState(
    `${data.default_amt}${data.unit_quantity}`
  );
  // const [itemAmt, setItemAmt] = useState(0);
  // const addToBasket = () => {
  //   setItemAmt(itemAmt + 1);
  //   dispacher({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id: id,
  //       image: image,
  //       name: name,
  //       amount: amount,
  //       price: price
  //     }
  //   });
  // };
  // const removeFromBasket = () => {
  //   setItemAmt(itemAmt - 1);
  //   dispacher({
  //     type: "REMOVE_FROM_BASKET",
  //     id: id
  //   });
  // };
  const productAmtApi = id => {
    axios.get(`${get_product_qnt_options}/${id}`).then(response => {
      let qntydata = response.data;
      if (qntydata.status === true && qntydata.data.length > 0) {
        setProductQntOption(response.data.data);
        setOpenAmountPicker(true);
      }
    });
  };
  const productQntSelected = item => {
    setProductAmount(item);
    setTimeout(() => {
      setOpenAmountPicker(false);
    }, 300);
  };
  return (
    <>
      <div
        style={{
          borderBottom: "1px solid #80808052",
          background: "rgb(249 249 249)"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            marginBottom: "5px"
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
                boxShadow: "0 5px 15px rgba(0,0,0,.05)"
              }}
            >
              <img
                style={{ width: "100px", height: "100px" }}
                src={data.image_url}
              />
            </div>
          </div>
          <div
            style={{
              flex: 2,
              display: "flex",
              flexDirection: "column",
              height: "100px"
            }}
          >
            <div
              style={{
                flex: 1,
                paddingLeft: "7px",
                fontSize: "18px",
                fontFamily: "ProximaNova-Regular"
              }}
            >
              {data.product_name}
            </div>
            <div
              style={{
                flex: 1
              }}
            >
              <div
                onClick={() => {
                  productAmtApi(data.product_id);
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
                  justifyContent: "center"
                }}
              >
                <span style={{ flex: 1 }}>{productAmount}</span>
                <span
                  style={{
                    flex: 1,
                    textAlign: "end",
                    paddingRight: "8px"
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
                margin: "4px"
              }}
            >
              <span>₹{data.product_price}</span>
            </div>
          </div>
        </div>
        <div
          style={{ float: "right", marginTop: "-44px", marginRight: "14px" }}
        >
          <CustomButton
            id={data.product_id}
            image={data.image_url}
            name={data.product_name}
            amount={productAmount}
            price={data.product_price}
            stage="add"
          />
        </div>
      </div>
      <Dialog
        fullWidth={true}
        onClose={() => {
          setOpenAmountPicker(false);
        }}
        // aria-labelledby="customized-dialog-title"
        open={openAmountPicker}
        // style={{ width: "fit-" }}
      >
        <DialogTitle
          // id="customized-dialog-title"
          style={{ borderBottom: "1px solid gray", padding: "7px" }}
          onClose={() => {
            setOpenAmountPicker(false);
          }}
        >
          <div
            style={{
              position: "relative",

              paddingLeft: "18px"
            }}
          >
            <span
              style={{
                fontSize: " 24px",
                fontWeight: 600,
                fontFamily: "auto",
                color: "#a70606"
              }}
            >
              {data.product_name}
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
                display: "flex"
              }}
            >
              <CloseIcon />
            </span>
          </div>
        </DialogTitle>
        <DialogContent style={{ padding: "9px 8px" }}>
          {productQntOption.map((item, index) => (
            <div
              style={{
                // padding: "9px 8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <Card
                style={{
                  // border: "1px solid #00e7ff",
                  background: "gainsboro",
                  padding: "5px",
                  borderRadius: "4px",
                  fontSize: "19px",
                  marginBottom: " 10px"
                }}
              >
                <span>{item.option_1}</span>
                <span
                  style={{
                    right: 0,
                    position: "absolute",
                    margin: "-1px 15px 0px 0px"
                  }}
                >
                  <Checkbox
                    style={{ padding: "0px" }}
                    onClick={() => {
                      productQntSelected(item.option_1);
                    }}
                  />
                </span>
              </Card>
              <Card
                style={{
                  // border: " 1px solid #00e7ff",
                  background: "gainsboro",
                  padding: "5px",
                  borderRadius: "4px",
                  fontSize: "19px",
                  marginBottom: " 10px"
                }}
              >
                <span>{item.option_2}</span>
                <span
                  style={{
                    right: 0,
                    position: "absolute",
                    margin: "-1px 15px 0px 0px"
                  }}
                >
                  <Checkbox
                    style={{ padding: "0px" }}
                    onClick={() => {
                      productQntSelected(item.option_2);
                    }}
                  />
                </span>
              </Card>
            </div>
          ))}
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus color="primary">
            More Options
          </Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
};

export default ProductCard;
