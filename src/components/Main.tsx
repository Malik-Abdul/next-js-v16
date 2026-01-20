"use client";
import React, { FC, Fragment, useState } from "react";
// import ReactHooks from "./ReactHooks";

interface User {
  id: number;
  name: string;
}

type ChThreeProps = {
  name: string;
};

const ChFour = ({ name }: { name: string }) => {
  console.log("Rendering ChFour");

  return (
    <>
      <h4>ChFour</h4>
      <div>name: {name}</div>
    </>
  );
};
const ChThree = React.memo(function ChThree({ name }: ChThreeProps) {
  console.log("Rendering ChThree");

  return (
    <Fragment>
      <h4>ChThree</h4>
      <div>name: {name}</div>
    </Fragment>
  );
});

const ChTwo = () => {
  console.log("Rendering ChTwo");
  const [count, setCount] = useState<number>(0);
  return (
    <Fragment>
      <div>ChTwo</div>
      <div>
        <button onClick={() => setCount(count + 1)}>{count}</button>
      </div>
      <ChThree name="Asad" />
      <ChFour name="Asad" />
    </Fragment>
  );
};

const ChOne = ({ id, name }: User) => {
  console.log("Rendering ChOne");

  return (
    <Fragment>
      <div>ChOne</div>
      <div>id: {id}</div>
      <div>name: {name}</div>
      <ChTwo />
    </Fragment>
  );
};

const PComp = () => {
  console.log("Rendering PComp");
  return (
    <Fragment>
      <div>PComp</div>
      <ChOne id={1} name="malik" />
    </Fragment>
  );
};

const Main: FC = () => {
  return (
    <Fragment>
      {/* <div>Main Component</div> */}
      {/* <ReactHooks /> */}
      <PComp />
    </Fragment>
  );
};
export default Main;
