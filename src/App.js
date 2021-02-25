import React from "react";
import { useEffect } from "react";
import MainComponent from "./Component/templet/MainComponent";

function App() {
	useEffect(() => {
		document.body.style.background = "#efefef";
	}, []);
	return <MainComponent />;
}

export default App;
