import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { ApolloConsumer } from "@apollo/client";
import { IS_USER_LOGGED_IN } from "../../sharedQueries";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { Typography, Button } from "@material-ui/core";

const Signout = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleSignout = async (client) => {
    localStorage.removeItem("authToken");
    client.writeQuery({
      query: IS_USER_LOGGED_IN,
      data: {
        isLoggedIn: false,
      },
    });
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
