import React, { useContext } from "react";
import { useMutation, gql } from "@apollo/client";
import { IconButton } from "@material-ui/core";
import TrashIcon from "@material-ui/icons/DeleteForeverOutlined";
import Error from "../Shared/Error";
import { UserContext } from "../../Root";
import { GET_TRACKS_QUERY } from "../../sharedQueries";

const DeleteTrack = ({ track }) => {
  const user = useContext(UserContext);
  const [deleteTrack, { error }] = useMutation(DELETE_TRACK_MUTATION, {
    update(cache, response) {
      handleUpdateCache(cache, response);
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

  const isCurrentUser = user.id === track.postedBy.id;

  if (error) {
    return <Error error="Delete Track Error" />;
  }

  return (
    isCurrentUser && (
      <IconButton
        onClick={() => {
          deleteTrack({ variables: { trackId: track.id } });
        }}
      >
        <TrashIcon />
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
