import React, { Component } from "react";
import styled from "styled-components";
import headerBackground from "./quang_sapa.jpg";

import AppBar from "@material-ui/core/AppBar";

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
		background-color: black;
	}
`;

export default class Header extends Component {
	render() {
		return <StyledAppBar position="fixed">a</StyledAppBar>;
	}
}
