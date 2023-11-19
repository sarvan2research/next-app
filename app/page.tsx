"use client";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./component/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">User Page</Link>
      <ProductCard />
    </main>
  );
}
