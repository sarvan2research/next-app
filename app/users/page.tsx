import React from "react";
import { idText } from "typescript";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  // const response = await fetch("http://jsonplaceholder.typicode.com/users", {next:{revalidate: 10}});
  const users: User[] = await response.json();

  return (
    <>
      <h1>UsersPage</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
