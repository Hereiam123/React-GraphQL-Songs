import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const App = () => {
  const classes = useStyles();
  return <div>App</div>;
};

const useStyles = (theme) =>
  makeStyles({
    container: {
      margin: "0 auto",
      maxWidth: 960,
      padding: theme.spacing.unit * 2,
    },
  });

export default App;
