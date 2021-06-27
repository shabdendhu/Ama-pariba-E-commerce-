import React, { useState, useEffect } from "react";
import {
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  Checkbox,
  CircularProgress,
} from "@material-ui/core";
import {
  get_product_list,
  get_product_qnt_options,
  get_top_deals,
  site_url,
} from "../../constants/api";
import CloseIcon from "@material-ui/icons/Close";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import axios from "axios";
import CustomButton from "../templet/AddButton";
import { useStateValue } from "../templet/StateProvider";
import { gql, useQuery } from "@apollo/client";
const allTopdeals = gql`
  query {
    get_allTopDeals {
      id
      product_id
      Products {
        id
        name
        # brand_id
        image
        # rating
        # created_by
        # updated_by
        # is_active
        # category {
        # id
        # name
        # created_by
        # updated_by
        # is_active
        # }
        # brand {
        #   id
        #   name
        #   company_name
        #   ratings
        #   created_by
        #   updated_by
        #   is_active
        # }
        qntity {
          id
          quantity
          # product_id
          base_price
          # unit_id
          discount
          # created_by
          # updated_by
          # is_active
          unit {
            id
            full_name
            short_name
            # created_by
            # updated_by
            # is_active
          }
        }
      }
    }
  }
`;
const TopDeal = ({ item }) => {
  // console.log(item.Products.qntity[0].quantity.unit.short_name)
  const [{ basket }] = useStateValue();
  const [productQntOption, setProductQntOption] = useState(
    item.Products.qntity
  );
  const [discount, setDiscount] = useState(item.Products.qntity[0].discount);
  const [productPrice, setProductPrice] = useState(
    `${item.Products.qntity[0].base_price}`
  );
  const [quantityId, setQuantityId] = useState(item.Products.qntity[0].id);
  const [openAmountPicker, setOpenAmountPicker] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState(
    Math.round(
      item.Products.qntity[0].base_price -
        (item.Products.qntity[0].base_price *
          item.Products.qntity[0].discount) /
          100
    )
  );
  const [productAmount, setProductAmount] = useState(
    `${item.Products.qntity[0].quantity}${item.Products.qntity[0].unit.short_name}`
  );
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
  const Item_id = [];
  const Id = [];
  const basketQuantityId = [];
  const BasketIdWithProductId = {};
  basket.forEach((item) => {
    Item_id.push(item.item_id);
    basketQuantityId.push(item.quantityId);
    Id.push(item.id);
  });
  Item_id.forEach(
    (item_id, i) =>
      (BasketIdWithProductId[item_id] = [Id[i], basketQuantityId[i]])
  );
  const result = Object.keys(BasketIdWithProductId).find(
    (key) =>
      JSON.stringify(BasketIdWithProductId[key]) ==
      JSON.stringify([item.Products.id, quantityId])
  );
  const productQntSelected = (items) => {
    if (items.unit) {
      console.log(items);
      setQuantityId(items.id);
      setProductAmount(`${items.quantity}${items.unit.short_name}`);
      setProductPrice(items.base_price);
      setDiscountedPrice(
        Math.round(items.base_price - (items.base_price * items.discount) / 100)
      );
      setDiscount(items.discount);
      setTimeout(() => {
        setOpenAmountPicker(false);
      }, 100);
    }
  };
  useEffect(() => {
    if (openAmountPicker) {
      document.body.style.overflow = "hidden";
    }
    if (!openAmountPicker) {
      document.body.style.overflow = "unset";
    }
  }, [openAmountPicker]);
  let BasketWithSameProduct = [];
  basket.forEach((element) => {
    if (element.id == item.Products.id) {
      BasketWithSameProduct.unshift(element);
    }
  });
  let currentBasketqntyid = {};
  if (BasketWithSameProduct[0] && item.Products.qntity) {
    item.Products.qntity.forEach((element) => {
      if (element.id == BasketWithSameProduct[0].quantityId) {
        currentBasketqntyid = element;
      }
    });
  }
  useEffect(() => {
    setTimeout(() => {
      if (BasketWithSameProduct[0]) {
        if (BasketWithSameProduct[0].quantityId != quantityId) {
          productQntSelected(currentBasketqntyid);
        }
      }
    }, 100);
  }, [basket]);

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
            position: "relative",
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
            src={item.Products.image}
            alt={item.product_name}
            style={{ width: "100px" }}
          />
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
              // productAmtApi();
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
              id={item.Products.id}
              image={item.Products.image_url}
              name={item.Products.product_name}
              amount={productAmount}
              price={parseInt(discountedPrice)}
              width="117px"
              stage="add"
              count={count[item.Products.id]}
              quantityId={quantityId}
              item_id={result}
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
              {item.Products.name}
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
                  {item.quantity} {item.unit.short_name}
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
                      item.base_price - (item.base_price * item.discount) / 100
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
                    checked={quantityId===item.id}
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
  const [showloader, setShowloader] = useState(false);
  const [products, setProducts] = useState([]);
  const { networkStatus, called, loading, data } = useQuery(allTopdeals);
  // useEffect(() => {
  //   setShowloader(true);
  //   axios.get(get_top_deals).then((response) => {
  //     setProducts(response.data.data);
  //     if (response.data.status) {
  //       setShowloader(false);
  //     }
  //     // console.log(response.data.data);
  //   });
  // }, []);
  useEffect(() => {
    setShowloader(true);
    if (networkStatus === 7) {
      console.log("data.get_allTopDeals", data.get_allTopDeals);
      setProducts(data.get_allTopDeals);
      setShowloader(false);
    }
  }, [networkStatus]);
  return (
    <>
      {showloader ? (
        <div style={{ textAlign: "center" }}>
          <CircularProgress />
        </div>
      ) : (
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
            <TopDeal key={index} item={item} />
          ))}
        </div>
      )}

      {/* {loading && */}
      {/* <div style={{ textAlign: "center" }}>
        <CircularProgress style={{ height: 32, width: 32, color: "#168388" }} />
      </div> */}
      {/* } */}
    </>
  );
};
export default TopDeals;
