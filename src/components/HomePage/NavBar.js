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
		min-height: 7vh;
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
	},
	tabIndicator: {
		background: "#E94057", /* fallback for old browsers */
 		// background: "-webkit-linear-gradient(to right, #8a2387, #e94057, #f27121)", /* Chrome 10-25, Safari 5.1-6 */
  		// background: "linear-gradient(to right, #8a2387, #e94057, #f27121)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
});

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tab: 0
		}
	}

	handleChangeTab = (event, value) => {
		this.setState({
			tab: value
		});
	}
	
	render() {
		const { classes } = this.props;
		const { tab } = this.state;

		return (
			<StyledAppBar position="fixed">
				<Hidden mdUp>
					<Grid container alignItems="center">
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
							<Tabs centered value={tab} onChange={this.handleChangeTab}
								classes={{
									indicator: classes.tabIndicator
								}}>
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
}

export default withStyles(styles)(NavBar);