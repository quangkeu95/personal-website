import React, { Component, Fragment } from "react";
import styled from "styled-components";
import NavBar from './NavBar';
import HomePanel from './HomePanel';

class HomePage extends Component {
	render() {
		return (
			<Fragment>
				<NavBar />
				<HomePanel />
			</Fragment>
		);
	}
}

export default HomePage;