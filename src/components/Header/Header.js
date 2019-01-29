import React, { Component } from "react";
import styled from "styled-components";
import headerBackground from "./quang_sapa.jpg";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";
import Search from "@material-ui/icons/Search";

// import NavBar from "./NavBar";

// const StyledHeader = styled.header`
// 	height: 100vh;
// 	width: 100%;
// 	background-image: url(${headerBackground});
// 	background-color: #161415;
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-position: top;
// 	text-align: center;
// 	overflow: hidden;
// `;

const StyledAppBar = styled(AppBar)`
	&& {
		background-color: transparent;
		/* background-color: #DDD; */
		box-shadow: none;
		height: 15vh;
	}
`;

const StyledTab = styled(Tab)`
	&& {
		color: #000;
		font-size: 1rem;
	}
`;

const styles = () => ({
	logo: {
		fontFamily: "\"Pacifico\", cursive",
		fontWeight: "bold"
	}
});

function Header(props) {
	const { classes } = props;

	return (
		<StyledAppBar position="fixed">
			<Hidden smUp>
				<Grid container>
					<Grid item>
						<IconButton>
							<MenuIcon />
						</IconButton>
					</Grid>
				</Grid>
			</Hidden>
			<Hidden smDown>
				<Grid container spacing={16} justify="space-between">
					<Grid item lg={4}>
						<StyledTab className={classes.logo} label="Quang"></StyledTab>
					</Grid>
					<Grid item lg={8} >
						<Grid container item justify="flex-end">
							<Tabs centered>
								<StyledTab label="Home"></StyledTab>
								<StyledTab label="About Me"></StyledTab>
								<StyledTab label="Portfolio"></StyledTab>
								<StyledTab label="Contact"></StyledTab>
							</Tabs>
						</Grid>										
					</Grid>
				</Grid>
			</Hidden>
		</StyledAppBar>
	)
}

export default withStyles(styles)(Header);