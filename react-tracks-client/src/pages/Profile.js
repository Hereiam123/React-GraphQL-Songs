import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  Avatar,
  Paper,
  Typography,
  Divider,
} from "@material-ui/core";
import { ThumbUpIcon, AudiotrackIcon } from "@material-ui/icons";

const Profile = () => {
  const classes = useStyles();
  return <div>Profile</div>;
};

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "auto",
    display: "block",
    padding: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    [theme.breakpoints.up("md")]: {
      width: 650,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  card: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing.unit * 2,
  },
  audioIcon: {
    color: "purple",
    fontSize: 30,
    marginRight: theme.spacing.unit,
  },
  thumbIcon: {
    color: "green",
    marginRight: theme.spacing.unit,
  },
  divider: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
}));

export default Profile;
