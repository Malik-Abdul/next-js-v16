import NextJs from "@/components/nextJs";
import { Fragment } from "react";
export default function Mock() {
  return (
    <Fragment>
      <p>
        The Pages Router has a file-system based router built on concepts of
        pages. When a file is added to the pages directory its automatically
        available as a route. Learn more about routing in the Pages Router
      </p>
      <NextJs />
    </Fragment>
  );
}
