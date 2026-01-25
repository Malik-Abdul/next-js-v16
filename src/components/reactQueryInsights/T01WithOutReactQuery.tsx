import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { USERS_URLS } from "@/constants/api";
import { FetchUsersType } from "@/types/Users";
import axios from "axios";

const url = USERS_URLS.SALARY_RANGE_51480_51500;

const T01WithOutReactQuery = () => {
  const [data, setData] = useState<FetchUsersType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <Fragment>
        <h2>T01WithOutReactQuery</h2>
        <div>Loading...</div>
      </Fragment>
    );
  }
  if (error) {
    return (
      <Fragment>
        <h2>T01WithOutReactQuery</h2>
        <div>{error}</div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <h2>T01WithOutReactQuery</h2>
      <div>
        <h3>Users</h3>
        {data.length > 0 ? (
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
export default T01WithOutReactQuery;
