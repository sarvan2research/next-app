"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import AuthProvider from "./auth/provider";

const NavBar = () => {
  const { status, data: session } = useSession();
  //if (status === "loading") return null;
  return (
    <div className="flex bg-slate-200 p-3 space-x-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <div>
          <div>{session.user!.name}</div>
          <Link href="/api/auth/signout">Sign Out</Link>
        </div>
      )}

      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default NavBar;
