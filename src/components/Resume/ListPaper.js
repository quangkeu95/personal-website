import React, { Fragment } from "react";
import MediaQuery from "react-responsive";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import GridContainer from "../GridContainer";
import GridItem from "../GridItem";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
	heading: {
		fontWeight: "700"
	},
	subHeading: {
		color: "#E94057"
	},
	list: {
		padding: "0"
	},
	listItem: {
		padding: 0,
		marginBottom: "15px",
		position: "relative",
		"&:after": {
			content: '""',
			position: "absolute",
			boxShadow: "0 0 0 4px #000000",
			[theme.breakpoints.down(600)]: {
				left: "50%",
				top: "-7px"
			},
			[theme.breakpoints.up(600)]: {
				left: "-7px",
				top: "20px"
			},
			backgroundColor: "#fff",
			borderRadius: "50%",
			height: "11px",
			width: "11px"
		},
		[theme.breakpoints.down(600)]: {
			borderTop: "3px solid #000"
		},
		[theme.breakpoints.up(600)]: {
			borderLeft: "3px solid #000"
		}
	},
	paper: {
		width: "100%",
		padding: "10px 20px",
		boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.4)"
	},
	date: {
		[theme.breakpoints.down(600)]: {
			textAlign: "center"
		},
		[theme.breakpoints.up(600)]: {
			textAlign: "left",
			paddingTop: "10px"
		}
	}
});

const ListPaper = props => {
	const { classes, listItems } = props;

	if (listItems.length === 0) {
		return null;
	}

	return (
		<List disablePadding={true} className={classes.list}>
			{listItems.map((item, index) => (
				<ListItem key={index} style={{ padding: 0 }}>
					<MediaQuery maxWidth={600}>
						{matches => (
							<GridContainer
								columns={matches ? "auto" : "100px 1fr"}
								rows={matches ? "80px 1fr" : "auto"}
								columnGap="10px"
							>
								<GridItem
									className={classes.date}
									alignSelf={matches ? "center" : "start"}
									justifySelf={matches ? "center" : "start"}
								>
									<Typography>{item.date}</Typography>
								</GridItem>
								<GridItem className={classes.listItem}>
									<Paper className={classes.paper}>
										<Typography className={classes.heading}>
											{item.degree}
										</Typography>
										<Typography
											className={classes.subHeading}
										>
											{item.school}
										</Typography>
										<Typography>
											{item.description}
										</Typography>
									</Paper>
								</GridItem>
							</GridContainer>
						)}
					</MediaQuery>
				</ListItem>
			))}
		</List>
	);
};

export default withStyles(styles)(ListPaper);
