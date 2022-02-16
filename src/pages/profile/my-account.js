import React, { useState, useEffect } from "react";
import Header from "../../Component/templet/header";
// import Edit from "@material-ui/icons/EditIcon";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import { gql, useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import {
  Drawer,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import {
  user_info,
} from "../../constants/storage-keys";
import { loggedinAction } from "../../actions/authorization";
const updateUserMutation = gql`
  mutation ($id: Int, $name: String, $gender: String, $email_id: String) {
    update_user(
      input: { id: $id, name: $name, gender: $gender, email_id: $email_id }
    ) {
      status
      message
      data {
        id
        name
        email_id
        gender
        dob
        user_type
        mobile_no
        profile_logo
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "96%",
  },
}));
const MyAccount = () => {
  const User_info = useSelector((state) => state.authorization.user_info);
  console.log("user_info", User_info);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [UpdateMutation, updateRes] = useMutation(updateUserMutation);
  const [userDetail, setUserDetail] = useState({
    mobile_no: User_info.mobile_no,
    email: User_info.email_id,
    name: User_info.name,
    gender: User_info.gender,
    date_of_birth: User_info.dob,
    profile_logo: User_info.profile_logo,
  });
  const rememberUserdata = (response) => {
    localStorage.setItem(user_info, JSON.stringify(response));
    dispatch(
      loggedinAction({
        is_loggedin: true,
        loggedin_as: "user",
        user_info: response,
      })
    );
    // window.history.go("-1");
    console.log("data1", response);
  };
  const UpdateUserDetail = () => {
    UpdateMutation({
      variables: {
        id:User_info.id,
        name: userDetail.name,
        gender: userDetail.gender,
        email_id: userDetail.email,
        dob: userDetail.date_of_birth,
        mobile_no:userDetail.mobile_no
      },
    }).then((res) => {
      rememberUserdata(res.data.update_user.data);
    });
  };
  const openDrawer = () => {
    setOpen(true);
  };
  return (
    <div>
      <Header pagetitle={"My Account"} />
      <div >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            background: "#6d0f05",
            color: "white",
          }}
        >
          <span style={{ flex: 1 }}>
            <img style={{ height: "60px" }} src={userDetail.profile_logo} />
            <span
              style={{
                position: "absolute",
                margin: "-25px 0px 0px 37px",
                background: "#00bd45",
                color: "#ffffff",
                display: "flex",
                borderRadius: "38px",
                fontSize: "14px",
                padding: "2px",
              }}
            >
              <Edit style={{ fontSize: "19px" }} />
            </span>
          </span>
          <span style={{ flex: 3, display: "flex", flexDirection: "column" }}>
            <span
              style={{
                margin: " 0px 0px 4px",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              {userDetail.name}
            </span>
            <span>{userDetail.mobile_no}</span>
            <span>{userDetail.email}</span>
          </span>
          <span
            onClick={() => {
              openDrawer();
            }}
          >
            <Edit />
          </span>
        </div>
      </div>
      <Drawer
        // fullScreen
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        anchor="bottom"
        style={{ height: "20px" }}
        // TransitionComponent={Transition}
      >
        <div
          style={{
            borderRadius: "56px",
            position: "fixed",
            margin: "-17px 0px 0px",
            background: "white",
            width: "100%",
            height: "37px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderTop: "2px solid #981515",
          }}
        >
          <div
            onClick={() => {
              setOpen(false);
            }}
            style={{
              position: "fixed",
              margin: "-85px 5px 3px",
              background: "white",
              borderRadius: "24px",
              display: "flex",
              color: "#981515",
              border: "1px solid #901818",
              padding: "4px",
            }}
          >
            <Close />
          </div>
        </div>
        <TextField
          label=" NAME"
          style={{ margin: "5px" }}
          value={userDetail.name}
          onChange={(e) => {
            setUserDetail({ ...userDetail, name: e.target.value });
          }}
        />

        <FormControl style={{ width: "98%", margin: "5px" }}>
          <InputLabel>Gender</InputLabel>
          <Select
            value={userDetail.gender}
            onChange={(e) => {
              setUserDetail({ ...userDetail, gender: e.target.value });
            }}
          >
            {/* {productCategory.map((item, index) => ( */}
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"others"}>Others</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="EMAIIL"
          style={{ margin: "5px" }}
          value={userDetail.email}
          onChange={(e) => {
            setUserDetail({ ...userDetail, email: e.target.value });
          }}
        />
        <TextField
          label="MOBILE"
          style={{ margin: "5px" }}
          value={userDetail.mobile_no}
          onChange={(e) => {
            setUserDetail({ ...userDetail, mobile_no: e.target.value });
          }}
        />
        <TextField
          id="date"
          label="DATE OF BIRTH"
          type="date"
          // defaultValue="2017-05-24T10:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          value={userDetail.date_of_birth}
          onChange={(e) => {
            setUserDetail({ ...userDetail, date_of_birth: e.target.value });
          }}
        />
        <div style={{ textAlign: "center", margin: "15px  0px" }}>
          <button
            onClick={() => {
              UpdateUserDetail();
            }}
            style={{
              border: "none",
              background: "#8c1002",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
              width: "171px",
              height: "29px",
              fontSize: "15px",
            }}
          >
            Save Change
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default MyAccount;
