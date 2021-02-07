import React from "react";
import "./login.css";
// import { Link } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Header from "../templet/header";
import Axios from "axios";
import { setLoggedinUserInfo } from "../../actions/authentication";
import { userinfo } from "../../constants/storage_keys";
import { Snackbar, IconButton, Icon } from "@material-ui/core";

const Login = () => {
  const [error, setError] = useState({ hasError: false, message: "" });
  // const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    mobile_no: "",
    password: ""
  });
  const SignIn = () => {
    Axios.post("http://localhost:9000/customer-app/get-users-details", {
      mobile_no: userDetails.mobile_no,
      password: userDetails.password
    }).then(response => {
      if (response.data.status) {
        localStorage.setItem(userinfo, JSON.stringify(response.data.data));
        window.location.href = "/";
        // dispatch(
        //   setLoggedinUserInfo({
        //     is_loggedin: true,
        //     user_info: response.data.data
        //   })
        // );
      } else {
        setError({ hasError: true, message: response.data.message });
      }
      console.log(response);
    });
  };
  const resister = () => {
    Axios.post("http://localhost:9000/customer-app/register-new-user", {
      mobile_no: userDetails.mobile_no,
      password: userDetails.password
    }).then(response => {
      if (response.data.status) {
        localStorage.setItem(userinfo, JSON.stringify(response.data.data));
        window.location.href = "/";
        // dispatch(
        //   setLoggedinUserInfo({
        //     is_loggedin: true,
        //     user_info: response.data.data
        //   })
        // );
      } else {
        setError({ hasError: true, message: response.data.message });
      }
    });
  };

  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: "white",
          marginTop: "90px",
          width: "-webkit-fill-available"
        }}
      >
        <div
          style={{
            fontSize: " 23px",
            color: "rgb(47 138 116)",
            marginBottom: "45px",
            textAlign: "center"
          }}
        >
          Create an account
          <br />
          <small>OR</small>
          <br />
          Login
        </div>
        <div style={{ textAlign: "center", width: "-webkit-fill-available" }}>
          <div
            style={{ textAlign: "left", margin: "-5px 28px", fontSize: "17px" }}
          >
            Mobile No
          </div>
          <input
            style={{
              width: "-webkit-fill-available",
              border: "none",
              background: "#80808054",
              outline: "none",
              borderRadius: "22px",
              height: "39px",
              fontSize: "17px",
              padding: "0px 18px 1px 18px",
              margin: "10px 18px"
            }}
            value={userDetails.mobile_no}
            onChange={e =>
              setUserDetails({ ...userDetails, mobile_no: e.target.value })
            }
            type="text"
          />
        </div>
        <div
          style={{
            textAlign: "center",
            width: "-webkit-fill-available",
            marginTop: "20px"
          }}
        >
          <div
            style={{ textAlign: "left", margin: "-5px 28px", fontSize: "17px" }}
          >
            Password
          </div>
          <input
            style={{
              width: "-webkit-fill-available",
              border: "none",
              background: "#80808054",
              outline: "none",
              borderRadius: "22px",
              height: "39px",
              fontSize: "17px",
              padding: "0px 18px 1px 18px",
              margin: "10px 18px"
            }}
            value={userDetails.password}
            onChange={e =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "40px"
          }}
        >
          <button
            style={{
              width: "80%",
              border: "none",
              background: "#00b186",
              height: "35px",
              borderRadius: "10px",
              color: "white",
              fontSize: "19px",
              fontWeight: 700,
              marginBottom: "10px",
              outline: "none"
            }}
            onClick={() => {
              SignIn();
            }}
          >
            log In
          </button>
          <button
            style={{
              width: "80%",
              border: "none",
              background: "#0e8a45",
              height: "35px",
              borderRadius: "10px",
              color: "white",
              fontSize: "19px",
              fontWeight: 700,
              outline: "none"
            }}
            onClick={() => {
              resister();
              console.log(userDetails);
            }}
          >
            Creat account
          </button>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        open={error.hasError}
        autoHideDuration={1000}
        onClose={() => {
          setError({ ...Error, hasError: false });
        }}
        message={error.message}
        // action={
        //   <>
        //     <IconButton
        //       onClick={() => {
        //         setError({ ...error, hasError: false });
        //       }}
        //     >
        //       <Icon style={{ color: "red" }}>close</Icon>
        //     </IconButton>
        //   </>
        // }
      />
    </>
  );
};

export default Login;
