import React, { Fragment } from "react";
import styled from "styled-components";

import { withStyles } from "@material-ui/core/styles";

import Hidden from "@material-ui/core/Hidden";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import backDropImg from "./quang_sapa.jpg";

import GridContainer from "../GridContainer";
import GridItem from "../GridItem";

const styles = theme => ({
	media: {
		backgroundPosition: "top",
		minHeight: "65vh"
	},
	homePanel: {
		paddingBottom: "15px",
		height: "calc(100vh - 60px)"
	},
	backDropPanel: {
		// height: "calc(100vh - 60px)",
		height: "100vh",
		// background: `linear-gradient(90deg, rgba(212,211,211,1) 0%, rgba(255,255,255,1) 50%), url(${backDropImg})`,
		backgroundImage: `url(${backDropImg})`,
		backgroundPosition: "top",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat"
	},
	backDropTitle: {
		paddingTop: "10vh"
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
		fontFamily: '"Sanchez", serif',
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
		opacity: 0.3;
	}
`;

const HomePage = props => {
	const { classes } = props;

	return (
		<Fragment>
			{/* For tablet and phone */}
			<Hidden mdUp>
				<Wrapper className={classes.backDropPanel}>
					<GridItem>
						<Typography className={classes.title}>
							Hi there! I'm Quang.
						</Typography>
					</GridItem>
				</Wrapper>
				{/* <Grid className={classes.homePanel}>
					<CardMedia className={classes.media} image={backDropImg} />
					<Grid container item justify="center">
						<CardContent>
							<Typography className={classes.title}>
								Hi there! I'm Quang.
							</Typography>
							<Typography
								inline={false}
								className={classes.subTitle}
							>
								Software Developer
							</Typography>
						</CardContent>
					</Grid>
					<Grid container item justify="center">
						<Button className={classes.hireMeBtn}>
							Get to know me
						</Button>
					</Grid>
				</Grid> */}
			</Hidden>

			{/* For desktop  */}
			<Hidden smDown>
				{/* <Grid className={classes.backDropPanel} container>
					<Grid
						item
						md={6}
						lg={6}
						container
						justify="flex-start"
						direction="column"
						className={classes.backDropTitle}
					>
						<Grid container item justify="center">
							<CardContent>
								<Typography className={classes.title}>
									Hi there, I'm Quang
								</Typography>
								<Typography className={classes.subTitle}>
									Front-end Developer
								</Typography>
							</CardContent>
						</Grid>
						<Grid container item justify="center">
							<Button className={classes.hireMeBtn}>Get to know me</Button>
						</Grid>
					</Grid>
				</Grid> */}
				<Wrapper className={classes.backDropPanel}>
					<GridItem>abc</GridItem>
				</Wrapper>
			</Hidden>
		</Fragment>
	);
};

export default withStyles(styles)(HomePage);
