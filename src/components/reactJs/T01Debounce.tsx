import { useEffect, useMemo, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { FetchUsers } from "@/types/Users";

import { useDebounce } from "@/hooks/useDebounce";
import { buildUsersUrl } from "@/constants/api";

// Filters
// http://localhost:4500/UsersFifty?salary=52085
// http://localhost:4500/users?salary_gte=50000&salary_lte=60000

const T01Debounce = () => {
  const [users, setUsers] = useState<FetchUsers[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const debounceSearch = useDebounce(search, 500); // 0.5s debounce

  useEffect(() => {
    setIsLoading(true);
    const fetchUsers = async () => {
      try {
        const url = buildUsersUrl({
          salary_gte: 51000,
          salary_lte: 51500,
          ...(debounceSearch && { city_like: `^${debounceSearch}` }),
        });
        const result = await fetch(url);
        if (!result.ok) {
          setError("Some API Error");
        } else {
          const totalCount = result.headers.get("X-Total-Count");
          console.log("Total Users:", totalCount);
          const jsonData = await result.json();
          if (jsonData) {
            setUsers(jsonData);
          }
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(String(err));
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, [debounceSearch]);

  return (
    <Fragment>
      <h4>Debounce</h4>
      <h5>Users Data</h5>
      <div className="text-red-600">
        Note: Debounce is working fine but due to json server the search query
        is not providing correct results.
      </div>
      city:{" "}
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white border border-gray-300 text-gray-900 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : users.length > 0 ? (
        users.map((user, index) => (
          <div key={user.id}>
            {index + 1}- <span className="text-blue-300">{user.id}:</span>{" "}
            {user.name}{" "}
            <span className="text-red-300">Salary: {user.salary}</span>{" "}
            <span className="text-green-300">City: {user.city}</span>
          </div>
        ))
      ) : (
        <div>No Data</div>
      )}
    </Fragment>
  );
};

export default T01Debounce;
