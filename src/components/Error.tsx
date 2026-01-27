import { Fragment } from "react/jsx-runtime";

const Error = ({
  heading,
  errorMessage,
}: {
  heading: string;
  errorMessage: string;
}) => {
  return (
    <Fragment>
      <h3>{heading}</h3>
      <div>{errorMessage}</div>
    </Fragment>
  );
};

export default Error;
