import { Fragment } from "react/jsx-runtime";
import T01WithOlderWay from "./T01WithOlderWay";
import T03WithReactQuery from "./T03WithReactQuery";
// import T02SuspenseReactLazy from "./T02SuspenseReactLazy";

const T03ModerenWayToFetchData = () => {
  return (
    <Fragment>
      <h3>T03 Moderen Way To Fetch Data</h3>
      {/* <T01WithOlderWay /> */}
      <T03WithReactQuery />
      {/* <T02SuspenseReactLazy /> */}
    </Fragment>
  );
};
export default T03ModerenWayToFetchData;
