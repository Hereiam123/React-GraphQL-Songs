import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Avatar,
  FormControl,
  Paper,
  Input,
  InputLabel,
  Button,
} from "@material-ui/core";
import { Lock } from "@material-ui/icons";
import Error from "../Shared/Error";

const Login = ({ setIsLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const [
    loginUser,
    { loading: mutationLoading, error: mutationError, client: mutationClient },
  ] = useMutation(LOGIN_MUTATION);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({
        variables: { password, username },
      });
      localStorage.setItem("authToken", res.data.tokenAuth.token);
      mutationClient.writeQuery({
        query: gql`
          query IsUserLoggedIn {
            isLoggedIn @client
          }
        `,
        data: { isLoggedIn: true },
      });
      console.log(mutationClient);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Lock />
        </Avatar>
        <Typography variant="h4">Login as Existing User</Typography>
        <form
          className={classes.form}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              id="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            disabled={mutationLoading || !username.trim() || !password.trim()}
            className={classes.submit}
          >
            {mutationLoading ? "Logging in..." : "Login"}
          </Button>
          <Button
            onClick={() => {
              setIsLogin(false);
            }}
            color="primary"
            variant="outlined"
            fullWidth
          >
            New user? Register here.
          </Button>
          {mutationLoading && <p>Loading...</p>}
          {mutationError && <Error error={mutationError.toString()} />}
        </form>
      </Paper>
    </div>
  );
};

const LOGIN_MUTATION = gql`
  mutation($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing.unit * 2,
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.secondary.main,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
}));

export default Login;
