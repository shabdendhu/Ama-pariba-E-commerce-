import React from "react";
import "./login.css";
// import { Link } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Header from "../templet/header";
import Axios from "axios";
import { Snackbar, IconButton, Icon } from "@material-ui/core";
import { loggedin_as, user_info } from "../../constants/storage-keys";
import { useStateValue } from "../templet/StateProvider";
import { loggedinAction } from "../../actions/authorization";
import { get_users_details, register_new_user } from "../../constants/api";

const Login = () => {
  const [error, setError] = useState({ hasError: false, message: "" });
  const [{ user }, dispacher] = useStateValue();
  const isLoggedIn = useSelector((state) => state.authorization.is_loggedin);
  const [logedinUsersWelcome, setLogedinUsersWelcome] = useState(isLoggedIn);
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    mobile_no: "",
    password: "",
  });
  const rememberUserdata = (response) => {
    localStorage.setItem(user_info, JSON.stringify(response.data.data));
    localStorage.setItem(loggedin_as, "user");
    dispatch(
      loggedinAction({
        is_loggedin: true,
        loggedin_as: "user",
        user_info: response.data.data,
      })
    );
    window.history.go("-1");
    setLogedinUsersWelcome(true);
    console.log("data1", response.data.data);
  };
  // const SignIn = () => {
  // 	dispacher({
  // 		type: "SET_USER",
  // 		user: {
  // 			name: "kishan",
  // 			type: "user",
  // 		},
  // 	});
  // 	console.log("setuser");
  // };
  const SignIn = () => {
    Axios.post(get_users_details, {
      mobile_no: userDetails.mobile_no,
      password: userDetails.password,
    }).then((response) => {
      if (response.data.status) {
        // localStorage.setItem(userinfo, JSON.stringify(response.data.data));
        // window.location.href = "/";
        // dispacher({
        // 	type: "SET_USER",
        // 	user: response.data.data,
        // });
        console.log("data2", response.data.data);
        rememberUserdata(response);
      } else {
        setError({ hasError: true, message: response.data.message });
      }
      console.log(response);
    });
  };
  const resister = () => {
    Axios.post(register_new_user, {
      mobile_no: userDetails.mobile_no,
      password: userDetails.password,
    }).then((response) => {
      if (response.data.status) {
        rememberUserdata(response);
      } else {
        setError({ hasError: true, message: response.data.message });
      }
    });
  };
  return (
    <>
      <Header />
      {/* {islo} */}
      <div
        style={{
          backgroundColor: "#efefef",
          marginTop: "90px",
          width: "-webkit-fill-available",
        }}
      >
        <div
          style={{
            fontSize: " 23px",
            color: "rgb(47 138 116)",
            marginBottom: "45px",
            textAlign: "center",
          }}
        >
          {/* Create an account
					<br />
					<small>OR</small>
					<br />
					Login */}
          CREATE ACCOUNT <br />
          OR
          <br />
          LOGIN
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
              background: "black",
              outline: "none",
              borderRadius: "22px",
              height: "39px",
              fontSize: "17px",
              padding: "0px 18px 1px 18px",
              margin: "10px 18px",
              textTransform: "uppercase",
              color: "white",
            }}
            value={userDetails.mobile_no}
            onChange={(e) =>
              setUserDetails({ ...userDetails, mobile_no: e.target.value })
            }
            type="text"
          />
        </div>
        <div
          style={{
            textAlign: "center",
            width: "-webkit-fill-available",
            marginTop: "20px",
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
              background: "black",
              outline: "none",
              borderRadius: "22px",
              height: "39px",
              fontSize: "17px",
              padding: "0px 18px 1px 18px",
              margin: "10px 18px",
              textTransform: "password",
              color: "white",
            }}
            value={userDetails.password}
            onChange={(e) =>
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
            marginTop: "40px",
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
              outline: "none",
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
              outline: "none",
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
          horizontal: "center",
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
