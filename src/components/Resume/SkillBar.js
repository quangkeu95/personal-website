import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

import GridContainer from "../GridContainer";
import GridItem from "../GridItem";

const PercentageBar = styled.div`
	position: relative;
	width: 100%;
	height: 5px;
	background-color: #000;

	&::after {
		content: "";
		position: absolute;
		width: ${({ percentage }) => (percentage ? `${percentage}%` : "0%")};
		height: 5px;
		background-color: green;
		left: 0;
		bottom: 0;
	}
`;

const SkillBar = props => {
	const { title, percentage = 0 } = props;

	return (
		<Fragment>
			<GridContainer columns="1fr 1fr" styles={{ marginBottom: "3px" }}>
				<GridItem justifySelf="start">
					<Typography>{title}</Typography>
				</GridItem>
				<GridItem justifySelf="end">
					<Typography>{`${percentage}%`}</Typography>
				</GridItem>
			</GridContainer>
			<PercentageBar percentage={percentage} />
		</Fragment>
	);
};

SkillBar.propTypes = {
	title: PropTypes.string,
	percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default SkillBar;
