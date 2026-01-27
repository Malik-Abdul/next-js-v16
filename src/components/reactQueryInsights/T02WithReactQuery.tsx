import { Fragment } from "react/jsx-runtime";

// import T01DataErrorLoading from "./RQParts/T01DataErrorLoading";
// import T02QueryCache from "./RQParts/T02QueryCache";
import T03useQueryOnClick from "./RQParts/T03useQueryOnClick";
import T04SuccessAndErrorCallbacks from "./RQParts/T04SuccessAndErrorCallbacks";

const T02WithReactQuery = () => {
  return (
    <Fragment>
      <h2>T02WithReactQuery</h2>
      {/* <T01DataErrorLoading /> */}
      {/* <T02QueryCache /> */}
      {/* <T03useQueryOnClick /> */}
      <T04SuccessAndErrorCallbacks />
    </Fragment>
  );
};

export default T02WithReactQuery;
