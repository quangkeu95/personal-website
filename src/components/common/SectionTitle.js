import React from "react";
import Typography from "@material-ui/core/Typography";
import styled, { keyframes } from "styled-components";
import Flip from "react-reveal/Flip";

const SectionTitle = props => {
	const { className, children } = props;

	return (
		<Flip bottom>
			<Typography component="h1" className={className}>
				{children}
			</Typography>
		</Flip>
	);
};

const spreadOut = keyframes`
    0% {
        width: 0%;
    }
    100% {
        width: 50px;
    }
`;

const StyledSectionTitle = styled(SectionTitle)`
	&& {
		font-weight: 700;
		position: relative;
		::after {
			content: "";
			position: absolute;
			top: 50%;
			left: 105%;
			width: 50px;
			height: 2px;
			background-color: #000;
			animation: ${spreadOut} 1s ease-out forwards;
		}
		::before {
			content: "";
			position: absolute;
			top: 50%;
			right: 105%;
			width: 50px;
			height: 2px;
			background-color: #000;
			animation: ${spreadOut} 1s ease-out forwards;
		}
	}
`;

export default StyledSectionTitle;
