import React from "react";
import { withStyles } from "@material-ui/core";

import styled from "styled-components";

import Typography from "@material-ui/core/Typography";

import GridContainer from "../GridContainer";
import GridItem from "../GridItem";
import TemplateContainer from "../TemplateContainer";

const styles = {};

const Wrapper = styled(GridContainer)``;

const Portfolio = props => {
	return (
		<TemplateContainer>
			<GridContainer rows="10vh 1fr" areas={["title", "content"]}>
				<GridItem area="title">
					<Typography>Resume</Typography>
				</GridItem>
				<GridItem area="content">
					<GridContainer>a</GridContainer>
				</GridItem>
			</GridContainer>
		</TemplateContainer>
	);
};

export default withStyles(styles)(Portfolio);
