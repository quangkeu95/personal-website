import React, { Fragment, useContext } from "react";
import styled from "styled-components";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import GridContainer from "../GridContainer";
import GridItem from "../GridItem";

import { TabIndexContext } from "../../context/TabIndexContext";

import { styles } from "./HomePage.style";

const Wrapper = styled(GridContainer)`
	&&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: #000;
		opacity: 0.7;
	}
`;

const HomePage = props => {
	const { classes, aboutRef } = props;
	const { changeTabIndex } = useContext(TabIndexContext);

	const handleScrollToAbout = () => {
		changeTabIndex(1); // Change to About tab
		// aboutRef.current.scrollIntoView({
		// 	behavior: "smooth",
		// 	block: "start"
		// });

		window.scrollTo(0, aboutRef.current.offsetTop);

		// scroller.scrollTo(aboutRef.current.offsetTop, {
		// 	smooth: true,
		// 	delay: 0,
		// 	duration: 1000
		// });
	};

	return (
		<Fragment>
			<Wrapper className={classes.backDropPanel} />
			<GridContainer className={classes.backDrop} rows="70vh 30vh">
				<GridItem>
					<Typography className={classes.title} component="h1">
						Hi there! I'm Quang.
					</Typography>
					<Typography
						inline={false}
						className={classes.subTitle}
						component="h3"
					>
						Front-end Developer
					</Typography>
				</GridItem>
				<GridItem>
					<Button
						className={classes.hireMeBtn}
						onClick={handleScrollToAbout}
					>
						Get to know me
					</Button>
				</GridItem>
			</GridContainer>
		</Fragment>
	);
};

export default withStyles(styles)(HomePage);
