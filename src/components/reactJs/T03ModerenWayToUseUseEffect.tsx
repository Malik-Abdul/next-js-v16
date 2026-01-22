import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { USERS_URLS } from "@/constants/api";

const url = USERS_URLS.SALARY_RANGE_51000_51500;

const T03ModerenWayToUseUseEffect = () => {
  // Older way to fetch data
  // Problems:
  // 1. Extra rerender
  // 2 Extra variables
  const [data, setData] = useState();
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
  return (
    <Fragment>
      <div>{console.log("Rendering T03ModerenWayToUseUseEffect")}</div>
      <div>Moderen way to use UseEffect</div>
    </Fragment>
  );
};
export default T03ModerenWayToUseUseEffect;
