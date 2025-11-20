"use client";
import Link from "next/link";

import { Fragment } from "react/jsx-runtime";

export default function productsPage() {
  return (
    <Fragment>
      <h2>Products Page</h2>
      <div>
        <Link href="/next-js/products/1">Product One</Link> <br />
        <Link href="/next-js/products/2">Product Two</Link> <br />
        <Link href="/next-js/products/3">Product Three</Link> <br />
      </div>
    </Fragment>
  );
}
