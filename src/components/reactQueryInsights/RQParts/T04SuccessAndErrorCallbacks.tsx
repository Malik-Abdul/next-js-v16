import { Fragment } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";

import { FetchUsersTypeData } from "@/types/Users";
import { USERS_URLS } from "@/constants/api";
import axios from "axios";
import { useEffect } from "react";

const fetchUsers = async (): Promise<FetchUsersTypeData> => {
  return axios.get(USERS_URLS.SALARY_RANGE_51480_51500);
};

const T04SuccessAndErrorCallbacks = () => {
  const onSuccess = (data: FetchUsersTypeData) => {
    console.log("Perform side effect after data fetching: ", data);
  };
  const onError = (error: Error) => {
    console.log("Perform side effect after data error: ", error);
  };
  const { data, error, isError, isSuccess, isLoading, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    retry: false,
  });
  useEffect(() => {
    if (isSuccess && data) {
      onSuccess(data);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError && error) {
      onError(error);
    }
  }, [isError, error]);
  console.log({ isFetching, isLoading });
  if (isLoading || isFetching) {
    return (
      <Fragment>
        <h3>T04SuccessAndErrorCallbacks</h3>
        <div>Loading...</div>
      </Fragment>
    );
  }
  if (isError) {
    return (
      <Fragment>
        <h3>T04SuccessAndErrorCallbacks</h3>
        <div>{(error as Error).message}</div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <h3>T04SuccessAndErrorCallbacks</h3>

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

export default T04SuccessAndErrorCallbacks;
