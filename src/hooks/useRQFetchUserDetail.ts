import { useQuery } from "@tanstack/react-query";
import { FetchUsersType } from "@/types/Users";
import axios from "axios";
import { useEffect } from "react";

const fetchUsers = async (userId: string): Promise<FetchUsersType> => {
  const response = axios.get(`http://localhost:4500/users/${userId}`);
  return (await response).data;
};

export const useRQFetchUserDetail = (userId: string) => {
  const { data, error, isError, isSuccess, isLoading, isFetching } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => fetchUsers(userId),
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
