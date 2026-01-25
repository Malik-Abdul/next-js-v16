import { Fragment } from "react/jsx-runtime";

import T01DataErrorLoading from "./RQParts/T01DataErrorLoading";
import T02QueryCache from "./RQParts/T02QueryCache";

const T02WithReactQuery = () => {
  return (
    <Fragment>
      <h2>T02WithReactQuery</h2>
      {/* <T01DataErrorLoading /> */}
      <T02QueryCache />
    </Fragment>
  );
};

export default T02WithReactQuery;
