import React from "react";
import { idText } from "typescript";

interface User {
  id: number;
  name: string;
  email: string;
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
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tr className="hover" key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default UsersPage;
