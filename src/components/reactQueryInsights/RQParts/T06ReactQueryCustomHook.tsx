import { Fragment } from "react/jsx-runtime";

import { useRQFetchUsers } from "@/hooks/useRQFetchUsers";

const T06ReactQueryCustomHook = () => {
  const { data, error, isLoading, isFetching, isError } = useRQFetchUsers();

  if (isLoading || isFetching) {
    return (
      <Fragment>
        <h3>T06ReactQueryCustomHook</h3>
        <div>Loading...</div>
      </Fragment>
    );
  }
  if (isError) {
    return (
      <Fragment>
        <h3>T06ReactQueryCustomHook</h3>
        <div>{(error as Error).message}</div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <h3>T06ReactQueryCustomHook</h3>

      <h4>Users</h4>
      {data?.map((user) => (
        <div key={user.id}>
          id: {user.id} - Name: {user.name}
        </div>
      ))}
    </Fragment>
  );
};

export default T06ReactQueryCustomHook;
