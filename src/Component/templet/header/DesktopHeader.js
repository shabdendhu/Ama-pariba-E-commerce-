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
import { useSelector } from "react-redux";
import { useStateValue } from "../StateProvider";

const SubManue = ({ x }) => {
  const [showList, setShowList] = useState(false);
  const [showStyle,setShowStyle]=useState(false)
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
    e.target.style.color= "green"
    // e.target.style.borderRadius= "5px"
  }
  function revertBackgroung(e) {
    // e.target.style.background= ""
    e.target.style.color= ""
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
            <div style={{ padding: "5px" }}  onMouseEnter={changeBackground} onMouseLeave={revertBackgroung}>
              <span
              >{`${e.name}${x}`}</span>
              <br />
            </div>
          ))}
        </span>
      )}
    </span>
  );
};
const DesktopHeader = () => {
  const is_loggedin = useSelector((state) => state.authorization.is_loggedin);
  const [{ basket }] = useStateValue();
  const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
useEffect(() => {
 console.log("scrollPosition",scrollPosition)
}, [scrollPosition])
  return (
    <div
      style={{
        position: scrollPosition>80?"fixed":'',
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
            Sign in / Sign up
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
      <div
        style={{
          background: "#ececed",
          padding: "5px 20px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
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
      </div>
    </div>
  );
};

export default DesktopHeader;
