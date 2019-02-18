import React from "react";
import styled from "styled-components";
import Tab from "@material-ui/core/Tab";

import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
	root: {
		color: "#ddd"
	}
});

const CustomTab = props => {
	const { isOnTop, ...rest } = props;
	return <Tab {...rest}>{props.children}</Tab>;
};

const StyledTab = styled(CustomTab)`
	&& {
		color: ${({ isOnTop }) => (isOnTop === true ? "#fff" : "#000")};
		font-weight: 700;
		opacity: 1;
	}
`;

export default withStyles(styles)(StyledTab);
