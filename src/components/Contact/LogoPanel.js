import React from "react";

import GridContainer from "../GridContainer";
import GridItem from "../GridItem";

import { ReactComponent as SvgFacebookLogo } from "../../assets/svg/facebook.svg";
import { ReactComponent as SvgLinkedinLogo } from "../../assets/svg/linkedin.svg";
import { ReactComponent as SvgSkypeLogo } from "../../assets/svg/skype.svg";
import { ReactComponent as SvgGithubLogo } from "../../assets/svg/github.svg";

import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

const styles = () => ({
	logo: {
		width: "24px",
		height: "24px"
	},
	container: {
		marginTop: "10px"
	},
	iconButton: {
		"&:hover": {
			backgroundColor: "#fff"
		}
	}
});

const LogoPanel = props => {
	const { classes } = props;
	return (
		<GridContainer
			columns="repeat(3, 1fr)"
			columnGap="2px"
			className={classes.container}
		>
			<GridItem>
				<Tooltip title="Facebook">
					<Button
						className={classes.iconButton}
						component="a"
						href="https://www.facebook.com/quang.keu"
						target="_blank"
					>
						<SvgFacebookLogo className={classes.logo} />
					</Button>
				</Tooltip>
			</GridItem>
			<GridItem>
				<Tooltip title="Linkedin">
					<Button
						className={classes.iconButton}
						component="a"
						href="https://www.linkedin.com/in/le-quang-nguyen-a42120135/"
						target="_blank"
					>
						<SvgLinkedinLogo className={classes.logo} />
					</Button>
				</Tooltip>
			</GridItem>

			<GridItem>
				<Tooltip title="Github">
					<Button
						className={classes.iconButton}
						component="a"
						href="https://github.com/quangkeu95"
						target="_blank"
					>
						<SvgGithubLogo className={classes.logo} />
					</Button>
				</Tooltip>
			</GridItem>
		</GridContainer>
	);
};

export default withStyles(styles)(LogoPanel);
