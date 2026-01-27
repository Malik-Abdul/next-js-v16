import { Fragment } from "react/jsx-runtime";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { FetchUsersType } from "@/types/Users";
import { USERS_URLS } from "@/constants/api";
import axios from "axios";

const fetchUsers = async (): Promise<FetchUsersType[]> => {
  const response = axios.get(USERS_URLS.SALARY_RANGE_51480_51500);
  return (await response).data;
};

const fetchFriends = async (): Promise<FetchUsersType[]> => {
  const response = axios.get("http://localhost:4500/friends");
  return (await response).data;
};

const T01UseTwoUseQueryHook = () => {
  const {
    data: users,
    error: userError,
    isLoading: userIsLoading,
    isFetching: userIsFetching,
    isError: userIsError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const { data: friends } = useQuery({
    queryKey: ["friends"],
    queryFn: fetchFriends,
  });

  if (userIsLoading || userIsFetching) {
    return (
      <Fragment>
        <h3>T01UseTwoUseQueryHook</h3>
        <div>Loading...</div>
      </Fragment>
    );
  }
  if (userIsError) {
    return (
      <Fragment>
        <h3>T01UseTwoUseQueryHook</h3>
        <div>{(userError as Error).message}</div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <h3>T01UseTwoUseQueryHook</h3>

      <h4>Users</h4>
      {users?.map((user) => (
        <div key={user.id}>
          <Link href={`react-query/user-details/${user.id}`}>
            {" "}
            id: {user.id} - Name: {user.name}
          </Link>
        </div>
      ))}

      <h4>Friends</h4>
      {friends?.map((user) => (
        <div key={user.id}>
          id: {user.id} - Name: {user.name}
        </div>
      ))}
    </Fragment>
  );
};

export default T01UseTwoUseQueryHook;
