"use client";
import { Fragment } from "react";

import SortProductsCatsWise from "@/components/MockInterviews/SortProductsCatsWise";
import FetchUsersWithState from "@/components/MockInterviews/FetchUsersWithState";
export default function Mock() {
  return (
    <Fragment>
      <FetchUsersWithState />
      {/* <SortProductsCatsWise /> */}
    </Fragment>
  );
}
