import React, { Component } from "react";
import styled from "styled-components";

const MenuList = ({ className, children }) => (
	<ul className={className}>{children}</ul>
);

const MenuItem = ({ className, children, href }) => (
	<li>
		<a href={href}>{children}</a>
	</li>
);

const StyledMenuList = styled(MenuList)`
	list-style: none;
`;

const StyledMenuItem = styled(MenuItem)`
	text-decoration: none;
`;

const NavBarMenuWrapper = styled.div`
	text-transform: uppercase;
`;

export default class NavBarMenu extends Component {
	render() {
		return (
			<NavBarMenuWrapper>
				<StyledMenuList>
					<StyledMenuItem href="#home">Home</StyledMenuItem>
					<StyledMenuItem href="#about">About</StyledMenuItem>
					<StyledMenuItem href="#resume">Resume</StyledMenuItem>
					<StyledMenuItem href="#work">Works</StyledMenuItem>
					<StyledMenuItem href="#contact">Contact</StyledMenuItem>
				</StyledMenuList>
			</NavBarMenuWrapper>
		);
	}
}
