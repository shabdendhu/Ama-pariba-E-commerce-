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
  Dialog,
  Checkbox,
  Card,
} from "@material-ui/core";
import Productdetails from "../templet/Productdetails";
import { useHistory } from "react-router-dom";

const ProductCard = ({ data }) => {
  const history = useHistory();
  const [openAmountPicker, setOpenAmountPicker] = useState(false);
  const [{ basket }, dispacher] = useStateValue();
  const [productQntOption, setProductQntOption] = useState([]);
  const [discountedPrice, setDiscountedPrice] = useState(data.discounted_price);
  const [productPrice, setProductPrice] = useState(`${data.product_price}`);
  const [productAmount, setProductAmount] = useState(
    `${data.default_amt}${data.unit_quantity}`
  );

  //
  // const [{ basket }, dispatch] = useStateValue();
  // console.log("item", id, image, name, amount);

  const productId = [];
  basket.forEach((item) => {
    productId.push(item.id);
  });
  var count = {};
  productId.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  //

  const productAmtApi = (id) => {
    axios.get(`${get_product_qnt_options}/${id}`).then((response) => {
      let qntydata = response.data;
      if (qntydata.status === true && qntydata.data.length > 0) {
        setProductQntOption(response.data.data);
        setOpenAmountPicker(true);
      }
    });
  };
  const productQntSelected = (item) => {
    setProductAmount(`${item.quantity}${item.short_unit}`);
    setProductPrice(item.price);
    setDiscountedPrice(item.discounted_price);
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
                    width: "100px",
                    // position: "absolute",
                    // margin: "-124px -18px 0px -5px",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "-5px",
                  }}
                >
                  {data.discount}% off
                </div>
                <img
                  onClick={() => {
                    history.push(
                      `/product-details?id=${data.product_id}?name=${data.product_name}`
                    );
                  }}
                  style={{
                    width: "100px",
                    height: "100px",
                    // paddingTop: "13px",
                  }}
                  src={data.image_url}
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
                {data.product_name}
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
              id={data.product_id}
              image={data.image_url}
              name={data.product_name}
              amount={productAmount}
              price={parseInt(productPrice)}
              width="117px"
              stage="add"
              count={count[data.product_id]}
            />
          </div>
        </div>
      </React.Fragment>

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
                // padding: "9px 8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Card
                style={{
                  // border: "1px solid #00e7ff",
                  // background: "gainsboro",
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
              {/* <Card
								style={{
									// border: " 1px solid #00e7ff",
									// background: "gainsboro",
									padding: "5px",
									borderRadius: "4px",
									fontSize: "19px",
									marginBottom: " 10px",
								}}
							>
								<span>{item.option_2}</span>
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
											productQntSelected(item.option_2);
										}}
									/>
								</span>
							</Card> */}
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
