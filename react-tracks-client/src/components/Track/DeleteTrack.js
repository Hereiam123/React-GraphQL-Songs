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
    onCompleted(data) {
      console.log(data);
    },
    refetchQueries() {
      return [{ query: GET_TRACKS_QUERY }];
    },
  });
  if (error) return <Error error={error} />;
  const isCurrentUser = user.id === track.postedBy.id;
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
