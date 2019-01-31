import React, { Fragment } from 'react';

import { withStyles } from "@material-ui/core/styles";

import Hidden from "@material-ui/core/Hidden";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography";

import backDropImg from "./quang_sapa.jpg";


const styles = (theme) => ({
    media: {
        backgroundPosition: "top",
        minHeight: "65vh",
    },
    homePanel: {
        paddingBottom: "15px",
        marginTop: "7vh",
        boxShadow: "none",
    },
    backDropPanel: {
        minHeight: "calc(100vh - 7vh)",
        marginTop: "7vh",
        backgroundImage: `url(${backDropImg})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
    }, 
    title: {
        fontFamily: "\"Sanchez\", serif",
        textAlign: "center",
        fontWeight: "550",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5em"
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: "2em",
        },
    },
    subTitle: {
        fontFamily: "\"Sanchez\", serif",
        textAlign: "center",
        fontWeight: "400",
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.8em"
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: "1em",
        },
    },
    hireMeBtn: {
        background: "#8A2387",  /* fallback for old browsers */
        background: "-webkit-linear-gradient(to right, #F27121, #E94057, #8A2387)",  /* Chrome 10-25, Safari 5.1-6 */
        background: "linear-gradient(to right, #F27121, #E94057, #8A2387)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        color: "#FFF",
        letterSpacing: "0.1em",
        [theme.breakpoints.down("sm")]: {
            padding: "5px 30px",
            borderRadius: "10px",
        },
        [theme.breakpoints.up("sm")]: {
            padding: "10px 60px",
            borderRadius: "19px",
        }
    }
});

function HomePanel(props) {
    const { classes } = props;

    return (
        <Fragment>
            <Hidden mdUp>
                <Card className={classes.homePanel}>
                    <CardMedia className={classes.media} image={backDropImg}/>
                    <Grid container item justify="center">
                        <CardContent>
                            <Typography className={classes.title}>
                                Hi there, I'm Quang
                            </Typography>
                            <Typography inline={false} className={classes.subTitle}>
                                Software Developer 
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid container item justify="center">
                        <Button className={classes.hireMeBtn}>
                            Get to know me
                        </Button>
                    </Grid>
                </Card>
            </Hidden>
            <Hidden smDown>
                <Grid className={classes.backDropPanel}>
                    
                </Grid>
            </Hidden>
        </Fragment>

    );
}

export default withStyles(styles)(HomePanel);