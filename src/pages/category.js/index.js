import React from "react";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import CategoryCard from "../../Component/category/categoryCard";
import CategoryforHome1 from "../../Component/category/Recipes";
import Shopbyseasonsbest from "../../Component/category/Shopbyseasonsbest";
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
		// fontFamily: "cursive",
	},
	viewmore: {
		textAlign: "center",
		border: "1px solid black",
		width: "fit-content",
		padding: "3px 100px",
		borderRadius: "6px",
		background: "#591a07",
		color: "white",
		textDecoration: "none",
	},
};
const MainCategory = () => {
	const history = useHistory();

	// useEffect(() => {
	// 	document.body.style.background = "#efefef";
	// }, []);
	return (
		<div>
			<Header />
			<div style={{ marginTop: "50px", background: "#efefef" }}>
				<HomeBanner />
				<h3 style={style.header}>SHOP BY ITEM CATEGORY </h3>
				<CategoryCard />
				<h3 style={style.header}>SHOP BY RECIPES INGRIDIENT'S</h3>
				<CategoryforHome1 />
				<h3 style={style.header}>SHOP BY SEASON'S BEST</h3>
				<Shopbyseasonsbest />
				<div
					style={{
						textAlign: "center",
						margin: "0px 3px 0px 0px",
						paddingBottom: "10px",
					}}
				>
					<span
						// onClick={() => {
						// 	history.push(`/shop-by-recipes`);
						// }}
						style={style.viewmore}
					>
						VIEW MORE
					</span>
				</div>
				{/* </Link> */}
			</div>
		</div>
	);
};

export default MainCategory;
