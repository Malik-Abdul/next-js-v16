import Link from "next/link";
import { Fragment } from "react";
export default function Second() {
  return (
    <Fragment>
     <div>Second Blog Page</div>
     <Link href="/next-js">Back to Blogs</Link>
    </Fragment>
  );
}
