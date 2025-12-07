import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";

// const res = await fetch("https://jsonplaceholder.typicode.com/users");
//  const res = await fetch("http://localhost:4500/users");

const SortProductsCatsWise = () => {
  interface Users {
    id: number;
    name: string;
  }
  const [users, setUsers] = useState<Users[]>([]);
  const [err, setErr] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!(await res).ok) {
          throw new Error("Some API Error");
        }
        const jsonData: Users[] = await res.json();
        if (jsonData) {
          setUsers(jsonData);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setErr(String(err));
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);
  return (
    <Fragment>
      <div>Users</div>
      {err ? (
        <div style={{ color: "red" }}>{err}</div>
      ) : isLoading ? (
        <h2>Loading...</h2>
      ) : (
        users.map((user) => <div key={user.id}>{user.name}</div>)
      )}
    </Fragment>
  );
};

export default SortProductsCatsWise;
