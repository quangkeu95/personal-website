import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const GridItem = styled.div`
	grid-column-start: ${props =>
		props.columnStart ? props.columnStart : "auto"};
	grid-column-end: ${props => (props.columnEnd ? props.columnEnd : "auto")};
	grid-row-start: ${props => (props.rowStart ? props.rowStart : "auto")};
	grid-row-end: ${props => (props.rowEnd ? props.rowEnd : "auto")};
	grid-area: ${props => (props.area ? props.area : "auto")};
	justify-self: ${props => props.justifySelf || "center"};
	align-self: ${props => props.alignSelf || "center"};
`;

GridItem.propTypes = {
	columnStart: PropTypes.string,
	columnEnd: PropTypes.string,
	rowStart: PropTypes.string,
	rowEnd: PropTypes.string,
	area: PropTypes.string,
	justifySelf: PropTypes.string,
	alignSelf: PropTypes.string
};

export default GridItem;
