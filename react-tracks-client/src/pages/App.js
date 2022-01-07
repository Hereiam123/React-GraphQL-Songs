import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import SearchTracks from "../components/Track/SearchTracks";
import TrackList from "../components/Track/TrackList";
import CreateTrack from "../components/Track/CreateTrack";
import Loading from "../components/Shared/Loading";
import Error from "../components/Shared/Error";
import { GET_TRACKS_QUERY } from "../sharedQueries";

const App = () => {
  const classes = useStyles();
  const [searchResults, setSearchResults] = useState([]);
  const [tracks, setTracks] = useState([]);
  const { loading, error, data } = useQuery(GET_TRACKS_QUERY);

  useEffect(() => {
    if (searchResults.length > 0) {
      setTracks(searchResults);
    } else if (data) {
      setTracks(data.tracks);
    }
  }, [searchResults, data]);

  if (loading) return <Loading />;
  if (error) return <Error error={error.toString()} />;

  return (
    <div className={classes.container}>
      <SearchTracks setSearchResults={setSearchResults} />
      <CreateTrack />
      <TrackList tracks={tracks} />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto",
    maxWidth: 960,
    padding: theme.spacing.unit * 2,
  },
}));

export default App;
