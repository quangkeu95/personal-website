import React, { Fragment } from "react";
import MediaQuery from "react-responsive";

import GridContainer from "../GridContainer";
import GridItem from "../GridItem";
import SkillIcon from "./SkillIcon";

import { ReactComponent as SvgReactLogo } from "../../assets/svg/react-logo.svg";
import { ReactComponent as SvgBootstrapLogo } from "../../assets/svg/bootstrap-logo.svg";
import { ReactComponent as SvgHtmlLogo } from "../../assets/svg/html5-logo.svg";
import { ReactComponent as SvgCssLogo } from "../../assets/svg/css3-logo.svg";
import { ReactComponent as SvgJavascriptLogo } from "../../assets/svg/javascript-logo.svg";
import { ReactComponent as SvgDockerLogo } from "../../assets/svg/docker-logo.svg";
import { ReactComponent as SvgJqueryLogo } from "../../assets/svg/jquery-logo.svg";
import pngStyledComponentLogo from "../../assets/png/styled-components.png";

import { withStyles } from "@material-ui/core/styles";

const PngStyledComponentLogo = props => {
	return <img src={pngStyledComponentLogo} alt="" {...props} />;
};

const styles = () => ({
	logo: {
		width: "64px",
		height: "64px",
		marginRight: "20px"
	},
	gridItem: {
		maxWidth: "250px"
	}
});

const GridItemList = ({ classes }) => {
	return (
		<Fragment>
			<GridItem>
				<SkillIcon
					label="HTML"
					icon={<SvgHtmlLogo className={classes.logo} />}
				/>
			</GridItem>
			<GridItem>
				<SkillIcon
					label="CSS"
					icon={<SvgCssLogo className={classes.logo} />}
				/>
			</GridItem>
			<GridItem>
				<SkillIcon
					label="Javascript"
					icon={<SvgJavascriptLogo className={classes.logo} />}
				/>
			</GridItem>
			<GridItem>
				<SkillIcon
					label="JQuery"
					icon={<SvgJqueryLogo className={classes.logo} />}
				/>
			</GridItem>
			<GridItem>
				<SkillIcon
					label="React/Redux"
					icon={<SvgReactLogo className={classes.logo} />}
				/>
			</GridItem>
			<GridItem>
				<SkillIcon
					label="Bootstrap"
					icon={<SvgBootstrapLogo className={classes.logo} />}
				/>
			</GridItem>
			<GridItem>
				<SkillIcon
					label="Styled Components"
					icon={<PngStyledComponentLogo className={classes.logo} />}
				/>
			</GridItem>
			<GridItem>
				<SkillIcon
					label="Docker"
					icon={<SvgDockerLogo className={classes.logo} />}
				/>
			</GridItem>
		</Fragment>
	);
};

const LogoPanel = props => {
	const { classes } = props;
	return (
		<Fragment>
			<MediaQuery maxWidth={600}>
				<GridContainer rowGap="10px">
					<GridItemList classes={classes} />
				</GridContainer>
			</MediaQuery>
			<MediaQuery minWidth={600} maxWidth={1224}>
				<GridContainer
					rowGap="10px"
					columns="1fr 1fr"
					rows="repeat(4, 1fr)"
				>
					<GridItemList classes={classes} />
				</GridContainer>
			</MediaQuery>
			<MediaQuery minWidth={1224}>
				<GridContainer
					rowGap="10px"
					columns="1fr 1fr 1fr 1fr"
					rows="repeat(2, 1fr)"
				>
					<GridItemList classes={classes} />
				</GridContainer>
			</MediaQuery>
		</Fragment>
	);
};

export default withStyles(styles)(LogoPanel);
