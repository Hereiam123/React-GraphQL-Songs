import React, { useState, useContext } from "react";
import { useMutation, gql } from "@apollo/client";
import axios from "axios";
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
  FormHelperText,
  DialogTitle,
  CircularProgress,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { UserContext } from "../../Root";
import Error from "../Shared/Error";
import { cloudUrl, cloudName, cloudPreset } from "../../cloudinaryApi";

const UpdateTrack = ({ track }) => {
  const classes = useStyles();
  const user = useContext(UserContext);
  const [updateTrack, { error }] = useMutation(UPDATE_TRACK_MUTATION, {
    onCompleted() {
      handleComplete();
    },
  });
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(track.title);
  const [description, setDescritpion] = useState(track.description);
  const [file, setFile] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [fileError, setFileError] = useState("");

  if (error) return <Error error={error} />;

  const isCurrentUser = user.id === track.postedBy.id;

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

  const handleAudioUpload = async () => {
    const data = new FormData();
    try {
      data.append("file", file);
      data.append("resource_type", "raw");
      data.append("upload_preset", cloudPreset);
      data.append("cloud_name", cloudName);
      const res = await axios.post(cloudUrl, data);
      return res.data.url;
    } catch (e) {
      console.error("Error with cloudinary " + e);
      setSubmitting(false);
    }
  };

  const handleComplete = () => {
    setOpen(false);
    setSubmitting(false);
    setTitle("");
    setDescritpion("");
    setFile("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const url = await handleAudioUpload();
    updateTrack({ variables: { title, description, url, trackId: track.id } });
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
                Update Title, Description or Audio File
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
                <FormControl fullWidth error={fileError}>
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
  mutation(
    $trackId: Int!
    $title: String!
    $description: String!
    $url: String!
  ) {
    updateTrack(
      trackId: $trackId
      title: $title
      description: $description
      url: $url
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
