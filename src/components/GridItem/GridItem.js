import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const GridItem = styled.div`
	${({ columnStart }) => columnStart && `grid-column-start: ${columnStart}`};
	${({ rowStart }) => rowStart && `grid-column-start: ${rowStart}`};
	${({ columnEnd }) => columnEnd && `grid-column-start: ${columnEnd}`};
	${({ rowEnd }) => rowEnd && `grid-column-start: ${rowEnd}`};
	${({ area }) => area && `grid-area: ${area}`};
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
