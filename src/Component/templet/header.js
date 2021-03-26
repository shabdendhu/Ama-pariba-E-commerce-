import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import ArrowbackIcon from "@material-ui/icons/ArrowBack";

import {
  Card,
  IconButton,
  Icon,
  Divider,
  SwipeableDrawer,
  List,
  ListItem,
} from "@material-ui/core";
import { useState } from "react";
import { useStateValue } from "./StateProvider";
import Productfinder from "./Productfinder";
import { useEffect } from "react";
import { userLogout } from "../../actions/authorization";
import { useDispatch } from "react-redux";
import { user_info } from "../../constants/storage-keys";
import { useSelector } from "react-redux";

// import { initialState } from "../../reducer";
const style = {
  topSection: {
    background: "#185c6b", //'#14678e',
    marginTop: "56px",
    padding: "15px 0px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    padding: "0px 10px",
    height: "56px",
  },
  label: {
    fontWeight: 500,
    fontSize: "20px",
    margin: "10px 0px",
  },
  action: {
    width: "100%",
    margin: "0px 3px",
    boxShadow:
      "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
    padding: "9px 10px",
    fontWeight: 500,
    fontSize: "15px",
    color: "#4c4447",
    display: "flex",
    alignItems: "center",
  },
  otherAction: {
    display: "inline-flex",
    flexDirection: "column",
    width: "80px",
    textAlign: "center",
  },
  otherActionIcon: {
    fontSize: "16px",
  },
  otherActionIconButton: {
    height: "40px",
    width: "40px",
    color: "white",
    margin: "0px auto",
  },
  otherActionName: {
    fontSize: "14px",
    fontWeight: 500,
  },
};
const menuStyle = {
  listItem: {
    padding: "10px 15px",
  },
  listItemtext: {
    // marginLeft: "15px",
    fontWeight: 500,
    color: "#5a5353",
  },
  menuicon: {
    fontSize: 20,
    color: "#969696",
  },
};
const Header = ({ pagetitle }) => {
  const history = useHistory();
  const [{ basket }] = useStateValue();
  const is_loggedin = useSelector((state) => state.authorization.is_loggedin);

  const dispatch = useDispatch();

  const [openSearchDilog, setOpenSearchDilog] = useState(false);
  const [openSideNav, setOpenSideNav] = useState(false);

  const logout = () => {
    dispatch(userLogout());
    localStorage.removeItem(user_info);
    setOpenSideNav(false);
    window.location.reload(true);
  };
  useEffect(() => {
    if (openSideNav) {
      document.body.style.overflow = "hidden";
    }
    if (!openSideNav) {
      document.body.style.overflow = "unset";
    }
  }, [openSideNav]);

  return (
    <React.Fragment>
      <div>
        <Card
          style={{
            display: "flex",
            backgroundColor: "#2f8a74",
            color: "white",
            width: "100%",
            position: "fixed",
            zIndex: 99,
            top: 0,
            borderRadius: 0,
          }}
        >
          <div>
            {pagetitle ? (
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={() => {
                  window.history.go("-1");
                }}
              >
                <ArrowbackIcon />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  setOpenSideNav(true);
                }}
              >
                <Icon>
                  <MenuIcon style={{ color: "white" }} />
                </Icon>
              </IconButton>
            )}
          </div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  color: "white",
                }}
                to="/"
              >
                {pagetitle
                  ? pagetitle.length > 15
                    ? `${pagetitle.substring(0, 10)}...`
                    : pagetitle
                  : "ଆମ ପରିବା"}
              </Link>
            </span>
            <span
              style={{
                position: "absolute",
                right: 0,
                margin: "9px 81px 0px 0px",
              }}
              onClick={() => {
                setOpenSearchDilog(!openSearchDilog);
              }}
            >
              <SearchIcon />
            </span>
            <Link
              to="/checkout"
              style={{ color: "white", textDecoration: "none" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "20px",
                  right: 0,
                  position: "absolute",
                  margin: "-11px 16px -1px",
                }}
              >
                <ShoppingBasketIcon />
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
              </div>
            </Link>
          </div>
        </Card>
      </div>
      <div>
        <SwipeableDrawer
          anchor="left"
          open={openSideNav}
          onClose={() => {
            setOpenSideNav(false);
          }}
          onOpen={() => {
            setOpenSideNav(true);
          }}
        >
          <div
            style={{
              // width: "calc(100vw - 173px)",
              width: "100%",
              // padding: "10px",
              height: "-webkit-fill-available",
            }}
          >
            <div
            // style={{ padding: "5px" }}
            >
              <div
                style={{
                  backgroundColor: "rgb(89, 26, 7)",
                  height: "auto",
                  width: "100%",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "center",

                  flexDirection: "column",
                  paddingTop: "7px",
                  // borderRadius: "5px",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: "20px",
                    // marginLeft: "20px",
                  }}
                >
                  ଆମ ପରିବା
                </div>
                {is_loggedin === true && (
                  <div
                    style={{
                      width: "100%",
                      marginTop: "10px",
                      // display: "flex",
                      // justifyContent: "space-around",
                      color: "white",
                      padding: "2px 0px 12px",
                    }}
                  >
                    <span
                      style={{
                        border: "1px solid white",
                        padding: "3px 8px",
                        margin: "10px",
                        width: "60px",
                      }}
                    >
                      Account
                    </span>
                    <span
                      style={{
                        border: "1px solid white",
                        padding: "3px 8px",
                        margin: "10px",
                        width: "60px",
                      }}
                    >
                      Orders
                    </span>
                  </div>
                )}
              </div>

              <List style={{ padding: "5px" }}>
                <ListItem
                  button
                  onClick={() => {
                    history.push("/");
                    setOpenSideNav(false);
                  }}
                  style={menuStyle.listItem}
                >
                  <span style={menuStyle.listItemtext}> Home</span>
                </ListItem>
                <Divider />
                <ListItem
                  button
                  onClick={() => {
                    history.push("/shop-by-category");
                    setOpenSideNav(false);
                  }}
                  style={menuStyle.listItem}
                >
                  <span style={menuStyle.listItemtext}> Shop By Category</span>
                </ListItem>
                <Divider />
                <ListItem
                  button
                  onClick={() => {
                    history.push("/");
                    setOpenSideNav(false);
                  }}
                  style={menuStyle.listItem}
                >
                  <span style={menuStyle.listItemtext}> Need Help</span>
                </ListItem>{" "}
                <Divider />
                <ListItem
                  button
                  onClick={() => {
                    history.push("/login");
                    setOpenSideNav(false);
                  }}
                  style={menuStyle.listItem}
                >
                  <span style={menuStyle.listItemtext}> About Us</span>
                </ListItem>
                <Divider />
                {is_loggedin === true ? (
                  <>
                    <ListItem
                      button
                      onClick={() => {
                        history.push("/my-history");
                        setOpenSideNav(false);
                      }}
                      style={menuStyle.listItem}
                    >
                      <span style={menuStyle.listItemtext}> My History</span>
                    </ListItem>{" "}
                    <Divider />
                    <ListItem
                      button
                      onClick={() => {
                        history.push("/my-account");
                        setOpenSideNav(false);
                      }}
                      style={menuStyle.listItem}
                    >
                      <span style={menuStyle.listItemtext}> My Account</span>
                    </ListItem>{" "}
                    <Divider />
                    <ListItem
                      button
                      onClick={logout}
                      style={menuStyle.listItem}
                    >
                      <span style={menuStyle.listItemtext}> logout</span>
                    </ListItem>
                    <Divider />
                  </>
                ) : (
                  <>
                    {" "}
                    <ListItem
                      button
                      onClick={() => {
                        history.push("/login");
                        setOpenSideNav(false);
                      }}
                      style={menuStyle.listItem}
                    >
                      <span style={menuStyle.listItemtext}> Login</span>
                    </ListItem>
                    <Divider />
                  </>
                )}
              </List>
            </div>
          </div>
        </SwipeableDrawer>
      </div>
      <Productfinder openSearchDilog={openSearchDilog} />
    </React.Fragment>
  );
};

export default withRouter(Header);
