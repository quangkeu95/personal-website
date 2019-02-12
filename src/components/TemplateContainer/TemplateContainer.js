import React from "react";
import styled from "styled-components";
import GridContainer from "../GridContainer";
import GridItem from "../GridItem";

const Wrapper = styled.div`
	&& {
		height: 100%;
		color: hsl(0, 0%, 29%);
		/* letter-spacing: 0.05em; */
		margin: 50px 15vw 0;
		line-height: 1.5em;
	}
`;

const TemplateContainer = props => {
	return <Wrapper>{props.children}</Wrapper>;
};

export default TemplateContainer;
