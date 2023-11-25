import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  // const response = await fetch("http://jsonplaceholder.typicode.com/users", {
  //   cache: "no-store",
  // });
  // // const response = await fetch("http://jsonplaceholder.typicode.com/users", {next:{revalidate: 10}});
  // const users: User[] = await response.json();

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/newuser" className="btn">
        New User
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
