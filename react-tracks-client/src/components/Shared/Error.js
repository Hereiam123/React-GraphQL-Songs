import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Snackbar, Button } from "@material-ui/core";

const Error = ({ error }) => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  return (
    <Snackbar
      open={open}
      className={classes.snackbar}
      action={
        <Button
          onClick={() => {
            setOpen(false);
          }}
          color="secondary"
          size="small"
        >
          Close
        </Button>
      }
      message={error}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  snackbar: {
    margin: theme.spacing.unit,
  },
}));

export default Error;
