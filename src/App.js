import React, { Component, Fragment } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import styled from "styled-components";

const theme = createMuiTheme({
	typography: {
		fontFamily: '"Open Sans", sans-serif;',
		fontSize: "1em"
	}
});

const Sections = styled.div`
	&& {
		margin-top: 60px;
		font-family: Open Sans, sans-serif;
		font-size: 1em;
	}
`;

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;

		return (
			<MuiThemeProvider theme={theme}>
				<NavBar />
				<Sections>
					<HomePage id="home" />
					<About />
					<Portfolio />
				</Sections>
			</MuiThemeProvider>
		);
	}
}

export default App;
