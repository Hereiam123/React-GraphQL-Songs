import React from "react";
import { gql, useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import SearchTracks from "../components/Track/SearchTracks";
import TrackList from "../components/Track/TrackList";
import CreateTrack from "../components/Track/CreateTrack";
import Loading from "../components/Shared/Loading";
import Error from "../components/Shared/Error";

const App = () => {
  const classes = useStyles(GET_TRACKS_QUERY);
  const { loading, error, data } = useQuery(GET_TRACKS_QUERY);
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div className={classes.container}>
      <SearchTracks />
      <CreateTrack />
      <TrackList tracks={data.tracks} />
    </div>
  );
};

const GET_TRACKS_QUERY = gql`
  query getTracksQuery {
    tracks {
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
  container: {
    margin: "0 auto",
    maxWidth: 960,
    padding: theme.spacing.unit * 2,
  },
}));

export default App;
