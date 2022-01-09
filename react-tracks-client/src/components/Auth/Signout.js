import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { ApolloConsumer } from "@apollo/client";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { Typography, Button } from "@material-ui/core";

const Signout = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleSignout = async (client) => {
    localStorage.removeItem("authToken");
    client.resetStore();
    history.push('/');
  };
  return (
    <ApolloConsumer>
      {(client) => (
        <Button
          onClick={() => {
            handleSignout(client);
          }}
        >
          <Typography
            variant="body1"
            className={classes.buttonIcon}
            color="secondary"
          >
            Signout
          </Typography>
          <ExitToApp className={classes.buttonIcon} color="secondary" />
        </Button>
      )}
    </ApolloConsumer>
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
