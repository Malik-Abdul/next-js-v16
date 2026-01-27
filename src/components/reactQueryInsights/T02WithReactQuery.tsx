import { Fragment } from "react/jsx-runtime";

// import T01DataErrorLoading from "./RQParts/T01DataErrorLoading";
// import T02QueryCache from "./RQParts/T02QueryCache";
// import T03useQueryOnClick from "./RQParts/T03useQueryOnClick";
// import T04SuccessAndErrorCallbacks from "./RQParts/T04SuccessAndErrorCallbacks";
// import T05DataTransformation from "./RQParts/T05DataTransformation";
import T06ReactQueryCustomHook from "./RQParts/T06ReactQueryCustomHook";
import T06ReactQueryCustomHookCallAgain from "./RQParts/T06ReactQueryCustomHookCallAgain";

const T02WithReactQuery = () => {
  return (
    <Fragment>
      <h2>T02WithReactQuery</h2>
      {/* <T01DataErrorLoading /> */}
      {/* <T02QueryCache /> */}
      {/* <T03useQueryOnClick /> */}
      {/* <T04SuccessAndErrorCallbacks /> */}
      {/* <T05DataTransformation /> */}
      <T06ReactQueryCustomHook />
      <T06ReactQueryCustomHookCallAgain />
    </Fragment>
  );
};

export default T02WithReactQuery;
