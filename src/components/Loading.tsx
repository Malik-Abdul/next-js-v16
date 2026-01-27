import { Fragment } from "react/jsx-runtime";

const Loading = ({ heading }: { heading: string }) => {
  return (
    <Fragment>
      <h3>{heading}</h3>
      <div>Loading...</div>
    </Fragment>
  );
};

export default Loading;
