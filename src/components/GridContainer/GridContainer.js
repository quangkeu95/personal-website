import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const formatAreas = areas => areas.map(area => `"${area}"`).join(" ");

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: ${props => props.columns || "auto"};
	grid-template-rows: ${props => props.rows || "auto"};
	${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};
	grid-column-gap: ${props => props.columnGap || "0"};
	grid-row-gap: ${props => props.rowGap || "0"};
	${({ gap }) => gap && `grid-gap: ${gap}`};
	${({ justifyContent }) =>
		justifyContent && `justify-content: ${justifyContent}`};
	${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
	${({ justifyItems }) => justifyItems && `justify-items: ${justifyItems}`};
	${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
`;

GridContainer.propTypes = {
	display: PropTypes.string,
	columns: PropTypes.string,
	rows: PropTypes.string,
	areas: PropTypes.arrayOf(PropTypes.string),
	columnGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	rowGap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	justifyContent: PropTypes.string,
	alignContent: PropTypes.string,
	justifyItems: PropTypes.string,
	alignItems: PropTypes.string
};

export default GridContainer;
