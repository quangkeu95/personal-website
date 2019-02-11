import React, { Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";
import avatar from "./quang_avatar.png";

import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

import GridContainer from "../GridContainer";
import GridItem from "../GridItem";

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
	bigAvatar: {
		width: "200px",
		height: "200px"
	},
	fullHeight: {
		height: ""
	}
});

const Wrapper = styled(GridContainer)`
	&& {
		height: 100%;
		color: hsl(0, 0%, 29%);
		letter-spacing: 0.05em;
	}
`;

const About = props => {
	const { classes } = props;

	return (
		<Wrapper areas={[". content ."]} columns="15vw 1fr 15vw">
			<GridItem area="content">
				<Hidden mdUp>
					<GridContainer
						rows="200px 1fr"
						areas={["avatar", "description"]}
						rowGap="20px"
					>
						<GridItem area="avatar">
							<Avatar
								src={avatar}
								className={classes.bigAvatar}
							/>
						</GridItem>
						<GridItem area="description">
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
								Hello, my name is Nguyen Le Quang, i live in
								Hanoi, Vietnam. I'm a front-end developer who is
								passionate about building user interface
								websites, bringing great user experiences,
								constantly learning and sharing my knowledge
								with other developers around me.
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
								I've had 1+ years experience as a developer, I
								primarily focus on web development and web
								design. I like mobile-first reponsive design and
								single page applications. I find the process of
								design and developing user-friendly website
								fascinating.
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
								Outside of learning about web development, i
								have a number of other interests as well. I love
								traveling and photography, i want to record
								every moment, take pictures everywhere i go.
								Just like the others, I also go to gym or play
								football in my leisure time.
							</Typography>
						</GridItem>
					</GridContainer>
				</Hidden>
				<Hidden smDown>
					<GridContainer
						columns="20vw 1fr"
						areas={["avatar description"]}
						columnGap="20px"
						className={classes.fullHeight}
					>
						<GridItem area="avatar">
							<Avatar
								src={avatar}
								className={classes.bigAvatar}
							/>
						</GridItem>
						<GridItem area="description" justifySelf="stretch">
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
								Hello, my name is Nguyen Le Quang, i live in
								Hanoi, Vietnam. I'm a front-end developer who is
								passionate about building user interface
								websites, bringing great user experiences,
								constantly learning and sharing my knowledge
								with other developers around me.
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
								I've had 1+ years experience as a developer, I
								primarily focus on web development and web
								design. I like mobile-first reponsive design and
								single page applications. I find the process of
								design and developing user-friendly website
								fascinating.
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
								Outside of learning about web development, i
								have a number of other interests as well. I love
								traveling and photography, i want to record
								every moment, take pictures everywhere i go.
								Just like the others, I also go to gym or play
								football in my leisure time.
							</Typography>
						</GridItem>
					</GridContainer>
				</Hidden>
			</GridItem>
		</Wrapper>
	);
};

export default withStyles(styles)(About);
