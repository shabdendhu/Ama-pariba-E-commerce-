import { Checkbox, Dialog, ListItemAvatar, Slide } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { get_recipe_detail } from "../../constants/api";
import Header from "../templet/header";
import CustomButton from "./AddButton";
import { useStateValue } from "./StateProvider";
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});
const style = {
	servingManegeIcon: {
		background: "#9e2821",
		padding: "3px",
		fontSize: "26px",
		color: "white",
		height: "16px",
		display: "flex",
		width: "16px",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "4px",
	},
};
const Ingridient = [
	{ name: "Atta", amount: "2 tbspn coeiander leaves", image: "apple.png" },
	{ name: "Atta", amount: "2 tbspn coeiander leaves", image: "grapes.png" },
	{ name: "Atta", amount: "2 tbspn coeiander leaves", image: "banana.png" },
	{
		name: "Atta",
		amount: "2 tbspn coeiander leaves",
		image: "butterpanir.png",
	},
	{ name: "Atta", amount: "2 tbspn coeiander leaves", image: "cucumber.png" },
	{ name: "Atta", amount: "2 tbspn coeiander leaves", image: "apple.png" },
	{ name: "Atta", amount: "2 tbspn coeiander leaves", image: "apple.png" },
];
const RecipesDetails = ({ openDetailDilog }) => {
	var url = window.location.search;
	var pagetitle = url.substring(url.lastIndexOf("=") + 1);
	console.log(pagetitle);
	const [open, setOpen] = useState(true);
	const [proceedtobuy, setProceedtobuy] = useState(false);
	const [recipeDetails, setRecipeDetails] = useState([]);
	const [ingridients, setIngridients] = useState([]);
	const [numberOfSeaving, setNumberOfSeaving] = useState(1);
	const handleClose = () => {
		setOpen(false);
	};
	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		axios
			.get(`${get_recipe_detail}/${parseInt(params.get("id"))}`)
			.then((response) => {
				const recipeDetail = response.data.data;
				if (recipeDetail && recipeDetail.recipeIngridients) {
					setRecipeDetails(recipeDetail);
					setIngridients(recipeDetail.recipeIngridients);
				}
				console.log(parseInt(params.get("id")), recipeDetail);
			});
	}, []);
	const inCreaseNoOfServing = () => {
		setNumberOfSeaving(numberOfSeaving + 1);
	};
	const deCreaseNoOfServing = () => {
		if (numberOfSeaving > 1) {
			setNumberOfSeaving(numberOfSeaving - 1);
		}
	};
	useEffect(() => {
		setOpen(!open);
		console.log(open);
	}, [openDetailDilog]);
	return (
		<>
			<Dialog
				fullScreen
				open={true}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<Header pagetitle={pagetitle} />
				<div style={{ marginTop: "50px", background: "white" }}>
					<div
						style={{
							padding: "5px",
							fontFamily: "fantasy",
							fontWeight: 600,
							color: "#4e0202",
						}}
					>
						{recipeDetails.name}
					</div>

					<img src={recipeDetails.image} style={{ width: "100vw" }} />
					<div>
						<div
							style={{ paddingLeft: "5px", fontSize: "19px", fontWeight: 600 }}
						>
							INGRIDIENTS
						</div>
						{ingridients.map((item, index) => (
							<div
								style={{
									display: "flex",
									alignItems: "center",
									marginBottom: "5px",
									padding: "10px 11px",
									borderBottom: "1px solid #80808070",
								}}
								key={index}
							>
								<img src={item.image} style={{ width: "40px" }} />
								{/* <span>{item.name}</span> */}
								<span style={{ paddingLeft: "20px", fontWeight: 400 }}>
									{item.amt_for_recipe}
								</span>
							</div>
						))}
						<div style={{ textAlign: "center", margin: "16px 0px 13px 0px" }}>
							<button
								onClick={() => {
									setProceedtobuy(true);
								}}
								style={{
									backgroundColor: "#9e2121",
									marginBottom: "5px",
									marginLeft: "5px",
									height: "35px",
									width: "80%",
									color: "white",
									border: "none",
									outline: "none",
									borderRadius: "5px",
									fontSize: "15px",
									margin: "0px 0px",
								}}
							>
								BUY INGRIDIENTS
							</button>
						</div>
					</div>
					<div>
						<div
							style={{
								fontWeight: 500,
								padding: "5px",
								borderBottom: "2px solid black",
								borderTop: "2px solid black",
								marginTop: "10px",
								textAlign: "center",
								fontSize: "18px",
								fontFamily: "cursive",
							}}
						>
							COOK PROCESS
						</div>
						<div
							style={{
								padding: "10px",
								marginBottom: "30px",
								borderBottom: "1px solid #8080807a",
							}}
						>
							<span style={{ fontWeight: 600 }}>STEP-1</span>
							<br />
							<span>{recipeDetails.cooking_process}</span>
						</div>
					</div>
				</div>
				<div></div>
				{proceedtobuy && (
					<div>
						<div>
							<div
								style={{
									textAlign: "center",
									fontSize: "18px",
									fontWeight: 300,
									fontFamily: "cursive",
								}}
							>
								Showing Ingridients
								<br /> Quanitiy for
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<span
									style={style.servingManegeIcon}
									onClick={deCreaseNoOfServing}
								>
									-
								</span>
								<span style={{ margin: "7px 6px", color: "#9e2821" }}>
									{numberOfSeaving} Serving
								</span>
								<span
									style={style.servingManegeIcon}
									onClick={inCreaseNoOfServing}
								>
									+
								</span>
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									flexDirection: "column",
									background: " rgb(224 224 224 / 41%)",
									margin: "3px 12px",
									borderRadius: "10px",
									padding: "15px",
								}}
							>
								<div style={{ marginBottom: "5px" }}>Current Selection</div>
								<div style={{ marginBottom: "5px", color: "#9e2821" }}>
									3 items
								</div>
								<div
									style={{
										width: "-webkit-fill-available",
										textAlign: "center",
									}}
								>
									<button
										style={{
											backgroundColor: "#9e2121",
											marginBottom: "5px",
											marginLeft: "5px",
											height: "35px",
											width: "60%",
											color: "white",
											border: "none",
											outline: "none",
											borderRadius: "5px",
											fontSize: "15px",
											margin: "0px 0px",
										}}
									>
										ADD TO BASKET
									</button>
								</div>
							</div>
						</div>
						{ingridients.map((item, index) => (
							<div
								style={{
									display: "flex",
									alignItems: "center",
									marginBottom: "5px",
									padding: "10px 11px",
									borderBottom: "1px solid #80808070",
									position: "relative",
								}}
								key={index}
							>
								<Checkbox />
								<img src={item.image} style={{ width: "40px" }} />
								{/* <span>{item.name}</span> */}
								<span style={{ paddingLeft: "20px", fontWeight: 400 }}>
									{item.amt_for_recipe}
								</span>
								<span
									style={{
										right: 0,
										position: "absolute",
										marginRight: "20px",
									}}
								>
									<CustomButton
										// id={data.product_id}
										// image={data.image_url}
										// name={data.product_name}
										// amount={productAmount}
										// price={parseInt(productPrice)}
										width="90px"
										stage="add"
									/>
								</span>
							</div>
						))}
						<div
							style={{
								display: "flex",
								alignItems: "center",
								flexDirection: "column",
								background: " rgb(224 224 224 / 41%)",
								margin: "3px 12px",
								borderRadius: "10px",
								padding: "15px",
							}}
						>
							<div style={{ marginBottom: "5px" }}>Current Selection</div>
							<div style={{ marginBottom: "5px", color: "#9e2821" }}>
								3 items
							</div>
							<div
								style={{
									width: "-webkit-fill-available",
									textAlign: "center",
								}}
							>
								<button
									style={{
										backgroundColor: "#9e2121",
										marginBottom: "5px",
										marginLeft: "5px",
										height: "35px",
										width: "60%",
										color: "white",
										border: "none",
										outline: "none",
										borderRadius: "5px",
										fontSize: "15px",
										margin: "0px 0px",
									}}
								>
									ADD TO BASKET
								</button>
							</div>
						</div>
					</div>
				)}
			</Dialog>
		</>
	);
};

export default RecipesDetails;
