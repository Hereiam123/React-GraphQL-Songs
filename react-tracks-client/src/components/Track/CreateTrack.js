import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import Error from "../Shared/Error";
import { GET_TRACKS_QUERY } from "../../sharedQueries";

const CreateTrack = () => {
  const classes = useStyles();
  const [createTrack, { error }] = useMutation(CREATE_TRACK_MUTATION, {
    update(cache, response) {
      handleUpdateCache(cache, response);
    },
    onCompleted() {
      handleComplete();
    },
  });
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescritpion] = useState("");
  const [file, setFile] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [fileError, setFileError] = useState("");

  const handleAudioChange = (e) => {
    const selectedFile = e.target.files[0];
    const fileSizeLimit = 10000000; //10mb
    if (selectedFile && selectedFile.size > fileSizeLimit) {
      setFileError(`${selectedFile.name}: File size too large, 10mb max.`);
    } else {
      setFile(selectedFile);
      setFileError("");
    }
  };

  const handleUpdateCache = (cache, { data: { createTrack } }) => {
    const data = cache.readQuery({
      query: GET_TRACKS_QUERY,
    });
    const tracks = data.tracks.concat(createTrack.track);
    cache.writeQuery({
      query: GET_TRACKS_QUERY,
      data: { tracks },
    });
  };

  const handleComplete = () => {
    setOpen(false);
    setSubmitting(false);
    setTitle("");
    setDescritpion("");
    setFile("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    createTrack({ variables: { title, description, file } });
  };

  if (error) {
    return <Error error={error.toString()}/>;
  }

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        variant="outlined"
        className={classes.fab}
        color="secondary"
      >
        {open ? <ClearIcon /> : <AddIcon />}
      </Button>
      <Dialog open={open} className={classes.dialog}>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <DialogTitle>Create Track</DialogTitle>
          <DialogContent>
            <DialogContentText component="span">
              Add a Title, Description and Audio File
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
              <FormControl fullWidth error={fileError !== ""}>
                <input
                  id="audio"
                  required
                  type="file"
                  className={classes.input}
                  accept="audio/mp3,audio/wav"
                  onChange={handleAudioChange}
                />
                <label htmlFor="audio">
                  <Button
                    variant="outlined"
                    color={file ? "secondary" : "inherit"}
                    component="span"
                    className={classes.button}
                  >
                    Audio File
                    <LibraryMusicIcon className={classes.icon} />
                  </Button>
                  {file && file.name}
                </label>
                <FormHelperText>{fileError}</FormHelperText>
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
                submitting || !title.trim() || !description.trim() || !file
              }
              type="submit"
              className={classes.save}
            >
              {submitting ? (
                <CircularProgress size={24} className={classes.save} />
              ) : (
                "Add Track"
              )}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

const CREATE_TRACK_MUTATION = gql`
  mutation($title: String!, $description: String!, $file: Upload!) {
    createTrack(title: $title, description: $description, file: $file) {
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
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: "200",
  },
}));

export default CreateTrack;
