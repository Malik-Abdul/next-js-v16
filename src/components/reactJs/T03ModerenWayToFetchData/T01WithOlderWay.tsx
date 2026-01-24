import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { USERS_URLS } from "@/constants/api";
import { FetchUsersType } from "@/types/Users";

const url = USERS_URLS.SALARY_RANGE_51480_51500;

const T01WithOlderWay = () => {
  const [data, setData] = useState<FetchUsersType[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          setError("Some API Error");
        } else {
          const jsonData = await res.json();
          if (jsonData) {
            setData(jsonData);
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
  }, []);
  {
    console.log("Rendering T01OlderWay");
  }
  return (
    <Fragment>
      <h5>Older Way to fetch data</h5>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : data.length > 0 ? (
          data.map((item) => (
            <div className="text-amber-200 text-xs" key={item.id}>
              {item.name}
            </div>
          ))
        ) : (
          <div>No Data</div>
        )}
      </div>
    </Fragment>
  );
};
export default T01WithOlderWay;
