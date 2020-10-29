import React, { useState, useRef } from "react";
import { ApolloConsumer, gql } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Paper, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";

const SearchTracks = ({ setSearchResults }) => {
  const classes = useStyles();
  const inputEl = useRef(null);
  const [search, setSearch] = useState("");
  const handleSubmit = async (e, client) => {
    e.preventDefault();
    const res = await client.query({
      query: SEARCH_TRACKS_QUERY,
      variables: { search: search },
    });
    setSearchResults(res.data.tracks);
  };
  const clearSearch = () => {
    setSearchResults([]);
    setSearch("");
    inputEl.current.focus();
  };
  return (
    <ApolloConsumer>
      {(client) => (
        <form onSubmit={(e) => handleSubmit(e, client)}>
          <Paper className={classes.root} elevation={1}>
            <IconButton onClick={clearSearch}>
              <ClearIcon />
            </IconButton>
            <TextField
              fullWidth
              placeholder="Search All Tracks"
              InputProps={{
                disableUnderline: true,
              }}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              inputRef={inputEl}
            />
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
          </Paper>
        </form>
      )}
    </ApolloConsumer>
  );
};

const SEARCH_TRACKS_QUERY = gql`
  query($search: String) {
    tracks(search: $search) {
      id
      title
      description
      url
      likes {
        id
      }
      postedBy {
        id
        username
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    margin: theme.spacing.unit,
    display: "flex",
    alignItems: "center",
  },
}));

export default SearchTracks;
