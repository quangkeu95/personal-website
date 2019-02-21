import React, { Component, Fragment, useState, useEffect } from "react";
import styled from "styled-components";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
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

import GridContainer from "../GridContainer";
import GridItem from "../GridItem";
import LogoButton from "./LogoButton";
import MenuButton from "./MenuButton";
import StyledTab from "./Tab";
import StyledTabs from "./Tabs";

const styles = () => ({
	templateContainer: {
		height: "inherit",
		margin: "0 5vw"
	}
});

const NavList = props => {
	return (
		<List>
			{["Home", "About", "Resume", "Contact"].map((text, index) => (
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

const CustomAppBar = ({ className, children }) => {
	return <AppBar className={className}>{children}</AppBar>;
};

const StyledAppBar = styled(CustomAppBar)`
	&& {
		background-color: ${props =>
			props.isOnTop === true ? "transparent" : "#FFF"};
		box-shadow: ${props =>
			props.isOnTop === true
				? "none"
				: "0 8px 10px -8px rgba(0, 0, 0, 0.4)"};
		height: 50px;
	}
`;

const NavBar = props => {
	const { classes } = props;
	const [tabIndex, updateTabIndex] = useState(0);
	const [isOpenDrawer, updateOpenDrawer] = useState(false);
	const [isOnTop, updateIsOnTop] = useState(true);

	const handleScroll = event => {
		if (window.scrollY === 0) {
			updateIsOnTop(true);
		} else {
			updateIsOnTop(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [window.scrollY]);

	return (
		<StyledAppBar position="fixed" isOnTop={isOnTop}>
			{/* For mobile */}
			<Hidden mdUp>
				<GridContainer className={classes.templateContainer}>
					<GridItem alignSelf="center" justifySelf="stretch">
						<GridContainer
							columns="150px 100px"
							areas={["logo menu"]}
							justifyContent="space-between"
							alignContent="center"
						>
							<GridItem justifySelf="start">
								<LogoButton
									isOnTop={isOnTop}
									component="a"
									href="home"
								>
									Quang
								</LogoButton>
							</GridItem>
							<GridItem justifySelf="end">
								<MenuButton
									onClick={() => updateOpenDrawer(true)}
									isOnTop={isOnTop}
								>
									<MenuIcon />
								</MenuButton>
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
			{/* For desktop */}
			<Hidden smDown>
				<GridContainer columns="150px 1fr" areas={["logo menu"]}>
					<GridItem>
						<LogoButton isOnTop={isOnTop} component="a" href="home">
							Quang
						</LogoButton>
					</GridItem>
					<GridItem justifySelf="end">
						<StyledTabs
							value={tabIndex}
							onChange={(event, value) => updateTabIndex(value)}
							isOnTop={isOnTop}
						>
							{["Home", "About", "Resume", "Contact"].map(
								(name, index) => {
									return (
										<StyledTab
											label={name}
											key={index}
											component="a"
											isOnTop={isOnTop}
										/>
									);
								}
							)}
						</StyledTabs>
					</GridItem>
				</GridContainer>
			</Hidden>
		</StyledAppBar>
	);
};

export default withStyles(styles)(NavBar);
