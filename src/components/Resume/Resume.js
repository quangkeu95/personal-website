import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import GridContainer from "../GridContainer";
import GridItem from "../GridItem";
import TemplateContainer from "../TemplateContainer";
import ResumeBlock from "./Block";
import ListPaper from "./ListPaper";
import LogoPanel from "./LogoPanel";

const styles = theme => ({
	heading: {
		fontWeight: "700"
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
	fullWidth: {
		width: "100%"
	},
	paper: {
		width: "100%",
		padding: "10px 10px",
		boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.4)"
	},
	chip: {
		width: "130px",
		fontWeight: "700",
		height: "40px",
		"& > span": {
			paddingLeft: "0"
		}
	},
	downloadButton: {
		fontSize: "1em",
		"&:hover": {
			backgroundColor: "#E94057",
			color: "#fff"
		}
	}
});

const educationArray = [
	{
		date: "September 2013 to September 2017",
		degree: "Bachelor's Degree (Very good Grade)",
		school: "Hanoi University of Science and Technology",
		description: `My major was electronics and telecommunications engineering but
		i found myself actually love working in software field.`
	}
];

const experienceArray = [
	{
		date: "October 2017 to March 2019",
		degree: "Software Developer",
		school: "VNPT Technology",
		description: `I have experiences working with CI/CD tools such as Jenkins,
		Docker, Kubernetes, also i'm familiar with Linux system and
		command line. Most of the time working in VNPT Technology, my
		role is software developer, i worked in team to make management
		web with Javascript, JQuery, AngularJS and Bootstrap.`
	}
];
const Resume = props => {
	const { classes } = props;

	const handleDownloadResume = () => {
		window.open("quangkeu95-resume.pdf");
	};

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
					<ResumeBlock title="Education">
						<ListPaper listItems={educationArray} />
					</ResumeBlock>

					{/* Experience */}
					<ResumeBlock title="Experience">
						<ListPaper listItems={experienceArray} />
					</ResumeBlock>

					{/* Skills */}
					<ResumeBlock title="Skills">
						<Paper className={classes.paper}>
							<LogoPanel />
						</Paper>
					</ResumeBlock>

					{/* Download CV button */}
					<GridContainer>
						<GridItem>
							<Button
								onClick={handleDownloadResume}
								variant="outlined"
								className={classes.downloadButton}
							>
								Download Resume
							</Button>
						</GridItem>
					</GridContainer>
				</GridItem>
			</GridContainer>
		</TemplateContainer>
	);
};

export default withStyles(styles)(Resume);
