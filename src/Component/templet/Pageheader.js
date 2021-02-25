import React from "react";
import { withRouter } from "react-router-dom";
import ArrowbackIcon from "@material-ui/icons/ArrowBack";

import {
	IconButton,
	Icon,
	Typography,
	AppBar,
	Toolbar,
} from "@material-ui/core";
const Pageheader = (props) => {
	return (
		<div>
			<AppBar position="fixed" style={{ background: "rgb(47, 138, 116)" }}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="Open drawer"
						onClick={() => {
							window.history.go("-1");
						}}
					>
						<ArrowbackIcon />
					</IconButton>
					<Typography variant="h6" color="inherit" noWrap>
						{props.pagetitle}
					</Typography>
				</Toolbar>
			</AppBar>
			<hr />
		</div>
	);
};

export default withRouter(Pageheader);
