import { Fragment } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";

import { FetchUsersTypeData } from "@/types/Users";
import { USERS_URLS } from "@/constants/api";
import axios from "axios";

const fetchUsers = async (): Promise<FetchUsersTypeData> => {
  return axios.get(USERS_URLS.SALARY_RANGE_51480_51500);
};

const T02QueryCache = () => {
  const { data, error, isError, isLoading, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    // gcTime: 5 * 60 * 1000, // 5 minutes is default we can change it
    gcTime: 5000, // 5000 ms
  });
  console.log({ isFetching, isLoading });
  if (isLoading) {
    return (
      <Fragment>
        <h2>T02QueryCache</h2>
        <div>Loading...</div>
      </Fragment>
    );
  }
  if (isError) {
    return (
      <Fragment>
        <h2>T02QueryCache</h2>
        <div>{(error as Error).message}</div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <h2>T02QueryCache</h2>
      <h3>Users</h3>
      {data &&
        data?.data.map((u) => (
          <div key={u.id}>
            id: {u.id} - Name: {u.name} -{" "}
            <span className="text-red-500">Salary: {u.salary}</span>
          </div>
        ))}
    </Fragment>
  );
};

export default T02QueryCache;
