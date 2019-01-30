import React, { Component } from "react";
import styled from "styled-components";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import MenuIcon from "@material-ui/icons/Menu";

const StyledAppBar = styled(AppBar)`
	&& {
		background-color: #FFF;
		box-shadow: none;
		height: 10vh;
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

function NavBar(props) {
	const { classes } = props;

	return (
		<StyledAppBar position="fixed">
			<Hidden mdUp>
				<Grid container>
					<Grid item xs={2} sm={1} container justify="center">
						<IconButton>
							<MenuIcon />
						</IconButton>
					</Grid>
					<Grid item xs={8} sm={10} container justify="center">
						<StyledTab className={classes.logo} label="Quang"></StyledTab>
					</Grid>
				</Grid>
			</Hidden>
			<Hidden smDown>
				<Grid container spacing={16} justify="space-between">
					<Grid item md={2} lg={2}>
						<StyledTab className={classes.logo} label="Quang"></StyledTab>
					</Grid>
					<Grid item md={10} lg={10} container justify="flex-end">
						<Tabs centered value={false}>
							<StyledTab label="About Me"></StyledTab>
							<StyledTab label="Portfolio"></StyledTab>
							<StyledTab label="Work"></StyledTab>
							<StyledTab label="Contact"></StyledTab>
						</Tabs>
					</Grid>										
				</Grid>
			</Hidden>
		</StyledAppBar>
	)
}

export default withStyles(styles)(NavBar);