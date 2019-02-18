import React from "react";
import styled from "styled-components";
import Tabs from "@material-ui/core/Tabs";

import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
	indicator: {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "transparent",
		"& > div": {
			maxWidth: "50px",
			width: "80%",
			backgroundColor: "#fff"
		}
	}
});

const CustomTab = props => {
	const { isOnTop, ...rest } = props;
	return (
		<Tabs {...rest} TabIndicatorProps={{ children: <div /> }}>
			{props.children}
		</Tabs>
	);
};

const StyledTab = styled(CustomTab)`
	&& {
		color: ${({ isOnTop }) => (isOnTop === true ? "#fff" : "#000")};
	}
`;

export default withStyles(styles)(StyledTab);
