import { Fragment } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";

import { FetchUsersTypeData } from "@/types/Users";
import { USERS_URLS } from "@/constants/api";
import axios from "axios";

const fetchUsers = async (): Promise<FetchUsersTypeData> => {
  return axios.get(USERS_URLS.SALARY_RANGE_51480_51500);
};

const T03useQueryOnClick = () => {
  // refetch: will refetch the data onClick handler
  const { data, error, isError, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    enabled: false, // make data: empty
  });
  console.log({ isFetching, isLoading });
  if (isLoading || isFetching) {
    return (
      <Fragment>
        <h3>T03useQueryOnClick</h3>
        <div>Loading...</div>
      </Fragment>
    );
  }
  if (isError) {
    return (
      <Fragment>
        <h3>T03useQueryOnClick</h3>
        <div>{(error as Error).message}</div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <h3>T03useQueryOnClick</h3>
      <button
        className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
        onClick={() => refetch()}
      >
        Click to Fetch
      </button>
      <h4>Users</h4>
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

export default T03useQueryOnClick;
