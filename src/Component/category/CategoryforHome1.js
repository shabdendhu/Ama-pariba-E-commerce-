import { Card, Grid } from "@material-ui/core";
import React from "react";
const CategoryItem = ({ item }) => {
	return (
		<>
			<div
				// onClick={() => {

				// }}
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
						style={{
							height: "50px",
							padding: "5px",
						}}
						src={item.image}
					/>
				</div>
				<span style={{ fontWeight: 400 }}>{item.name}</span>
			</div>
		</>
	);
};
const CategoryforHome1 = () => {
	const CommonDiseases = [
		"biriyani.png",
		"butterpanir.png",
		"chikentikka.png",
		"chilichiken.png",
		"manchuriyan.png",
		"tandurinan.png",
	];
	const items = [
		{ name: "Biriyani", image: "biriyani.png" },
		{ name: "Butterpanir", image: "butterpanir.png" },
		{ name: "Chikentikka", image: "chikentikka.png" },
		{ name: "Chilichiken", image: "chilichiken.png" },
		{ name: "Manchuriyan", image: "manchuriyan.png" },
		{ name: "Tandurinan", image: "tandurinan.png" },
		{ name: "Biriyani", image: "biriyani.png" },
		{ name: "Manchuriyan", image: "manchuriyan.png" },
		{ name: "Chikentikka", image: "chikentikka.png" },
		{ name: "Tandurinan", image: "tandurinan.png" },
		{ name: "Butterpanir", image: "butterpanir.png" },
		{ name: "Chikentikka", image: "chikentikka.png" },
	];
	return (
		<div style={{ background: "#efefef" }}>
			<Grid container>
				{items.map((item, index) => (
					<Grid item xs={4} key={index}>
						<CategoryItem item={item} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default CategoryforHome1;
