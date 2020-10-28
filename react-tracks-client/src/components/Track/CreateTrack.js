import React from "react";
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

const CreateTrack = () => {
  const classes = useStyles();
  return (
    <>
      <Button variant="outlined" className={classes.fab} color="secondary">
        <AddIcon />
      </Button>
      <Dialog open={true} className={classes.dialog}>
        <form>
          <DialogTitle>Create Track</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add a Title, Description and Audio File
              <FormControl fullWidth>
                <TextField
                  label="Title"
                  placeholder="Add Title"
                  className={classes.textField}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Description"
                  placeholder="Add Description"
                  className={classes.textField}
                />
              </FormControl>
              <FormControl fullWidth>
                <input
                  id="audio"
                  required
                  type="file"
                  className={classes.input}
                />
                <label htmlFor="audio">
                  <Button
                    variant="outlined"
                    color="inherit"
                    component="span"
                    className={classes.button}
                  >
                    Audio File
                    <LibraryMusicIcon className={classes.icon} />
                  </Button>
                </label>
              </FormControl>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button className={classes.cancel}>Cancel</Button>
            <Button type="submit" className={classes.save}>
              Add Track
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

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
