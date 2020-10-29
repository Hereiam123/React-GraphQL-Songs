import React, { useContext } from "react";
import { IconButton } from "@material-ui/core";
import TrashIcon from "@material-ui/icons/DeleteForeverOutlined";
import { UserContext } from "../../Root";

const DeleteTrack = ({ track }) => {
  const user = useContext(UserContext);
  const isCurrentUser = user.id === track.postedBy.id;
  return isCurrentUser && <div>DeleteTrack</div>;
};

export default DeleteTrack;
