import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery, gql } from "@apollo/client";
import {
  Card,
  CardHeader,
  Avatar,
  Paper,
  Typography,
  Divider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import AudioPlayer from "../components/Shared/AudioPlayer";
import Error from "../components/Shared/Error";
import Loading from "../components/Shared/Loading";
import DeleteUser from "../components/User/DeleteUser";

const Profile = ({ match }) => {
  const classes = useStyles();
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_PROFILE, {
    variables: { id: match.params.id },
  });
  if (loading) {
    return <Loading />;
  }
  if (error) {
    history.push("/");
    return <Error error={error.toString()} />;
  }
  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar>{data.user.username[0]}</Avatar>}
          title={data.user.username}
          subheader={`Joined ${new Date(data.user.dateJoined)
            .toISOString()
            .substring(0, 10)}`}
        />
        <DeleteUser history={history} id={match.params.id} />
      </Card>
      <Paper elevation={1} className={classes.paper}>
        <Typography variant="subtitle1" className={classes.title}>
          <AudiotrackIcon className={classes.audioIcon} />
          Created Tracks
        </Typography>
        {data.user.trackSet.map((track) => (
          <div key={track.id}>
            <Typography>
              {track.title} - {track.likes.length} Likes
            </Typography>
            <AudioPlayer url={track.url} />
            <Divider className={classes.divider} />
          </div>
        ))}
      </Paper>
      <Paper elevation={1} className={classes.paper}>
        <Typography variant="subtitle1" className={classes.title}>
          <ThumbUpIcon className={classes.thumbIcon} />
          Liked Tracks
        </Typography>
        {data.user.likeSet.map(({ track }) => {
          return (
            <div key={track.id}>
              <Typography>
                {track.title} - {track.likes.length} Likes -{" "}
                {track.postedBy.username}
              </Typography>
              <AudioPlayer url={track.url} />
              <Divider className={classes.divider} />
            </div>
          );
        })}
      </Paper>
    </div>
  );
};

const GET_PROFILE = gql`
  query ($id: Int!) {
    user(id: $id) {
      id
      username
      dateJoined
      trackSet {
        id
        title
        url
        likes {
          id
        }
      }
      likeSet {
        id
        track {
          id
          title
          url
          likes {
            id
          }
          postedBy {
            id
            username
          }
        }
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "auto",
    display: "block",
    padding: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    [theme.breakpoints.up("md")]: {
      width: 650,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  card: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing.unit * 2,
  },
  audioIcon: {
    color: "purple",
    fontSize: 30,
    marginRight: theme.spacing.unit,
  },
  thumbIcon: {
    color: "green",
    marginRight: theme.spacing.unit,
  },
  divider: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
}));

export default Profile;
