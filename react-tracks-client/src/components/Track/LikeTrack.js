import React, { useContext } from "react";
import { useMutation, gql } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Error from "../Shared/Error";

import { UserContext } from "../../Root";

const LikeTrack = ({ trackId, likeCount }) => {
  const classes = useStyles();
  const user = useContext(UserContext);
  const [createLike, { error }] = useMutation(CREATE_LIKE_MUTATION, {
    /*refetchQueries() {
      return [{ query: GET_TRACKS_QUERY }];
    },
    onCompleted() {
      handleComplete();
    },*/
  });
  const handleDisableLikedTrack = () => {
    const userLikes = user.likeSet;
    console.log(user);
    console.log(userLikes);
    const isTrackLiked = userLikes.findIndex(({ track }) => {
      return track.id === trackId;
    });
    return !isTrackLiked;
  };
  if (error) return <Error error={error} />;
  return (
    <IconButton
      onClick={(e) => {
        e.stopPropagation();
        createLike({ variables: { trackId } });
      }}
      className={classes.iconButton}
      disabled={handleDisableLikedTrack()}
    >
      {likeCount}
      <ThumbUpIcon className={classes.icon} />
    </IconButton>
  );
};

const CREATE_LIKE_MUTATION = gql`
  mutation($trackId: Int!) {
    createLike(trackId: $trackId) {
      track {
        id
        likes {
          id
        }
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  iconButton: {
    color: "deeppink",
  },
  icon: {
    marginLeft: theme.spacing.unit / 2,
  },
}));

export default LikeTrack;
