import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import Snackbar from "@material-ui/core/Snackbar";

const Error = () => {
  const classes = useStyles();
  return <div>Error</div>;
};

const useStyles = makeStyles((theme) => ({
  snackbar: {
    margin: theme.spacing.unit,
  },
}));

export default Error;
