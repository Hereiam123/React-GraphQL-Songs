import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import axios from "axios";
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
import { cloudUrl, cloudName, cloudPreset } from "../../cloudinaryApi";

const CreateTrack = () => {
  const classes = useStyles();
  const [
    createTrack,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(CREATE_TRACK_MUTATION);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescritpion] = useState("");
  const [file, setFile] = useState("");

  if (mutationError) return <Error error={mutationError} />;

  const handleAudioChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleAudioUpload = () => {
    const data = new FormData();
    data.append("file", file);
    data.append("resource_type", "raw");
    data.append("upload_preset", cloudPreset);
    data.append("cloud_name", cloudName);
    axios.post(cloudUrl, data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
                />
              </FormControl>
              <FormControl fullWidth>
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
              </FormControl>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              className={classes.cancel}
            >
              Cancel
            </Button>
            <Button
              disabled={!title.trim() || !description.trim() || !file}
              type="submit"
              className={classes.save}
            >
              Add Track
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

const CREATE_TRACK_MUTATION = gql`
  mutation($title: String!, $description: String!, $url: String!) {
    createTrack(title: $title, description: $description, url: $url) {
      track {
        id
        title
        description
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
