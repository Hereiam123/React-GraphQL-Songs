import React, { useState, useContext } from "react";
import { useMutation, gql } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControl,
  DialogTitle,
  CircularProgress,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { UserContext } from "../../Root";
import Error from "../Shared/Error";

const UpdateTrack = ({ track }) => {
  const classes = useStyles();
  const user = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(track.title);
  const [description, setDescritpion] = useState(track.description);
  const [submitting, setSubmitting] = useState(false);

  const [updateTrack, { error }] = useMutation(UPDATE_TRACK_MUTATION, {
    onCompleted() {
      handleComplete();
    },
  });

  if (error) {
    return <Error error={error.toString()} />;
  }

  const isCurrentUser = user.id === track.postedBy.id;

  const handleComplete = () => {
    setOpen(false);
    setSubmitting(false);
    setTitle("");
    setDescritpion("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    updateTrack({ variables: { title, description, trackId: track.id } });
  };

  return (
    isCurrentUser && (
      <>
        <IconButton
          onClick={() => {
            setOpen(true);
          }}
        >
          <EditIcon />
        </IconButton>
        <Dialog open={open} className={classes.dialog}>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <DialogTitle>Update Track</DialogTitle>
            <DialogContent>
              <DialogContentText component="span">
                Update Title or Description
                <FormControl fullWidth>
                  <TextField
                    label="Title"
                    placeholder="Add Title"
                    className={classes.textField}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    value={title}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    multiline
                    row="2"
                    label="Description"
                    placeholder="Add Description"
                    className={classes.textField}
                    onChange={(e) => {
                      setDescritpion(e.target.value);
                    }}
                    value={description}
                  />
                </FormControl>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  setOpen(false);
                }}
                className={classes.cancel}
                disabled={submitting}
              >
                Cancel
              </Button>
              <Button
                disabled={
                  submitting ||
                  !title.trim() ||
                  !description.trim()
                }
                type="submit"
                className={classes.save}
              >
                {submitting ? (
                  <CircularProgress size={24} className={classes.save} />
                ) : (
                  "Update Track"
                )}
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </>
    )
  );
};

const UPDATE_TRACK_MUTATION = gql`
  mutation (
    $trackId: Int!
    $title: String!
    $description: String!
  ) {
    updateTrack(
      trackId: $trackId
      title: $title
      description: $description
    ) {
      track {
        id
        title
        description
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
`;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  dialog: {
    margin: "0 auto",
    maxWidth: 550,
  },
  textField: {
    margin: theme.spacing.unit,
  },
  cancel: {
    color: "red",
  },
  save: {
    color: "green",
  },
  button: {
    margin: theme.spacing.unit * 2,
  },
  icon: {
    marginLeft: theme.spacing.unit,
  },
  input: {
    display: "none",
  },
}));

export default UpdateTrack;
