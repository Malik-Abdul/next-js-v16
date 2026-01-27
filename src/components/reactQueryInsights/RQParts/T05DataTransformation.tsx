import { Fragment } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";

import { FetchUsersTypeData } from "@/types/Users";
import { USERS_URLS } from "@/constants/api";
import axios from "axios";
import { useEffect } from "react";

type UserLite = {
  id: number;
  name: string;
};

const fetchUsers = async (): Promise<FetchUsersTypeData> => {
  return axios.get(USERS_URLS.SALARY_RANGE_51480_51500);
};

const T05DataTransformation = () => {
  const onSuccess = (data: UserLite[]) => {
    console.log("Perform side effect after data fetching: ", data);
  };
  const onError = (error: Error) => {
    console.log("Perform side effect after data error: ", error);
  };
  const { data, error, isError, isSuccess, isLoading, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    // retry: false,
    select: (data): UserLite[] =>
      data.data.map((user) => ({
        id: user.id,
        name: user.name,
      })),
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
        <h3>T05DataTransformation</h3>
        <div>Loading...</div>
      </Fragment>
    );
  }
  if (isError) {
    return (
      <Fragment>
        <h3>T05DataTransformation</h3>
        <div>{(error as Error).message}</div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <h3>T05DataTransformation</h3>

      <h4>Users</h4>
      {data &&
        data.map((useData) => (
          <div key={useData.id}>
            id: {useData.id}- Name: {useData.name}
          </div>
        ))}
    </Fragment>
  );
};

export default T05DataTransformation;
