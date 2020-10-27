import React from "react";
import withRoot from "./withRoot";
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";

const Root = () => {
  const { loading, error, data } = useQuery(GET_TRACKS_QUERY);
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  return <div>{JSON.stringify(data)}</div>;
};

const GET_TRACKS_QUERY = gql`
  {
    tracks {
      id
      title
      description
      url
    }
  }
`;

export default withRoot(Root);
