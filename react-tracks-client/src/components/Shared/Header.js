import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import RadioIcon from "@material-ui/icons/Radio";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import Signout from "../Auth/Signout";

const Header = ({ currentUser }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Link to="/" className={classes.grow}>
          <RadioIcon className={classes.logo} color="secondary" />
          <Typography variant="h3" color="secondary" noWrap>
            React Tracks
          </Typography>
        </Link>
        {currentUser && (
          <Link to={`/profile/${currentUser.id}`} className={classes.grow}>
            <AccountCircleIcon className={classes.faceIcon} />
            <Typography variant="h3" className={classes.username} noWrap>
              {currentUser.username}
            </Typography>
          </Link>
        )}
        <Signout />
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
  },
  grow: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  logo: {
    marginRight: theme.spacing.unit,
    fontSize: 45,
  },
  faceIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 30,
    color: "white",
  },
  username: {
    color: "white",
    fontSize: 30,
  },
}));

export default Header;
