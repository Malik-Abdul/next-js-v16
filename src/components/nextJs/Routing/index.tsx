import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

const Routing = () => {
  return (
    <Fragment>
      <h2>Routing</h2>
      <div>
        <Link href="/next-js/blogs/first">First</Link> <br />
        <Link href="/next-js/blogs/second">Second</Link> <br />
        <Link href="/next-js/blogs/third">Third</Link> <br />
      </div>
    </Fragment>
  );
};

export default Routing;
