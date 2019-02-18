import React from "react";
import { withStyles } from "@material-ui/core";

import styled from "styled-components";

import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";

import GridContainer from "../GridContainer";
import GridItem from "../GridItem";
import TemplateContainer from "../TemplateContainer";

const styles = theme => ({
	heading: {
		fontWeight: "700"
	},
	italicFontStyle: {
		fontStyle: "italic"
	},
	subheading: {
		fontWeight: "700",
		position: "relative",
		"&:after": {
			content: '""',
			position: "absolute",
			width: "70px",
			height: "3px",
			backgroundColor: "#000",
			left: "0",
			right: "0",
			bottom: "-4px"
		}
	},
	paper: {
		width: "100%",
		padding: "10px 20px",
		boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.4)"
	},
	listItemPaper: {
		padding: 0,
		marginBottom: "15px",
		"&:after": {
			content: '""',
			position: "absolute",
			boxShadow: "0 0 0 4px #000000",
			left: "-7px",
			top: "20px",
			backgroundColor: "#fff",
			borderRadius: "50%",
			height: "11px",
			width: "11px"
		}
	},
	listEducation: {
		padding: "0",
		borderLeft: "3px solid #000"
	},
	paragraph: {
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.9em"
		},
		[theme.breakpoints.up("sm")]: {
			fontSize: "1em"
		}
	}
});

const Wrapper = styled(GridContainer)``;

const EducationList = props => {
	const { classes } = props;

	return (
		<List disablePadding={true} className={classes.listEducation}>
			<ListItem disableGutters={true} className={classes.listItemPaper}>
				<Paper className={classes.paper}>
					<Typography className={classes.heading}>
						Bachelor's Degree (Very good Grade)
					</Typography>
					<Typography className={classes.italicFontStyle}>
						Hanoi University of Science and Technology (2013 - 2017)
					</Typography>
					<Typography className={classes.paragraph}>
						My major was electronics and communications engineering
						but i found myself actually love working in software
						field.
					</Typography>
				</Paper>
			</ListItem>
		</List>
	);
};

const Resume = props => {
	const { classes } = props;

	return (
		<TemplateContainer>
			<GridContainer
				rows="auto 1fr"
				areas={["title", "content"]}
				rowGap="30px"
			>
				<GridItem area="title">
					<Typography component="h1" className={classes.heading}>
						Resume
					</Typography>
				</GridItem>
				<GridItem area="content">
					{/* Education */}
					<GridContainer rows="auto 1fr" rowGap="20px">
						<GridItem justifySelf="start">
							<Typography
								component="h2"
								className={classes.subheading}
							>
								Education
							</Typography>
						</GridItem>
						<GridItem>
							<EducationList {...props} />
						</GridItem>
					</GridContainer>

					{/* Experience */}
					<GridContainer rows="auto 1fr">
						<GridItem justifySelf="start">
							<Typography
								component="h2"
								className={classes.subheading}
							>
								Experience
							</Typography>
						</GridItem>
						<GridItem>{/* <EducationList /> */}</GridItem>
					</GridContainer>
				</GridItem>
			</GridContainer>
		</TemplateContainer>
	);
};

export default withStyles(styles)(Resume);
