import React, { Component, Fragment, useState } from "react";
import styled from "styled-components";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import MailIcon from "@material-ui/icons/MailOutline";

const StyledAppBar = styled(AppBar)`
	&& {
		background-color: #fff;
		box-shadow: none;
		height: 60px;
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
		fontFamily: '"Pacifico", cursive',
		fontWeight: "bold"
	},
	toolbar: {
		height: "100%"
	},
	tabIndicator: {
		background: "#E12D39" /* fallback for old browsers */
		// background: "-webkit-linear-gradient(to right, #8a2387, #e94057, #f27121)", /* Chrome 10-25, Safari 5.1-6 */
		// background: "linear-gradient(to right, #8a2387, #e94057, #f27121)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
});

const NavList = props => {
	return (
		<List>
			{["Home", "About me", "Portfolio", "Contact"].map((text, index) => (
				<ListItem button component="a" key={index}>
					{index === 0 && (
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
					)}
					{index === 1 && (
						<ListItemIcon>
							<PersonIcon />
						</ListItemIcon>
					)}
					{index === 2 && (
						<ListItemIcon>
							<DescriptionIcon />
						</ListItemIcon>
					)}
					{index === 3 && (
						<ListItemIcon>
							<MailIcon />
						</ListItemIcon>
					)}

					<ListItemText primary={text} />
				</ListItem>
			))}
		</List>
	);
};

const NavBar = props => {
	const { classes } = props;
	const [tabIndex, updateTabIndex] = useState(0);
	const [isOpenDrawer, updateOpenDrawer] = useState(false);

	return (
		<StyledAppBar position="fixed">
			<Hidden mdUp>
				<Grid container alignItems="center" className={classes.toolbar}>
					<Grid
						item
						xs={2}
						sm={1}
						container
						justify="center"
						alignItems="center"
					>
						<IconButton onClick={() => updateOpenDrawer(true)}>
							<MenuIcon />
						</IconButton>
						<SwipeableDrawer
							anchor="left"
							open={isOpenDrawer}
							onOpen={() => updateOpenDrawer(true)}
							onClose={() => updateOpenDrawer(false)}
						>
							<NavList />
						</SwipeableDrawer>
					</Grid>
					<Grid item xs={8} sm={10} container justify="center">
						<StyledTab className={classes.logo} label="Quang" />
					</Grid>
				</Grid>
			</Hidden>
			<Hidden smDown>
				<Grid
					container
					alignItems="center"
					justify="space-between"
					className={classes.toolbar}
				>
					<Grid item md={2} lg={2} container alignItems="center">
						<StyledTab className={classes.logo} label="Quang" />
					</Grid>
					<Grid
						item
						md={10}
						lg={10}
						container
						justify="flex-end"
						alignItems="center"
					>
						<Tabs
							centered
							value={tabIndex}
							onChange={(event, value) => updateTabIndex(value)}
							classes={{
								indicator: classes.tabIndicator
							}}
						>
							{["Home", "About me", "Portfolio", "Contact"].map(
								(name, index) => {
									return <StyledTab label={name} key={index} component="a" />;
								}
							)}
						</Tabs>
					</Grid>
				</Grid>
			</Hidden>
		</StyledAppBar>
	);
};

export default withStyles(styles)(NavBar);
