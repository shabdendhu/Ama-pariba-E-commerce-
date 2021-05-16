import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../Component/Product/ProductCard";
import Header from "../../Component/templet/header";
import { user_history } from "../../constants/api";

// import { user_info } from "../../constants/storage-keys";

const MyHistory = () => {
  const user_info = useSelector((state) => state.authorization.user_info);
  const [prooductHistory, setProductHistory] = useState([]);
  useEffect(() => {
    axios.post(user_history, { user_id: user_info.id }).then((response) => {
      if (response.data.status) {
        setProductHistory(response.data.data);
      }
      console.log(response.data.data);
    });
  }, []);
  return (
    <div>
      <Header pagetitle="My History" />
      <div style={{ marginTop: "50px", background: "#efefef" }}>
        {prooductHistory.map((item, index) => (
          <ProductCard key={item.product_id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default MyHistory;
