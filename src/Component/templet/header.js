import React from "react";
import { Link, withRouter } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import ArrowbackIcon from "@material-ui/icons/ArrowBack";

import { Card, IconButton, Icon, Drawer, Divider } from "@material-ui/core";
import { useState } from "react";
import { useStateValue } from "./StateProvider";
import Productfinder from "./Productfinder";
import { useEffect } from "react";
import { userLogout } from "../../actions/authorization";
import { useDispatch } from "react-redux";
import { user_info } from "../../constants/storage-keys";

const Header = ({ pagetitle }) => {
	const [{ basket }] = useStateValue();
	const logedin = false;
	const dispatch = useDispatch();

	const [openSearchDilog, setOpenSearchDilog] = useState(false);
	const [openSideNav, setOpenSideNav] = useState(false);
	const logout = () => {
		dispatch(userLogout());
		localStorage.removeItem(user_info);
		setOpenSideNav(false);
	};
	useEffect(() => {
		if (openSideNav) {
			document.body.style.overflow = "hidden";
		}
		if (!openSideNav) {
			document.body.style.overflow = "unset";
		}
	}, [openSideNav]);
	return (
		<React.Fragment>
			<div style={{}}>
				<Card
					style={{
						display: "flex",
						backgroundColor: "#2f8a74",
						color: "white",
						width: "100%",
						position: "fixed",
						// marginTop: "-68px",
						zIndex: 99,
						width: "-webkit-fill-available",
						top: 0,
						borderRadius: 0,
					}}
				>
					<div>
						{pagetitle ? (
							<IconButton
								color="inherit"
								aria-label="Open drawer"
								onClick={() => {
									window.history.go("-1");
								}}
							>
								<ArrowbackIcon />
							</IconButton>
						) : (
							<IconButton
								onClick={() => {
									setOpenSideNav(true);
								}}
							>
								<Icon>
									<MenuIcon style={{ color: "white" }} />
								</Icon>
							</IconButton>
						)}
					</div>
					<div
						style={{
							flexDirection: "row",
							display: "flex",
							alignItems: "center",
						}}
					>
						<span>
							<Link
								style={{
									textDecoration: "none",
									fontSize: "20px",
									color: "white",
									textDecoration: "none",
								}}
								to="/"
							>
								{pagetitle ? pagetitle : "ଆମ ପରିବା"}
							</Link>
						</span>
						<span
							style={{
								position: "absolute",
								right: 0,
								margin: "9px 81px 0px 0px",
							}}
							onClick={() => {
								setOpenSearchDilog(!openSearchDilog);
							}}
						>
							<SearchIcon />
						</span>
						<Link
							to="/checkout"
							style={{ color: "white", textDecoration: "none" }}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									marginLeft: "20px",
									right: 0,
									position: "absolute",
									margin: "-11px 16px -1px",
								}}
							>
								<ShoppingBasketIcon />
								<span
									style={{
										fontSize: "13px",
										fontWeight: 800,
										marginLeft: "10px",
										marginRight: "10px",
									}}
								>
									{basket.length}
								</span>
							</div>
						</Link>
					</div>
				</Card>
				{/* {showSearchbar === true && (
          <Card>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input
                type="text"
                style={{
                  flex: 5,
                  height: "12px",
                  padding: "10px",
                  border: "2px solid green",
                  width: "100%",
                  borderRadius: "10px",
                  margin: "6px 10px"
                }}
              />
              <Button
                style={{
                  flex: 1,
                  backgroundColor: "lightgreen",
                  color: "white",
                  height: "20px",
                  margin: "13px 7px 0px 0px",
                  padding: "7px",
                  fontSize: "10px",
                  color: "black"
                }}
              >
                Search
              </Button>
            </div>
          </Card>
        )} */}
			</div>
			<div>
				<Drawer
					open={openSideNav}
					anchor={"left"}
					onClose={() => {
						setOpenSideNav(false);
					}}
					// fullWidth={true}
				>
					<div
						style={{
							width: "calc(100vw - 173px)",
							// padding: "10px",
							height: "-webkit-fill-available",
						}}
					>
						<div
						// style={{ padding: "5px" }}
						>
							<div
								style={{
									backgroundColor: "rgb(89, 26, 7)",
									height: "35px",
									width: "100%",
									marginBottom: "10px",
									display: "flex",
									alignItems: "center",

									// borderRadius: "5px",
								}}
							>
								<span
									style={{
										color: "white",
										fontSize: "20px",
										marginLeft: "10px",
									}}
								>
									ଆମ ପରିବା
								</span>
							</div>

							<div style={{ padding: "5px" }}>
								<Link
									onClick={() => {
										setOpenSideNav(false);
									}}
									to="/"
									style={{
										color: "black",
										textDecoration: "none",
										fontSize: "20px",
									}}
								>
									<div style={{ padding: "7px 4px", fontSize: "23px" }}>
										Home
									</div>
								</Link>
								<Divider />
								<Link
									onClick={() => {
										setOpenSideNav(false);
									}}
									to="/category"
									style={{
										color: "black",
										textDecoration: "none",
										fontSize: "20px",
									}}
								>
									<div style={{ padding: "7px 4px", fontSize: "23px" }}>
										Category
									</div>
								</Link>
								<Divider />{" "}
								{/* <Link
									onClick={() => {
										setOpenSideNav(false);
									}}
									to="/about"
									style={{
										color: "black",
										textDecoration: "none",
										fontSize: "20px",
									}}
								>
									<div style={{ padding: "7px 4px", fontSize: "23px" }}>
										About
									</div>
								</Link>
								<Divider />	 */}
								<Link
									onClick={() => {
										setOpenSideNav(false);
									}}
									to="/login"
									style={{
										color: "black",
										textDecoration: "none",
										fontSize: "20px",
									}}
								>
									<div style={{ padding: "7px 4px", fontSize: "23px" }}>
										Login
									</div>
								</Link>
								<Divider />
								<div
									onClick={logout}
									style={{
										color: "black",
										textDecoration: "none",
										fontSize: "20px",
									}}
								>
									<div style={{ padding: "7px 4px", fontSize: "23px" }}>
										logout
									</div>
								</div>
							</div>
						</div>
					</div>
				</Drawer>
			</div>
			<Productfinder openSearchDilog={openSearchDilog} />
		</React.Fragment>
	);
};

export default withRouter(Header);
