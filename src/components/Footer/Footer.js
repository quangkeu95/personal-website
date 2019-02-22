import React from "react";

import TemplateContainer from "../TemplateContainer";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
	footer: {
		textAlign: "center",
		marginBottom: "20px"
	}
});

const Emoji = props => {
	const { symbol, label, ...rest } = props;
	return (
		<span
			role="img"
			{...rest}
			aria-label={label ? label : ""}
			aria-hidden={label ? "false" : "true"}
		>
			{symbol}
		</span>
	);
};

const Footer = props => {
	const { classes } = props;

	return (
		<TemplateContainer>
			<Typography className={classes.footer}>
				Made with <Emoji symbol="🙌" label="raising hand" />
			</Typography>
		</TemplateContainer>
	);
};

export default withStyles(styles)(Footer);
