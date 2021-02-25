import React, { useState } from "react";
import { Card, Avatar, Grid } from "@material-ui/core";
import HomeBanner from "../templet/banner";
import { useEffect } from "react";
import axios from "axios";
import {
	get_all_product_category,
	get_product_category,
} from "../../constants/api";
import Header from "../templet/header";
import { useHistory } from "react-router-dom";

const DiseaseCard = ({ data }) => {
	const history = useHistory();
	return (
		<Card
			onClick={() => {
				history.push(
					`/show-items-with-id?id=${data.id}?name=${data.category_name}`
				);
			}}
			style={{
				display: "flex",
				flexDirection: "row",
				// width: "100%",
				flex: 1,
				padding: "10px",
				margin: "0px 5px 5px 5px",
			}}
		>
			<span style={{ flex: 1 }}>
				<img
					style={{
						height: "45px",
						width: "45px",
						borderRadius: "30px",
					}}
					src={data.category_img}
					alt="image"
				/>
			</span>
			<span
				style={{
					flex: 2,
					paddingLeft: "10px",
					display: "flex",
					alignItems: "center",
				}}
			>
				{data.category_name}
			</span>
		</Card>
	);
};

const CategoryCard = ({ all }) => {
	const [productCategory, setProductCategory] = useState([]);
	console.log(all);
	useEffect(() => {
		if (all) {
			axios.get(get_all_product_category).then((response) => {
				setProductCategory(response.data.data);
			});
		} else {
			axios
				.post(get_product_category, {
					is_popular: 1,
				})
				.then((response) => {
					setProductCategory(response.data.data);
				});
		}
	}, []);

	return (
		<>
			<div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						overflowX: "auto",
						width: "100%",
						background: "#e8e7e7ad",
						padding: "10px 0px",
					}}
				>
					<Grid container>
						{productCategory.map((deases, index) => (
							<Grid item xs={6} key={index}>
								<DiseaseCard data={deases} />
							</Grid>
						))}
					</Grid>
				</div>
			</div>
		</>
	);
};

export default CategoryCard;
