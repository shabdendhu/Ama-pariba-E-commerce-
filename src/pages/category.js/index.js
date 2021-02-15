import React from "react";
import CategoryCard from "../../Component/category/categoryCard";
import CategoryforHome1 from "../../Component/category/CategoryforHome1";
import HomeBanner from "../../Component/templet/banner";
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
const MainCategory = () => {
	return (
		<div>
			<Header />
			<div style={{ marginTop: "50px" }}>
				<HomeBanner />
				<h3 style={style.header}>SHOP BY ITEM CATEGORY </h3>
				<CategoryCard />
				<h3 style={style.header}>SHOP BY RECIPES INGRIDIENT'S</h3>
				<CategoryforHome1 />
			</div>
		</div>
	);
};

export default MainCategory;
