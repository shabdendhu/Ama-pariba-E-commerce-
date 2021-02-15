import React, { useState, useEffect } from "react";
const HomeBanner = () => {
	const [doctors, setDoctors] = useState([]);
	const CommonDiseases = [
		"ayurveda_banner.png",
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
				{CommonDiseases.map((data, index) => (
					<div
						key={index}
						style={{
							flexShrink: 0,
							marginRight: "5px",
							marginLeft: "5px",
							// padding: "10px",
							width: "calc(100vw - 38px)",
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
								width: "calc(100vw - 38px)",
								height: "100px",
								borderRadius: "20px",
							}}
						/>
					</div>
				))}
			</div>
		</>
	);
};
export default HomeBanner;
