import React from "react";
import MediaQuery from "react-responsive";

import TemplateContainer from "../TemplateContainer";
import GridContainer from "../GridContainer";
import GridItem from "../GridItem";
import LogoPanel from "./LogoPanel";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
	heading: {
		fontWeight: "700"
	},
	title: {},
	logoPanel: {
		minWidth: "200px",
		maxWidth: "500px"
	},
	email: {
		fontWeight: "700"
	},
	phone: {
		textAlign: "center"
	}
});

const Contact = props => {
	const { classes } = props;

	return (
		<TemplateContainer>
			<GridContainer
				rows="auto 1fr"
				areas={["title", "content"]}
				rowGap="30px"
			>
				<GridItem>
					<Typography component="h1" className={classes.heading}>
						Get in touch
					</Typography>
				</GridItem>
				<MediaQuery maxWidth={900}>
					{matches => {
						return (
							<GridItem
								justifySelf={matches ? "stretch" : "center"}
								style={{ width: "100%" }}
							>
								<GridContainer
									rowGap="10px"
									rows={matches ? "repeat(2, 1fr)" : "auto"}
									columns={matches ? "auto" : "1fr 1fr"}
								>
									<GridItem justifySelf="center">
										<Typography className={classes.email}>
											quangkeu95@gmail.com
										</Typography>
										<Typography className={classes.phone}>
											(+84) 36-871-7668
										</Typography>
									</GridItem>

									<GridItem className={classes.logoPanel}>
										<LogoPanel />
									</GridItem>
								</GridContainer>
							</GridItem>
						);
					}}
				</MediaQuery>
			</GridContainer>
		</TemplateContainer>
	);
};

export default withStyles(styles)(Contact);
