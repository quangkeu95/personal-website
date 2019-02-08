import React, { Component, Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";
import avatar from "./quang_avatar.png";

import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import styled from "styled-components";

const styles = theme => ({
	title: {
		textTransform: "uppercase",
		fontWeight: "600",
		color: "hsl(0, 0%, 13%)",
		borderBottom: "2px solid red",
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.9em"
		},
		[theme.breakpoints.up("sm")]: {
			fontSize: "1em"
		}
	},
	paragraph: {
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.9em"
		},
		[theme.breakpoints.up("sm")]: {
			fontSize: "1em"
		}
	},
	borderBlack: {
		border: "1px solid #000"
	},
	borderRed: {
		border: "1px solid red"
	},
	borderGreen: {
		border: "1px solid green"
	},
	bigAvatar: {
		width: "200px",
		height: "200px",
		margin: "16px"
	},
	avatarContainer: {}
});

const Container = styled(Grid)`
	&& {
		height: 100%;
		color: hsl(0, 0%, 29%);
		letter-spacing: 0.05em;
	}
`;

const About = props => {
	const { classes } = props;

	return (
		<Container container justify="center" direction="row">
			<Grid
				container
				justify="flex-start"
				direction="row"
				alignItems="center"
				item
				xs={10}
				md={8}
				xl={6}
			>
				<Grid
					container
					item
					justify="center"
					className={classes.avatarContainer}
				>
					<Avatar src={avatar} className={classes.bigAvatar} />
				</Grid>
				<Grid container item>
					<Typography
						className={classes.title}
						gutterBottom={true}
						component="h2"
					>
						Who i am
					</Typography>
					<Typography
						align="left"
						paragraph={true}
						className={classes.paragraph}
					>
						Hello, my name is Nguyen Le Quang, i live in Hanoi, Vietnam. I'm a
						front-end developer who is passionate about building user interface
						websites, bringing great user experiences, constantly learning and
						sharing my knowledge with other developers around me.
					</Typography>
					<Typography
						className={classes.title}
						gutterBottom={true}
						component="h2"
					>
						What i do
					</Typography>
					<Typography
						align="left"
						paragraph={true}
						className={classes.paragraph}
					>
						I've had 1+ years experience as a developer, I primarily focus on
						web development and web design. I like mobile-first reponsive design
						and single page applications. I find the process of design and
						developing user-friendly website fascinating.
					</Typography>
					<Typography
						className={classes.title}
						gutterBottom={true}
						component="h2"
					>
						My Interests
					</Typography>
					<Typography
						align="left"
						paragraph={true}
						className={classes.paragraph}
					>
						Outside of learning about web development, i have a number of other
						interests as well. I love traveling and photography, i want to
						record every moment, take pictures everywhere i go. Just like the
						others, I also go to gym or play football in my leisure time.
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default withStyles(styles)(About);
