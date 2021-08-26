import React from "react";
import CategoryCard from "../../Component/category/categoryCard";
import Header from "../../Component/templet/header";
const style = {
	header: {
		// background: "#efefef",
		background: "white",
		margin: 0,
		borderBottom: "1px solid gray",
		borderTop: "1px solid gray",
		// paddingBottom: "5px",
		padding: "5px",
		textAlign: "center",
	},
};
const ShopByItems = () => {
	return (
		<div>
			<Header pagetitle="Items Categorys" />
			<div style={{ marginTop: "5px" }}>
				<h3 style={style.header}>SHOP BY ITEM CATEGORY </h3>

				<CategoryCard all={true} />
			</div>
		</div>
	);
};

export default ShopByItems;
