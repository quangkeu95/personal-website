import React from "react";
import GridContainer from "../GridContainer";
import GridItem from "../GridItem";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
	container: {
		marginBottom: "15px"
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
	}
});

const Block = props => {
	const { classes, title } = props;

	return (
		<GridContainer
			rows="auto 1fr"
			rowGap="20px"
			className={classes.container}
		>
			<GridItem justifySelf="start">
				<Typography component="h2" className={classes.subheading}>
					{title}
				</Typography>
			</GridItem>
			<GridItem justifySelf="start" style={{ width: "100%" }}>
				{props.children}
			</GridItem>
		</GridContainer>
	);
};

export default withStyles(styles)(Block);
