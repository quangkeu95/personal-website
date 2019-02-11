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
import Button from "@material-ui/core/Button";

import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import MailIcon from "@material-ui/icons/MailOutline";

import GridContainer from "../GridContainer";
import GridItem from "../GridItem";

const StyledTab = styled(Tab)`
	&& {
		color: #fff;
		font-size: 1rem;
	}
`;

const styles = () => ({
	appBar: {
		backgroundColor: "transparent",
		boxShadow: "none",
		height: "60px"
	},
	logo: {
		fontFamily: '"Pacifico", cursive',
		fontWeight: "bold",
		color: "#fff",
		fontSize: "1em"
	},
	iconMenu: {
		color: "#fff"
	},
	toolbar: {
		height: "100%"
	},
	tabIndicator: {
		background: "#fff"
		// background: "#E12D39" /* fallback for old browsers */
		// background: "-webkit-linear-gradient(to right, #8a2387, #e94057, #f27121)", /* Chrome 10-25, Safari 5.1-6 */
		// background: "linear-gradient(to right, #8a2387, #e94057, #f27121)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	},
	tabItem: {
		color: "#fff",
		fontWeight: "400"
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
		<AppBar position="fixed" className={classes.appBar}>
			<Hidden mdUp>
				<GridContainer areas={[". content ."]} columns="5vw 1fr 5vw">
					<GridItem area="content" justifySelf="strech">
						<GridContainer
							columns="150px 100px"
							areas={["logo menu"]}
							justifyContent="space-between"
						>
							<GridItem justifySelf="start">
								<Button
									component="a"
									href="home"
									className={classes.logo}
								>
									Quang
								</Button>
							</GridItem>
							<GridItem justifySelf="end">
								<IconButton
									onClick={() => updateOpenDrawer(true)}
									className={classes.iconMenu}
								>
									<MenuIcon />
								</IconButton>
								<SwipeableDrawer
									anchor="right"
									open={isOpenDrawer}
									onOpen={() => updateOpenDrawer(true)}
									onClose={() => updateOpenDrawer(false)}
								>
									<NavList />
								</SwipeableDrawer>
							</GridItem>
						</GridContainer>
					</GridItem>
				</GridContainer>
			</Hidden>
			<Hidden smDown>
				<GridContainer columns="150px 1fr" areas={["logo menu"]}>
					<GridItem>
						<Button
							component="a"
							href="home"
							className={classes.logo}
						>
							Quang
						</Button>
					</GridItem>
					<GridItem justifySelf="end">
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
									return (
										<Tab
											label={name}
											key={index}
											component="a"
											className={classes.tabItem}
										/>
									);
								}
							)}
						</Tabs>
					</GridItem>
				</GridContainer>
				{/* <Grid
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
									return (
										<StyledTab
											label={name}
											key={index}
											component="a"
										/>
									);
								}
							)}
						</Tabs>
					</Grid>
				</Grid> */}
			</Hidden>
		</AppBar>
	);
};

export default withStyles(styles)(NavBar);
