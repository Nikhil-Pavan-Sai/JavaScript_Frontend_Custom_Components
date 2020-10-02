import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import vanilla from "../../assets/images/vanilla.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    marginLeft: "25%",
    marginTop: "5%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CustomCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} elevation={5}>
      <CardHeader
        avatar={
          <Avatar aria-label="profile" className={classes.avatar}>
            NPS
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Vanilla ice cream"
        subheader="October 2, 2020"
      />
      <CardMedia
        className={classes.media}
        image={vanilla}
        title="Vanilla icecream"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Ice cream is a sweetened frozen food typically eaten as a snack or
          dessert. It may be made from dairy milk or cream and is flavoured with
          a sweetener, either sugar or an alternative, and any spice, such as
          cocoa or vanilla. Colourings are usually added, in addition to
          stabilizers
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <ThumbUpIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            It Is Loaded With Vitamins and Minerals. <br />
            It Gives You Energy.
            <br />
            It Helps Boost Your Immunity.
            <br />
            It Helps in Stimulating Your Brain.
            <br />
            It Helps in Strengthening Your Bones.
            <br />
            It Makes You Happier.
            <br />
            It Increases Your Libido.
            <br />
            It Prevents Breast Cancer.
            <br />
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
