import React, { Fragment } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
	list: {
		padding: "0",
		borderLeft: "3px solid #000"
	},
	listItem: {
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
	paper: {
		width: "100%",
		padding: "10px 20px",
		boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.4)"
	}
});

const ListPaper = props => {
	const { classes, listItems } = props;

	return (
		<Fragment>
			{listItems && (
				<List disablePadding={true} className={classes.list}>
					{listItems.map((item, index) => (
						<ListItem
							disableGutters={true}
							className={classes.listItem}
							key={index}
						>
							<Paper className={classes.paper}>{item}</Paper>
						</ListItem>
					))}
				</List>
			)}
		</Fragment>
	);
};

export default withStyles(styles)(ListPaper);
