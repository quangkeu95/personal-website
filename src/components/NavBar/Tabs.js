import React from "react";
import styled from "styled-components";
import Tabs from "@material-ui/core/Tabs";

const CustomTab = props => {
	return (
		<Tabs
			className={props.className}
			onChange={props.onChange}
			value={props.value}
		>
			{props.children}
		</Tabs>
	);
};

const StyledTab = styled(CustomTab)`
	&& {
		color: ${({ isOnTop }) => (isOnTop === true ? "#fff" : "#000")};
	}
`;

export default StyledTab;
