import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query getAllUsers {
    users {
      name
      id
      age
      nationality
    }
  }
`;

export default function DisplayData() {
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);

  if (loading) {
    return <div>Loagind data ...</div>;
  }

  if (data) {
    console.log(data);
  }

  if (error) {
    console.log(error);
  }

  return (
    <div>
      {data &&
        data.users.map((user: any) => {
          return (
            <ul>
              <li>ID: {user.id}</li>
              <li>Name: {user.name}</li>
              <li>Age: {user.age}</li>
              <li>Nationality: {user.nationality}</li>
            </ul>
          );
        })}
    </div>
  );
}
