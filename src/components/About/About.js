import React, { Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";
import avatar from "./quang_avatar.png";

import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";

import GridContainer from "../GridContainer";
import GridItem from "../GridItem";
import TemplateContainer from "../TemplateContainer";
import SectionTitle from "../common/SectionTitle";

import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";

const styles = theme => ({
	title: {
		textTransform: "capitalize",
		fontWeight: "700",
		color: "hsl(0, 0%, 13%)",
		fontSize: "1em"
	},
	bigAvatar: {
		width: "200px",
		height: "200px"
	},
	fullHeight: {
		height: ""
	}
});

const DescriptionContainer = props => {
	const { classes } = props;

	return (
		<Fragment>
			<Slide right cascade>
				<div>
					<Typography
						className={classes.title}
						gutterBottom={true}
						component="h2"
					>
						Who i am
					</Typography>
					<Typography align="left" paragraph={true}>
						Hello, my name is Nguyen Le Quang, i live in Hanoi,
						Vietnam. I'm a front-end developer who is passionate
						about building user interface websites, bringing great
						user experiences, constantly learning and sharing my
						knowledge with other developers around me.
					</Typography>
					<Typography
						className={classes.title}
						gutterBottom={true}
						component="h2"
					>
						What i do
					</Typography>
					<Typography align="left" paragraph={true}>
						I've had 1+ years experience as a software developer and
						primarily working on web development. I like
						mobile-first reponsive design and always focus on using
						well-structured, clear and maintainable coding style.
					</Typography>
					<Typography
						className={classes.title}
						gutterBottom={true}
						component="h2"
					>
						My Interests
					</Typography>
					<Typography align="left" paragraph={true}>
						Outside of coding, i have a number of other interests as
						well. I love traveling and sport, especially football.
					</Typography>
				</div>
			</Slide>
		</Fragment>
	);
};

const About = props => {
	const { classes } = props;

	return (
		<TemplateContainer>
			<GridContainer
				rows="auto 1fr"
				areas={["title", "content"]}
				rowGap="30px"
			>
				<GridItem area="title">
					<SectionTitle>About Me</SectionTitle>
				</GridItem>
				<GridItem>
					<GridItem area="content">
						<Hidden mdUp>
							<GridContainer
								rows=" 200px 1fr"
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
									<DescriptionContainer classes={classes} />
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
									<Flip left>
										<Avatar
											src={avatar}
											className={classes.bigAvatar}
										/>
									</Flip>
								</GridItem>
								<GridItem
									area="description"
									justifySelf="stretch"
								>
									<DescriptionContainer classes={classes} />
								</GridItem>
							</GridContainer>
						</Hidden>
					</GridItem>
				</GridItem>
			</GridContainer>
		</TemplateContainer>
	);
};

export default withStyles(styles)(About);
