import React, { Component } from "react";
import styled from "styled-components";
import media from "styled-media-query";

import NavBarIcon from "./NavBarIcon";
import NavBarMenu from "./NavBarMenu";

const StyledNavBar = styled.nav`
	width: 100%;
	margin: 0 auto;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 12px;
	font-family: "Open Sans", sans-serif;
	letter-spacing: 2.5px;
	z-index: 100;
	position: fixed;
	left: 0;
	right: 0;

	ul {
		margin: 0;
		padding: 0;
		border: none;
		outline: none;
	}
`;

const StyledList = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	min-height: 48px;
`;

const NavBarItem = props => {
	return (
		<li className={props.className}>
			<a href={props.href}>{props.name}</a>
		</li>
	);
};

const StyledNavBarItem = styled(NavBarItem)`
	padding: 0 2vw;

	a {
		text-decoration: none;
		color: ${props => (props.active ? "#F06000" : "#000")};
	}
`;

const NavWrapper = styled.div`
	background-color: #ddd;
	width: 100%;
	height: 10vh;
`;

export default class NavBar extends Component {
	render() {
		return (
			<NavWrapper>
				<NavBarIcon />
				<NavBarMenu />
			</NavWrapper>
		);
	}
}
