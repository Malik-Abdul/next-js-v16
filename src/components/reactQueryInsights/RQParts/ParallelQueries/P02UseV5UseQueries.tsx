import { Fragment } from "react/jsx-runtime";

import Link from "next/link";
import { useQueries } from "@tanstack/react-query";
import { FetchUsersType } from "@/types/Users";
import { USERS_URLS } from "@/constants/api";
import axios from "axios";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

const fetchUsers = async (): Promise<FetchUsersType[]> => {
  const response = axios.get(USERS_URLS.SALARY_RANGE_51480_51500);
  return (await response).data;
};

const fetchFriends = async (): Promise<FetchUsersType[]> => {
  const response = axios.get("http://localhost:4500/friends");
  return (await response).data;
};

const P02UseV5UseQueries = () => {
  const results = useQueries({
    queries: [
      {
        queryKey: ["users"],
        queryFn: fetchUsers,
      },
      {
        queryKey: ["friends"],
        queryFn: fetchFriends,
      },
    ],
  });
  const [usersQuery, friendsQuery] = results;
  const isLoading = results.some((q) => q.isLoading || q.isFetching);
  const isError = results.some((q) => q.isError);
  const error = results.find((q) => q.error)?.error;
  const users = usersQuery.data;
  const friends = friendsQuery.data;

  if (isLoading) {
    return <Loading heading="T01UseV5UseQueries" />;
  }

  if (isError) {
    return (
      <Error
        heading="T01UseV5UseQueries"
        errorMessage={(error as Error).message}
      />
    );
  }
  return (
    <Fragment>
      <h3>P02UseV5UseQueries</h3>

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

export default P02UseV5UseQueries;
