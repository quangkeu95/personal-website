import React, { Fragment, useContext } from "react";
import styled from "styled-components";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import backDropImg from "./rsz_quang_sapa.jpg";

import GridContainer from "../GridContainer";
import GridItem from "../GridItem";

import { TabIndexContext } from "../../context/TabIndexContext";

const styles = theme => ({
	backDropPanel: {
		// height: "calc(100vh - 60px)",
		height: "100vh",
		// background: `linear-gradient(90deg, <r></r>gba(212,211,211,1) 0%, rgba(255,255,255,1) 50%), url(${backDropImg})`,
		backgroundImage: `url(${backDropImg})`,
		backgroundPosition: "top",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundAttachment: "fixed"
	},
	backDrop: {
		height: "100%",
		width: "100%",
		position: "absolute",
		left: "0",
		top: "0"
	},
	title: {
		// fontFamily: '"Sanchez", serif',
		color: "#fff",
		textAlign: "center",
		fontWeight: "700",
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.6em"
		},
		[theme.breakpoints.up("sm")]: {
			fontSize: "2em"
		},
		[theme.breakpoints.up("xl")]: {
			fontSize: "2.5em"
		}
	},
	subTitle: {
		// fontFamily: '"Sanchez", serif',
		color: "#fff",
		textAlign: "center",
		fontWeight: "400",
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.9em"
		},
		[theme.breakpoints.up("sm")]: {
			fontSize: "1em"
		},
		[theme.breakpoints.up("xl")]: {
			fontSize: "1.2em"
		}
	},
	hireMeBtn: {
		background: "#8A2387" /* fallback for old browsers */,
		background:
			"-webkit-linear-gradient(to right, #F27121, #E94057, #8A2387)" /* Chrome 10-25, Safari 5.1-6 */,
		background:
			"linear-gradient(to right, #F27121, #E94057, #8A2387)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
		color: "#FFF",
		letterSpacing: "0.1em",
		[theme.breakpoints.down("sm")]: {
			padding: "5px 30px",
			borderRadius: "10px",
			fontSize: "0.8em"
		},
		[theme.breakpoints.up("sm")]: {
			padding: "10px 50px",
			borderRadius: "19px",
			fontSize: "1em"
		},
		[theme.breakpoints.up("xl")]: {
			fontSize: "1.2em"
		}
	}
});

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
		aboutRef.current.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
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
