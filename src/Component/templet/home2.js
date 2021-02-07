import React, { useState, useEffect } from "react";
import axios from "axios";

const home2 = () => {
  const [data, setdata] = useState({
    id: 0,
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    gender: "",
    image: "",
    city: "",
    state: "",
    location: "",
    age: ""
  });

  const autoApi = () => {
    axios
      .post("http://localhost:3000/careipro/post-careiprousers-list", {
        id: data.id,
        firstname: data.firstname,
        lastname: data.lastname,
        mobile: data.mobile,
        email: data.email,
        gender: data.gende,
        image: data.image,
        city: data.city,
        state: data.state,
        location: data.location,
        age: data.age
      })
      .then(response => {
        console.log("response", response.data);
      });
  };
  useEffect(() => {
    Axios.post("https://careipro.com:9000/site-management/get-user-list").then(
      response => {
        setdata(response.data);
      }
    );
  }, []);
  return <div>{}</div>;
};

export default home2;
