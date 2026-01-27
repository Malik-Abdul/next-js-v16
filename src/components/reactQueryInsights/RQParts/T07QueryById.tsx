import { Fragment } from "react/jsx-runtime";

import Link from "next/link";
import { useRQFetchUsers } from "@/hooks/useRQFetchUsers";

const T07QueryById = () => {
  const { data, error, isLoading, isFetching, isError } = useRQFetchUsers();

  if (isLoading || isFetching) {
    return (
      <Fragment>
        <h3>T07QueryById</h3>
        <div>Loading...</div>
      </Fragment>
    );
  }
  if (isError) {
    return (
      <Fragment>
        <h3>T07QueryById</h3>
        <div>{(error as Error).message}</div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <h3>T07QueryById</h3>

      <h4>Users</h4>
      {data?.map((user) => (
        <div key={user.id}>
          <Link href={`react-query/user-details/${user.id}`}>
            {" "}
            id: {user.id} - Name: {user.name}
          </Link>
        </div>
      ))}
    </Fragment>
  );
};

export default T07QueryById;
