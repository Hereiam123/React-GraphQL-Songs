import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import Error from "../Shared/Error";
import Loading from "../Shared/Loading";

function DeleteUser({ id }) {
  const [isConfirm, setIsConfirm] = useState(false);
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
      {!isConfirm ? (
        <button
          onClick={() => {
            setIsConfirm(true);
          }}
        >
          Delete Account
        </button>
      ) : (
        <>
          <button onClick={deleteUserClick}>Confirm Delete</button>
          <button onClick={()=>setIsConfirm(false)}>Cancel</button>
        </>
      )}
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
