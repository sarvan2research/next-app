import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";
interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const response = await fetch("http://jsonplaceholder.typicode.com/xusers");
  const users: User[] = await response.json();
  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (users) => users.email : (users) => users.name
  );
  return (
    <div>
      <table className="table table-bordered table-zebra-zebra">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
