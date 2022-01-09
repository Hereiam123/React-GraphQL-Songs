import React, { useContext, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { IconButton, CircularProgress } from "@material-ui/core";
import TrashIcon from "@material-ui/icons/DeleteForeverOutlined";
import Error from "../Shared/Error";
import { UserContext } from "../Shared/ProtectedRoute";
import { GET_TRACKS_QUERY } from "../../sharedQueries";

const DeleteTrack = ({ track }) => {
  const user = useContext(UserContext);
  const [deleting, setDeleting] = useState(false);
  const [deleteTrack, { error }] = useMutation(DELETE_TRACK_MUTATION, {
    update(cache, response) {
      handleUpdateCache(cache, response);
    },
    onCompleted() {
      handleComplete();
    },
  });

  const handleUpdateCache = (cache, { data: { deleteTrack } }) => {
    const data = cache.readQuery({
      query: GET_TRACKS_QUERY,
    });
    const index = data.tracks.findIndex(
      (track) => Number(track.id) === deleteTrack.trackId
    );
    const tracks = [
      ...data.tracks.slice(0, index),
      ...data.tracks.slice(index + 1),
    ];
    cache.writeQuery({
      query: GET_TRACKS_QUERY,
      data: { tracks },
    });
  };

  const handleDelete = () => {
    setDeleting(true);
    deleteTrack({ variables: { trackId: track.id } });
  };

  const handleComplete = () => {
    setDeleting(false);
  };

  const isCurrentUser = user.id === track.postedBy.id;

  if (error) {
    return <Error error={error.toString()} />;
  }

  return (
    isCurrentUser && (
      <IconButton
        onClick={() => {
          handleDelete();
        }}
      >
        {deleting ? <CircularProgress size={24} /> : <TrashIcon />}
      </IconButton>
    )
  );
};

const DELETE_TRACK_MUTATION = gql`
  mutation($trackId: Int!) {
    deleteTrack(trackId: $trackId) {
      trackId
    }
  }
`;

export default DeleteTrack;
