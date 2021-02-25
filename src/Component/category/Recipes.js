import { Card, Grid } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { get_recipe_list } from "../../constants/api";
const CategoryItem = ({ item }) => {
	const history = useHistory();

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					padding: "7px 5px",
				}}
			>
				<div
					style={{
						padding: "5px 5px 3px",
						width: " 50px",
						textAlign: "center",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						border: "2px solid rgb(150 146 146 / 51%)",
						borderRadius: "41px",
						background: "white",
						height: "50px",
						overflow: "hidden",
						marginBottom: "7px",
					}}
				>
					{/* <span style={{ fontWeight: 400 }}>min_price</span> */}
					<br />

					<img
						onClick={() => {
							const pagename = item.name.replace(/ +/g, "");
							history.push(`/recipe-details?id=${item.id}?name=${pagename}`);
						}}
						style={{
							height: "50px",
							padding: "5px",
						}}
						src={item.icon}
					/>
				</div>
				<span style={{ fontWeight: 400, textAlign: "center" }}>
					{item.name}
				</span>
			</div>
		</>
	);
};
const CategoryforHome1 = ({ all }) => {
	const [recipeList, setRecipeList] = useState([]);
	useEffect(() => {
		if (all) {
			axios.get(get_recipe_list).then((response) => {
				console.log(response.data.data);
				setRecipeList(response.data.data);
			});
		} else {
			axios.get(`${get_recipe_list}/1`).then((response) => {
				console.log(response.data.data);
				setRecipeList(response.data.data);
			});
		}
	}, []);
	return (
		<div style={{ background: "#efefef" }}>
			<Grid container>
				{recipeList.map((item, index) => (
					<Grid item xs={4} key={index}>
						<CategoryItem item={item} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default CategoryforHome1;
