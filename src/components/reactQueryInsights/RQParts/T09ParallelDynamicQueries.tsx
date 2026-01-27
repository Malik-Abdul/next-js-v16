import { Fragment } from "react";
import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";

type User = {
  id: number;
  name: string;
};

const fetcher = async (id: number): Promise<User> => {
  const response = await axios.get<User>(`http://localhost:4500/users/${id}`);
  return response.data;
};

const FetchUserDetails = ({ userIds }: { userIds: number[] }) => {
  const queryResults = useQueries({
    queries: userIds.map((id) => ({
      queryKey: ["userDetails", id],
      queryFn: () => fetcher(id),
      enabled: !!id,
    })),
  });

  console.log({ queryResults });
  return (
    <Fragment>
      <h3>Users</h3>
      {queryResults.map((query, index) => {
        if (query.isLoading) {
          return <div key={index}>Loading user...</div>;
        }

        if (query.isError) {
          return <div key={index}>{(query.error as Error).message}</div>;
        }

        if (!query.data) return null;

        return (
          <div key={query.data.id}>
            id: {query.data.id} - Name: {query.data.name}
          </div>
        );
      })}
    </Fragment>
  );
};

const T09ParallelDynamicQueries = () => {
  return (
    <Fragment>
      <h3>T09ParallelDynamicQueries</h3>
      <FetchUserDetails userIds={[1, 2]} />
    </Fragment>
  );
};

export default T09ParallelDynamicQueries;
