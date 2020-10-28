import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AudioPlayer from "../Shared/AudioPlayer";
import LikeTrack from "./LikeTrack";
import DeleteTrack from "./DeleteTrack";
import UpdateTrack from "./UpdateTrack";

const TrackList = ({ tracks }) => {
  const classes = useStyles();
  console.log(tracks[0]);
  return (
    <List>
      {tracks.map((track) => {
        <ExpansionPanel key={track.id}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <ListItem className={classes.root}>
              <LikeTrack />
              <ListItemText
                primaryTypographyProps={{
                  variant: "subheading",
                  color: "primary",
                }}
                primary={track.title}
                secondary={
                  <Link
                    to={`/profile/${track.postedBy.id}`}
                    classes={classes.link}
                  >
                    {track.postedBy.username}
                  </Link>
                }
              />
              <AudioPlayer />
            </ListItem>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <Typography variant="body1">{track.description}</Typography>
          </ExpansionPanelDetails>
          <ExpansionPanelActions>
            <UpdateTrack />
            <DeleteTrack />
          </ExpansionPanelActions>
        </ExpansionPanel>;
      })}
    </List>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  details: {
    alignItems: "center",
  },
  link: {
    color: "#424242",
    textDecoration: "none",
    "&:hover": {
      color: "black",
    },
  },
}));

export default TrackList;
