import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Gavel from "@material-ui/icons/Gavel";
import VerifiedUserTwoTone from "@material-ui/icons/VerifiedUserTwoTone";
import Error from "../Shared/Error";

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Register = ({ setIsLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState();
  const classes = useStyles();
  const [
    createUser,
    { loading: mutationLoading, error: mutationError, errors },
  ] = useMutation(REGISTER_MUTATION);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUser({
        variables: { email, password, username },
      });
      console.log(res);
      setOpen(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Gavel />
        </Avatar>
        <Typography variant="h4">Register</Typography>
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
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
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
            disabled={
              mutationLoading ||
              !username.trim() ||
              !email.trim() ||
              !password.trim()
            }
            className={classes.submit}
          >
            {mutationLoading ? "Registering..." : "Register"}
          </Button>
          <Button
            onClick={() => {
              setIsLogin(true);
            }}
            color="primary"
            variant="outlined"
            fullWidth
          >
            Previous user? Login in here.
          </Button>
          {mutationLoading && <p>Loading...</p>}
          {mutationError && <Error error={mutationError.toString()} />}
        </form>
      </Paper>
      {/***Success Dialog***/}
      <Dialog disableBackdropClick open={open} TransitionComponent={Transition}>
        <DialogTitle>
          <VerifiedUserTwoTone className={classes.icon} />
          New Account
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            User {username} successfully created!
          </DialogContentText>
          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                setIsLogin(true);
              }}
            >
              Login
            </Button>
            {/***Error ***/}
            {mutationError && <div>Error</div>}
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const REGISTER_MUTATION = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        username
        email
      }
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
    color: theme.palette.openTitle,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  icon: {
    padding: "0px 2px 2px 0px",
    verticalAlign: "middle",
    color: "green",
  },
}));

export default Register;
