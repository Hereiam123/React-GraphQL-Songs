import React from "react";
import { useMutation, gql } from "@apollo/client";
import Error from "../Shared/Error";
import Loading from "../Shared/Loading";

function DeleteUser({ id }) {
  const [deleteUser, { client, loading, error }] = useMutation(
    DELETE_USER_MUTATION,
    {
      onCompleted() {
        localStorage.removeItem("authToken");
        client.clearStore();
      },
    }
  );

  if (loading) return <Loading />;
  if (error) return <Error error={error.toString()} />;

  const deleteUserClick = () => {
    deleteUser({ variables: { id } });
  };

  return (
    <>
      <button onClick={deleteUserClick}>Delete Account</button>
    </>
  );
}

const DELETE_USER_MUTATION = gql`
  mutation ($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export default DeleteUser;
