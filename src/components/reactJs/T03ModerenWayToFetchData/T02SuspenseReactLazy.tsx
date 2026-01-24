import { Suspense, useMemo } from "react";
import { Fragment } from "react/jsx-runtime";
import { USERS_URLS } from "@/constants/api";

const url = USERS_URLS.SALARY_RANGE_51480_51500;
console.log(url); // Check URL

const WrapPromise = (promise: Promise<any>) => {
  let status = "pending";
  let result: any;
  const suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );
  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    },
  };
};

const fetchResourse = () => {
  const promise = fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("API Error");
      return res.json();
    })
    .then((data) => data);
  return WrapPromise(promise);
};

const Users = () => {
  const resource = useMemo(() => fetchResourse(), []);
  const users = resource.read();

  return (
    <div>
      {users.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

const T02SuspenseReactLazy = () => {
  return (
    <Fragment>
      <h5>T02SuspenseReactLazy</h5>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Users />
      </Suspense> */}
    </Fragment>
  );
};

export default T02SuspenseReactLazy;
