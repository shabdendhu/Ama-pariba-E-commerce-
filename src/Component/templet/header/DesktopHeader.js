import { Icon } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useStateValue } from "../StateProvider";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import TooltipOption from "./TooltipOption";
import { useHistory } from "react-router-dom";
const style = {
  shadowHeader: {
    height: "75px",
    WebkitBoxShadow: "0 8px 24px 0 rgb(23 50 101 / 30%)",
    display: "flex",
    alignItems: "center",
    padding: "0px 15px",
    background: "white",
    position: "fixed",
    width: "100%",
    zIndex: 99,
    top: 0,
  },
  nonShadowheader: { height: "75px" },
  logo: {
    height: "30px",
    margin: "0px 70px 0px 0px",
    cursor: "pointer",
  },
  headerOption: {
    fontWeight: "500",
    marginRight: "32px",
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
  },
  interestBotton: {
    border: "none",
    outline: "none",
    background: "#860090",
    width: "140px",
    height: "33px",
    borderRadius: "8px",
    color: "white",
    fontSize: "16px",
    padding: "5px",
    position: "absolute",
    right: "20px",
    cursor: "pointer",
  },
  login: {
    fontWeight: "500",
    position: "absolute",
    right: "200px",
  },
};
const options = {
  allProducts: [
    "Life Insuranse",
    "Health Insuranse",
    "Bike Insuranse",
    "Car Insuranse",
    "business Insurance",
  ],
  contacts: [
    "Home Loan",
    "Business Loan",
    "House Loan",
    "Bike Loan",
    "Car Loan",
  ],
  support: ["Founders", "Need Help", "About Us", "Our Partners"],
};
const menuOptions = [
  {
    name: "Insuranse",
    children: options.allProducts,
  },
  {
    name: "Loans",
    children: options.contacts,
  },
  {
    name: "Support",
    children: options.support,
  },
];
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));
const SubManue = ({ x }) => {
  const [showList, setShowList] = useState(false);
  const [showStyle, setShowStyle] = useState(false);
  const data = [
    { name: "Product link" },
    { name: "Product link" },
    { name: "Product link" },
    { name: "Product link" },
    { name: "Product link" },
    { name: "Product link" },
    { name: "Product link" },
    { name: "Product link" },
    { name: "Product link" },
  ];
  function changeBackground(e) {
    // e.target.style.background= "white"
    e.target.style.color = "green";
    // e.target.style.borderRadius= "5px"
  }
  function revertBackgroung(e) {
    // e.target.style.background= ""
    e.target.style.color = "";
    // e.target.style.borderRadius= ""
  }
  return (
    <span
      onMouseEnter={() => {
        setShowList(true);
      }}
      onMouseLeave={() => {
        setShowList(false);
      }}
      style={{ display: "flex", position: "relative", cursor: "pointer" }}
    >
      <span style={{ fontSize: "15px", fontWeight: 500, color: "black" }}>
        Fruits
      </span>
      {showList ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
      {showList && (
        <span
          // onMouseEnter={() => {
          //   setShowList(true);
          // }}
          // onMouseLeave={() => {
          //   setShowList(false);
          // }}
          style={{
            height: "fit-content",
            width: "200px",
            position: "absolute",
            background: "#ececed",
            padding: "10px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          {data.map((e) => (
            <div
              style={{ padding: "5px" }}
              onMouseEnter={changeBackground}
              onMouseLeave={revertBackgroung}
            >
              <span>{`${e.name}${x}`}</span>
              <br />
            </div>
          ))}
        </span>
      )}
    </span>
  );
};
const DesktopHeader = () => {
  const history = useHistory();
  const is_loggedin = useSelector((state) => state.authorization.is_loggedin);
  const [{ basket }] = useStateValue();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    console.log("scrollPosition", scrollPosition);
  }, [scrollPosition]);
  return (
    <div
      style={{
        position: scrollPosition > 80 ? "fixed" : "",
        zIndex: 99,
        width: "-webkit-fill-available",
        top: 0,
      }}
    >
      {/* header */}
      <div style={{ background: "#2f8a74" }}>
        <div
          style={{
            background: "#2f8a74",
            height: "72px",
            display: "flex",
            alignItems: "center",
            maxWidth: "1300px",
            margin: "auto",
          }}
        >
          {/* manu  Icon */}
          <span style={{ flex: 1 }}>
            <Icon style={{ margin: "0px 31px 0px 31px" }}>
              <MenuIcon style={{ color: "white", fontSize: "40px" }} />
            </Icon>
          </span>
          {/* Logo */}
          <span style={{ margin: "0px -18px 0px 0px", flex: 1 }}>
            <img src="apple.png" style={{ height: "40px" }} />
          </span>
          <span
            style={{
              background: "white",
              width: "410px",
              height: "40px",
              borderRadius: "8px",
              display: "flex",
              padding: "0px 10px",
              alignItems: "center",
              flex: 5,
            }}
          >
            {/* search */}
            <span style={{ flex: "4" }}>
              {/* input */}
              <input
                placeholder="Search With Product Name and more ..."
                style={{
                  height: "38px",
                  width: "353px",
                  border: "none",
                  outline: "none",
                  fontSize: "17px",
                  fontWeight: 400,
                }}
              />
            </span>
            <span style={{ paddingLeft: "25px", display: "flex" }}>
              <FormatListBulletedIcon />
            </span>
          </span>
          <span
            style={{
              flex: 3,
              display: "flex",
              justifyContent: "center",
              color: "white",
              alignItems: "center",
            }}
          >
            {/* signup */}
            <PersonIcon style={{ fontSize: "30px" }} />
            <span
              onClick={() => {
                history.push("/login");
              }}
            >
              Sign in
            </span>{" "}
            /{" "}
            <span
              onClick={() => {
                history.push("/login");
              }}
            >
              Sign up
            </span>
            <span style={{ margin: "14px 0px 0px 23px" }}>
              <Link
                to="/checkout"
                style={{ color: "white", textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "20px",
                    //   right: 0,
                    //   position: "absolute",
                    margin: "-11px 16px -1px",
                  }}
                >
                  {is_loggedin && (
                    <>
                      <ShoppingCartIcon />
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: 800,
                          marginLeft: "10px",
                          marginRight: "10px",
                        }}
                      >
                        {basket.length}
                      </span>
                    </>
                  )}
                </div>
              </Link>
            </span>
          </span>
        </div>
      </div>
      {/* manue options */}
      {/* <div
        style={{
          background: "white",
          padding: "5px 20px",
          display: "flex",
          justifyContent: "space-around",
          boxShadow:
            scrollPosition > 80
              ? "0px 4px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
              : "",
          marginBottom: "20px",
        }}
      >
        {menuOptions.map((e, i) => (
          <HtmlTooltip key={i} title={<TooltipOption options={e.children} />}>
            <span style={style.headerOption}>
              {e.name} <ArrowDropDownIcon />
            </span>
          </HtmlTooltip>
        ))}
         <SubManue x={1} />
        <SubManue x={2} />
        <SubManue x={3} />
        <SubManue x={4} />
        <SubManue x={5} />
        <SubManue x={6} />
        <SubManue x={7} />
        <SubManue x={8} />
        <SubManue x={9} />
        <SubManue x={10} />
        <SubManue x={11} /> 
      </div> */}
    </div>
  );
};

export default DesktopHeader;
