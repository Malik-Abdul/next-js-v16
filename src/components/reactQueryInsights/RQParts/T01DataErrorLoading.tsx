import { Fragment } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";

import { FetchUsersTypeData } from "@/types/Users";
import { USERS_URLS } from "@/constants/api";
import axios from "axios";

const fetchUsers = async (): Promise<FetchUsersTypeData> => {
  return axios.get(USERS_URLS.SALARY_RANGE_51480_51500);
};

const T01DataErrorLoading = () => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  if (isLoading) {
    return (
      <Fragment>
        <h2>T01DataErrorLoading</h2>
        <div>Loading...</div>
      </Fragment>
    );
  }
  if (isError) {
    return (
      <Fragment>
        <h2>T01DataErrorLoading</h2>
        <div>{(error as Error).message}</div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <h2>T01DataErrorLoading</h2>
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

export default T01DataErrorLoading;
