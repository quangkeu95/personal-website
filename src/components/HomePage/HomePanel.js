import React from 'react';

import { withStyles } from "@material-ui/core/styles";

import Hidden from "@material-ui/core/Hidden";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button"

import backDropImg from "./quang_sapa.jpg";


const styles = (theme) => ({
    media: {
        backgroundPosition: "top",
        height: "60vh",        
    },
    homePanel: {
        marginTop: "10vh"
    }, 
    title: {
        fontFamily: "\"Sanchez\", serif",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5em"
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: "2em",
        }
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
        <Hidden mdUp>
            <Card className={classes.homePanel}>
                <CardMedia className={classes.media} image={backDropImg}/>
                <Grid container item justify="center">
                    <CardContent className={classes.title}>
                        Hello, I'm Quang
                    </CardContent>
                </Grid>
                <Grid container item justify="center">
                    <Button className={classes.hireMeBtn}>
                        Hire me
                    </Button>
                </Grid>
                
                

                <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Scelerisque purus semper eget duis. Malesuada fames ac turpis egestas sed. Et malesuada fames ac turpis egestas maecenas. Duis at tellus at urna condimentum mattis. Et leo duis ut diam quam nulla porttitor massa id. Nisl nunc mi ipsum faucibus vitae aliquet. Et tortor at risus viverra. Nisl nisi scelerisque eu ultrices vitae auctor eu. Eget aliquet nibh praesent tristique. Nullam eget felis eget nunc lobortis mattis. Dui nunc mattis enim ut tellus elementum sagittis vitae. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Tortor consequat id porta nibh venenatis cras sed. Vestibulum morbi blandit cursus risus at ultrices.

Aenean et tortor at risus viverra adipiscing. Arcu dictum varius duis at consectetur lorem donec massa. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Dignissim sodales ut eu sem integer vitae. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Tortor at risus viverra adipiscing at. Quis eleifend quam adipiscing vitae proin sagittis nisl. Nunc mi ipsum faucibus vitae aliquet. Arcu non sodales neque sodales ut etiam. Tellus pellentesque eu tincidunt tortor aliquam nulla.

Ullamcorper a lacus vestibulum sed arcu non odio. Neque ornare aenean euismod elementum nisi quis eleifend quam. Eget arcu dictum varius duis at consectetur lorem. Sapien faucibus et molestie ac feugiat sed. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Sit amet nisl suscipit adipiscing bibendum est ultricies integer quis. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Nunc lobortis mattis aliquam faucibus purus in. Mauris augue neque gravida in fermentum et.

Curabitur vitae nunc sed velit dignissim sodales ut eu. Nisi lacus sed viverra tellus. Risus ultricies tristique nulla aliquet enim. Venenatis cras sed felis eget velit aliquet sagittis. Rutrum tellus pellentesque eu tincidunt tortor aliquam. Dolor sit amet consectetur adipiscing. Mi ipsum faucibus vitae aliquet nec ullamcorper. Vitae justo eget magna fermentum iaculis eu non diam. Nec ultrices dui sapien eget. Nibh venenatis cras sed felis eget velit. Aliquet bibendum enim facilisis gravida neque convallis a. Nunc non blandit massa enim nec dui nunc. Massa sapien faucibus et molestie ac feugiat sed. Sit amet mauris commodo quis imperdiet massa.

Nulla aliquet enim tortor at auctor urna nunc id. Faucibus purus in massa tempor nec. Convallis a cras semper auctor neque vitae tempus. Imperdiet proin fermentum leo vel orci porta non pulvinar. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Quam viverra orci sagittis eu. Sit amet nisl purus in mollis. Sit amet venenatis urna cursus. Gravida quis blandit turpis cursus in hac habitasse platea. Nisl purus in mollis nunc sed. Ipsum dolor sit amet consectetur adipiscing. Enim neque volutpat ac tincidunt.

Sapien nec sagittis aliquam malesuada bibendum. Felis donec et odio pellentesque diam volutpat commodo. Habitant morbi tristique senectus et netus et malesuada. Libero enim sed faucibus turpis in eu mi bibendum neque. Sed blandit libero volutpat sed. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Fermentum leo vel orci porta non pulvinar. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Id neque aliquam vestibulum morbi blandit cursus risus at. Tellus id interdum velit laoreet id donec ultrices tincidunt. Fermentum leo vel orci porta non pulvinar neque laoreet. Interdum varius sit amet mattis vulputate enim.

Fermentum iaculis eu non diam phasellus vestibulum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Elit at imperdiet dui accumsan sit amet nulla facilisi. Ipsum consequat nisl vel pretium lectus quam id leo in. Volutpat diam ut venenatis tellus in metus vulputate. Quis blandit turpis cursus in hac. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Nibh sed pulvinar proin gravida hendrerit. Dui sapien eget mi proin. Leo a diam sollicitudin tempor id eu nisl. Tellus at urna condimentum mattis pellentesque id nibh tortor. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor.

Diam vel quam elementum pulvinar etiam non quam. Sapien pellentesque habitant morbi tristique senectus. Netus et malesuada fames ac turpis egestas sed tempus urna. Ultrices neque ornare aenean euismod elementum nisi. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Risus at ultrices mi tempus. Malesuada fames ac turpis egestas integer eget aliquet nibh. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Turpis egestas integer eget aliquet nibh praesent tristique magna. Lacus vel facilisis volutpat est. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Quisque egestas diam in arcu cursus euismod. Aenean vel elit scelerisque mauris. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus.

Consequat ac felis donec et odio pellentesque diam volutpat. Odio euismod lacinia at quis risus. Quam elementum pulvinar etiam non quam lacus. Massa tempor nec feugiat nisl. Tellus in metus vulputate eu scelerisque felis. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Sit amet massa vitae tortor condimentum lacinia. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Sed arcu non odio euismod lacinia at quis risus. Eget mi proin sed libero enim sed faucibus turpis. Nullam vehicula ipsum a arcu cursus vitae. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Lorem ipsum dolor sit amet. Arcu odio ut sem nulla pharetra diam. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. In iaculis nunc sed augue lacus viverra vitae. Felis donec et odio pellentesque diam.

Risus nec feugiat in fermentum posuere urna nec tincidunt. Dictumst quisque sagittis purus sit. Odio tempor orci dapibus ultrices in. Amet consectetur adipiscing elit ut aliquam purus sit amet luctus. Bibendum neque egestas congue quisque egestas diam in. Feugiat nisl pretium fusce id velit. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Purus faucibus ornare suspendisse sed nisi lacus sed. Ultricies leo integer malesuada nunc vel. Vulputate ut pharetra sit amet aliquam id diam. Diam phasellus vestibulum lorem sed risus ultricies tristique. Est ante in nibh mauris cursus mattis molestie a. Scelerisque varius morbi enim nunc faucibus. Blandit volutpat maecenas volutpat blandit.
                </CardContent>
            </Card>
        </Hidden>
    );
}

export default withStyles(styles)(HomePanel);