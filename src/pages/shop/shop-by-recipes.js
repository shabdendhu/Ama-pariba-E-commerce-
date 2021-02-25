import React from "react";
import CategoryforHome1 from "../../Component/category/Recipes";
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
const ShopByRecipes = () => {
	return (
		<div>
			<Header pagetitle="Recipes Ingridient's" />
			<div style={{ marginTop: "55px" }}>
				<h3 style={style.header}>SHOP BY RECIPES INGRIDIENT'S</h3>
				<CategoryforHome1 all={true} />
			</div>
		</div>
	);
};

export default ShopByRecipes;
