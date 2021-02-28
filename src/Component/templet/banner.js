import React, { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const HomeBanner = () => {
	const [doctors, setDoctors] = useState([]);
	const CommonDiseases = [
		"ayurveda_banner.png",
		"ayurveda_banner.png",
		"ayurveda_banner.png",
		"ayurveda_banner.png",
	];
	return (
		<>
			<div
				className="hide-scroll-bar"
				style={{
					display: "flex",
					flexDirection: "row",
					overflowX: "auto",
					width: "100%",
					background: "#efefef",
					padding: "10px 0px",
				}}
			>
				<AutoPlaySwipeableViews>
					{CommonDiseases.map((data, index) => (
						<div
							key={index}
							style={{
								flexShrink: 0,
								marginRight: "5px",
								marginLeft: "5px",
								// padding: "10px",
								width: "calc(100vw - 10px)",
								height: "100px",
								position: "relative",
								background: "white",
								borderRadius: "20px",
								border: "1px solid rgb(126 217 255)",
							}}
						>
							<img
								src={data}
								style={{
									width: "calc(100vw - 10px)",
									height: "100px",
									borderRadius: "20px",
								}}
							/>
						</div>
					))}
				</AutoPlaySwipeableViews>
			</div>
		</>
	);
};
export default HomeBanner;
