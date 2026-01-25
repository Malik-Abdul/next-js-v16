import { Fragment } from "react/jsx-runtime";
import { useQuery } from "@tanstack/react-query";

import { FetchUsersType } from "@/types/Users";
import { USERS_URLS } from "@/constants/api";

const fetchUsers = async (): Promise<FetchUsersType[]> => {
  const res = await fetch(USERS_URLS.SALARY_RANGE_51480_51500);
  if (!res.ok) throw new Error("Some API Error");
  return res.json();
};

const T03WithReactQuery = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  console.log("Rendering T03WithReactQuery");
  return (
    <Fragment>
      <h2>Use of React Query</h2>
      {isLoading && <div>Loading...</div>}
      {error && <div>{(error as Error).message}</div>}
      {data &&
        data.map((u) => (
          <div key={u.id}>
            id: {u.id} - Name: {u.name} -{" "}
            <span className="text-red-500">Salary: {u.salary}</span>
          </div>
        ))}
    </Fragment>
  );
};

export default T03WithReactQuery;
