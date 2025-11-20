import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

const Routing = () => {
  return (
    <Fragment>
      <h2>Dynamic Routing</h2>
      <div>
        <Link href="/next-js/products/dynamic-first">Product One</Link> <br />
        <Link href="/next-js/products/dynamic-second">Product Two</Link> <br />
        <Link href="/next-js/products/dynamic-third">Product Three</Link> <br />
      </div>
    </Fragment>
  );
};

export default Routing;
