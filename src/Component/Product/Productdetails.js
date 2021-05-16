// import  from "react";
import React, { useState, useEffect } from "react";
import { Checkbox, Dialog, Slide } from "@material-ui/core";
import Header from "../templet/header";
import CustomButton from "../templet/AddButton";
import { get_product_details } from "../../constants/api";
import axios from "axios";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Productdetails = ({ openDetailDilog }) => {
  var url = window.location.search;
  var pagetitle = url.substring(url.lastIndexOf("=") + 1);
  const [productsDetails, setProductsDetails] = useState([]);
  const [packsize, setPackSize] = useState([]);
  const [productPrice, setproductPrice] = useState(0);
  const [productAmount, setProductAmount] = useState("");
  const [selectedCheckBox, setSelectedCheckBox] = useState();
  const [productForBasket, setProductForBasket] = useState({
    productId: "",
    image: "",
    name: "",
  });
  const basketoperation = ({ product }) => {
    setProductForBasket({
      ...productForBasket,
      productId: product.product_id,
      image: product.image_url,
      name: product.product_name,
      // amount: product.,
      // price: product,
    });
  };
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    axios
      .get(`${get_product_details}/${parseInt(params.get("id"))}`)
      .then((response) => {
        const details = response.data.data;
        if (details && details.pack_size) {
          let product = response.data.data.product;
          setProductsDetails(response.data.data.product);
          setPackSize(response.data.data.pack_size);
          setproductPrice(product.product_price);
          setProductAmount(`${product.default_amt}${product.unit_quantity}`);
          basketoperation({ product });
        }
      });
    // eslint-disable-next-line
  }, []);

  return (
    <Dialog
      fullScreen
      open={true}
      // onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Header pagetitle={pagetitle} />
      <div style={{ marginTop: "50px", background: "white" }}>
        <div
          style={{
            padding: "5px",
            fontFamily: "fantasy",
            fontWeight: 600,
            color: "#4e0202",
          }}
        >
          {productsDetails.product_name}
        </div>
        <div
          style={{
            paddingLeft: "5px",
            fontWeight: 600,
            margin: "0PX 1px 5px 3px",
          }}
        >
          ₹{productPrice} / {productAmount}
        </div>
        <img
          src={productsDetails.image_url}
          alt={productsDetails.product_name}
          style={{ width: "100vw" }}
        />
        <div>
          <div style={{ paddingLeft: "5px" }}>Pake Size</div>
          {packsize.map((item, index) => (
            <div
              key={item.id}
              onClick={() => {
                setproductPrice(item.price);
                setProductAmount(`${item.quantity}${item.short_unit}`);
                setSelectedCheckBox(item.id);
              }}
              style={{
                // padding: "9px 8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  padding: "15px",
                  borderRadius: "4px",
                  fontSize: "18px",
                  marginBottom: "10px",
                  border: "1px solid rgba(0, 128, 0, 0.45)",
                  margin: "5px",
                }}
              >
                <span>
                  {item.quantity}/{item.short_unit}
                  <span
                    style={{
                      marginLeft: "134px",
                      color: "green",
                      fontWeight: 400,
                    }}
                  >
                    ₹{item.price}
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
                    checked={selectedCheckBox === item.id}
                    style={{ padding: "0px" }}
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div
            style={{
              /* margin-bottom: 5px; */ fontWeight: 500,
              padding: "5px",
              borderBottom: "2px solid black",
              borderTop: "2px solid black",
              marginTop: "10px",
              textAlign: "center",
              fontSize: "18px",
            }}
          >
            About Product
          </div>
          <div style={{ padding: "10px" }}>{productsDetails.about_product}</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomButton
            id={productForBasket.productId}
            image={productForBasket.image}
            name={productForBasket.name}
            amount={productAmount}
            price={parseInt(productPrice)}
            width="80%"
            stage="add"
          />
        </div>
      </div>
    </Dialog>
  );
};

export default Productdetails;
