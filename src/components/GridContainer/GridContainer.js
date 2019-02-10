import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const formatAreas = areas => areas.map(area => `"${area}"`).join(" ");

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: ${props => props.columns || "auto"};
	grid-template-rows: ${props => props.rows || "auto"};
	grid-template-areas: ${props => `${formatAreas(props.areas)}` || "auto"};
`;

GridContainer.propTypes = {
	display: PropTypes.string,
	columns: PropTypes.string,
	rows: PropTypes.string,
	areas: PropTypes.arrayOf(PropTypes.string)
};

export default GridContainer;
