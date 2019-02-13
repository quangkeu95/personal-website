import React from "react";
import styled from "styled-components";
import Tab from "@material-ui/core/Tab";

const CustomTab = props => {
	return (
		<Tab
			className={props.className}
			component="a"
			label={props.label}
			key={props.key}
		>
			{props.children}
		</Tab>
	);
};

const StyledTab = styled(CustomTab)`
	&& {
		color: ${({ isOnTop }) => (isOnTop === true ? "#fff" : "#000")};
		font-weight: 700;
		opacity: 1;
	}
`;

export default StyledTab;
