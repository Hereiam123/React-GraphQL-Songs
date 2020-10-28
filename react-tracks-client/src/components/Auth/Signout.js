import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { Typography, Button } from "@material-ui/core";

const Signout = () => {
  const classes = useStyles();
  return (
    <Button>
      <Typography
        variant="body1"
        className={classes.buttonIcon}
        color="secondary"
      >
        Signout
      </Typography>
      <ExitToApp className={classes.buttonIcon} color="secondary" />
    </Button>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
    display: "flex",
  },
  buttonIcon: {
    marginLeft: "5px",
  },
}));

export default Signout;
