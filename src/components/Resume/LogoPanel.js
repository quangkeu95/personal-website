import React, { Fragment } from "react";
import MediaQuery from "react-responsive";

import GridContainer from "../GridContainer";
import GridItem from "../GridItem";
import SkillIcon from "./SkillIcon";
import Hidden from "@material-ui/core/Hidden";

import { ReactComponent as SvgReactLogo } from "./react-logo.svg";
import { ReactComponent as SvgBootstrapLogo } from "./bootstrap-logo.svg";
import { ReactComponent as SvgHtmlLogo } from "./html5-logo.svg";
import { ReactComponent as SvgCssLogo } from "./css3-logo.svg";
import { ReactComponent as SvgJavascriptLogo } from "./javascript-logo.svg";
import { ReactComponent as SvgDockerLogo } from "./docker-logo.svg";
import { ReactComponent as SvgJqueryLogo } from "./jquery-logo.svg";
import pngStyledComponentLogo from "./styled-components.png";

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

const MobileLogoContainer = props => {};

const LogoPanel = props => {
	const { classes } = props;
	return (
		<Fragment>
			<MediaQuery maxWidth={600}>
				<GridContainer rowGap="8px">
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
							icon={
								<SvgJavascriptLogo className={classes.logo} />
							}
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
							label="Docker"
							icon={<SvgDockerLogo className={classes.logo} />}
						/>
					</GridItem>
					<GridItem>
						<SkillIcon
							label="Styled Components"
							icon={
								<PngStyledComponentLogo
									className={classes.logo}
								/>
							}
						/>
					</GridItem>
				</GridContainer>
			</MediaQuery>
			<MediaQuery minWidth={600} maxWidth={1024}>
				<GridContainer rowGap="8px" columns="1fr 1fr">
					<GridItem>
						<SkillIcon
							label="HTML"
							icon={<SvgHtmlLogo className={classes.logo} />}
						/>
						<SkillIcon
							label="CSS"
							icon={<SvgCssLogo className={classes.logo} />}
						/>
						<SkillIcon
							label="Javascript"
							icon={
								<SvgJavascriptLogo className={classes.logo} />
							}
						/>
					</GridItem>
					<GridItem>
						<SkillIcon
							label="JQuery"
							icon={<SvgJqueryLogo className={classes.logo} />}
						/>
						<SkillIcon
							label="React/Redux"
							icon={<SvgReactLogo className={classes.logo} />}
						/>
						<SkillIcon
							label="Bootstrap"
							icon={<SvgBootstrapLogo className={classes.logo} />}
						/>
					</GridItem>
				</GridContainer>
			</MediaQuery>
		</Fragment>
	);
};

export default withStyles(styles)(LogoPanel);
