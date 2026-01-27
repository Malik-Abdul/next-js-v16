"use client";

import { useRQFetchUserDetail } from "@/hooks/useRQFetchUserDetail";
import { Fragment } from "react";

export default function UserDetailsClient({ userId }: { userId: string }) {
  const { data, error, isError, isLoading, isFetching } =
    useRQFetchUserDetail(userId);

  if (isLoading || isFetching) {
    return (
      <Fragment>
        <h2>User Details</h2>
        <div>Loading...</div>
      </Fragment>
    );
  }

  if (isError) {
    return (
      <Fragment>
        <h2>User Details</h2>
        <div>Error: {(error as Error).message}</div>
      </Fragment>
    );
  }

  if (!data) {
    return (
      <Fragment>
        <h2>User Details</h2>
        <div>No data available</div>
      </Fragment>
    );
  }

  const { name, email, salary } = data;

  return (
    <Fragment>
      <h2>User Details</h2>
      <div>User Detail of {name}</div>
      <div>
        <div>Name: {name}</div>
        <div>email: {email}</div>
        <div>salary: {salary}</div>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </div>
    </Fragment>
  );
}
