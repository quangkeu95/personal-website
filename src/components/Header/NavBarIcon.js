import React, { Component } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import PropTypes from "prop-types";

const Wrapper = styled.div`
	height: inherit;
	flex-flow: row wrap;
	justify-content: flex-end;
	align-items: center;
	padding: 0 20px;

	display: none;

	${media.lessThan("768px")`
        display: flex;
    `}
`;

const Icon = ({ className, children }) => (
	<a className={className}>{children}</a>
);

const StyledIcon = styled(Icon)`
	display: none;
	cursor: pointer;

	${media.lessThan("768px")`
        display: block;
    `}
`;

export default class NavBarIcon extends Component {
	constructor(props) {
		super(props);
	}

	handleClick = e => {
		e.preventDefault();
	};

	render() {
		return (
			<Wrapper>
				<StyledIcon className="fa fa-bars fa-lg" />
			</Wrapper>
		);
	}
}

NavBarIcon.propTypes = {
	navBarMenuIsOpen: PropTypes.boolean
};
