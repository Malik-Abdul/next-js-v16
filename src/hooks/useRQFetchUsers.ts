import { useQuery } from "@tanstack/react-query";
import { FetchUsersType } from "@/types/Users";
import { USERS_URLS } from "@/constants/api";
import axios from "axios";
import { useEffect } from "react";

type UserLite = {
  id: number;
  name: string;
};

const fetchUsers = async (): Promise<FetchUsersType[]> => {
  const response = axios.get(USERS_URLS.SALARY_RANGE_51480_51500);
  return (await response).data;
};

export const useRQFetchUsers = () => {
  const { data, error, isError, isSuccess, isLoading, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    // retry: false,
    select: (data): UserLite[] =>
      data?.map((user) => ({
        id: user.id,
        name: user.name,
      })),
  });

  console.log({ isFetching, isLoading });

  useEffect(() => {
    if (isSuccess && data) {
      console.log("Perform side effect after data fetching: ", data);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError && error) {
      console.log("Perform side effect after data error: ", error);
    }
  }, [isError, error]);

  return { data, error, isLoading, isFetching, isError };
};
