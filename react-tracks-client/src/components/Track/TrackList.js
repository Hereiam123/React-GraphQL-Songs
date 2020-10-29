import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AudioPlayer from "../Shared/AudioPlayer";
import LikeTrack from "./LikeTrack";
import DeleteTrack from "./DeleteTrack";
import UpdateTrack from "./UpdateTrack";

const TrackList = ({ tracks }) => {
  const classes = useStyles();
  return (
    <List>
      {tracks.map((track) => (
        <Accordion key={track.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ListItem className={classes.root}>
              <LikeTrack />
              <ListItemText
                primaryTypographyProps={{
                  variant: "h4",
                  color: "primary",
                }}
                primary={track.title}
                secondary={
                  <Link
                    to={`/profile/${track.postedBy.id}`}
                    className={classes.link}
                  >
                    {track.postedBy.username}
                  </Link>
                }
              />
              <AudioPlayer url={track.url} />
            </ListItem>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <Typography variant="body1">{track.description}</Typography>
          </AccordionDetails>
          <AccordionActions>
            <UpdateTrack track={track} />
            <DeleteTrack />
          </AccordionActions>
        </Accordion>
      ))}
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
