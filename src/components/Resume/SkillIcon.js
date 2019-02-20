import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import GridContainer from "../GridContainer";
import GridItem from "../GridItem";

const styles = () => ({
	label: {
		fontWeight: "700"
	}
});

const SkillIcon = props => {
	const { label, icon, classes } = props;

	return (
		<GridContainer columns="1fr 1fr">
			<GridItem>{icon}</GridItem>
			<GridItem justifySelf="start" className={classes.label}>
				{label}
			</GridItem>
		</GridContainer>
	);
};

SkillIcon.propTypes = {
	icon: PropTypes.element.isRequired,
	label: PropTypes.string.isRequired
};

export default withStyles(styles)(SkillIcon);
