import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { BUTTON_WARNING_CLASSES } from "@/constants/className";

const ChThree = ({ name }: { name: string }) => {
  console.log("Child Component Three redndered");
  return (
    <Fragment>
      <h4>Child Component One - name: {name}</h4>
    </Fragment>
  );
};
const ChTwo = ({ name }: { name: string }) => {
  console.log("Child Component Two redndered");
  return (
    <Fragment>
      <h4>Child Component Two</h4>
      <ChThree name={name} />
    </Fragment>
  );
};

const ChOne = ({
  name,
  setName,
}: {
  name: string;
  setName: (name: string) => void;
}) => {
  console.log("Child Component One redndered");
  return (
    <Fragment>
      <h4>Child Component One</h4>
      <button
        onClick={() => setName("Awan")}
        type="button"
        className={BUTTON_WARNING_CLASSES}
      >
        Change Name
      </button>

      <ChTwo name={name} />
    </Fragment>
  );
};

const PropsDrillingF = () => {
  const [name, setName] = useState("Malik");
  console.log("Parent Component redndered");
  return (
    <Fragment>
      <h4>Parent Component</h4>
      <div>Name: {name}</div>

      <ChOne name={name} setName={setName} />
    </Fragment>
  );
};

export default PropsDrillingF;
