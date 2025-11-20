import Link from "next/link";
import { Fragment } from "react";
export default function Third() {
  return (
    <Fragment>
     <div>Third Blog Page</div>
     <Link href="/next-js">Back to Blogs</Link>
    </Fragment>
  );
}
