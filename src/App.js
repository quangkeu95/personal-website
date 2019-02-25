import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import styled from "styled-components";
import RootRef from "@material-ui/core/RootRef";

import { TabIndexContext } from "./context/TabIndexContext";

const theme = createMuiTheme({
	typography: {
		useNextVariants: true,
		fontFamily: '"Open Sans", sans-serif;',
		fontSize: "1em"
	}
});

const Sections = styled.div`
	&& {
		/* margin-top: 60px; */
		font-family: Open Sans, sans-serif;
		font-size: 1em;
	}
`;

class App extends Component {
	constructor(props) {
		super(props);
		this.homeRef = React.createRef();
		this.aboutRef = React.createRef();
		this.resumeRef = React.createRef();
		this.contactRef = React.createRef();

		this.state = {
			tabIndex: 0
		};
	}

	changeTabIndex = value => {
		this.setState({
			tabIndex: value
		});
	};

	render() {
		const { classes } = this.props;

		return (
			<MuiThemeProvider theme={theme}>
				<TabIndexContext.Provider
					value={{
						tabIndex: this.state.tabIndex,
						changeTabIndex: this.changeTabIndex
					}}
				>
					<NavBar
						homeRef={this.homeRef}
						aboutRef={this.aboutRef}
						resumeRef={this.resumeRef}
						contactRef={this.contactRef}
					/>
					<Sections>
						<RootRef rootRef={this.homeRef}>
							<HomePage aboutRef={this.aboutRef} />
						</RootRef>
						<RootRef rootRef={this.aboutRef}>
							<About />
						</RootRef>
						<RootRef rootRef={this.resumeRef}>
							<Resume />
						</RootRef>
						<RootRef rootRef={this.contactRef}>
							<Contact />
						</RootRef>
						<Footer />
					</Sections>
				</TabIndexContext.Provider>
			</MuiThemeProvider>
		);
	}
}

App.propTypes = {
	tabIndex: PropTypes.number
};

export default App;
