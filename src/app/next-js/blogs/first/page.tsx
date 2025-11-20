import Link from "next/link";
import { Fragment } from "react";
export default function First() {
  return (
    <Fragment>
      <div>First Blog Page</div>
      <Link href="/next-js">Back to Blogs</Link>
    </Fragment>
  );
}
