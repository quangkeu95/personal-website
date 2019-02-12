import React from "react";
import styled from "styled-components";
import GridContainer from "../GridContainer";
import GridItem from "../GridItem";

const Wrapper = styled(GridContainer)`
	&& {
		height: 100%;
		color: hsl(0, 0%, 29%);
		/* letter-spacing: 0.05em; */
		margin-top: 50px;
		line-height: 1.5em;
	}
`;

const TemplateContainer = props => {
	return (
		<Wrapper areas={[". content ."]} columns="15vw 1fr 15vw">
			<GridItem area="content">{props.children}</GridItem>
		</Wrapper>
	);
};

export default TemplateContainer;
