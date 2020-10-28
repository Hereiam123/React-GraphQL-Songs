import React from "react";
import withRoot from "./withRoot";
import { gql, useQuery } from "@apollo/client";

const Root = () => {
  const { loading, error, data } = useQuery(GET_ME_QUERY);
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

const GET_ME_QUERY = gql`
  {
    me {
      id
      username
      email
    }
  }
`;

export default withRoot(Root);
