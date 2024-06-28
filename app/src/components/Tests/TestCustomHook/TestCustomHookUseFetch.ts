import { useEffect, useState } from "react";
import { ErrorResponse } from "react-router-dom";

export function useFetch(url: string, options = { headers: {} }) {
  console.log("TestCustomHookUseFetch");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState<ErrorResponse | null>(null);

  useEffect(() => {
    fetch(url, {
      ...options,
      headers: {
        Accept: "applications/json; charset=UTF-8",
        ...options.headers,
      },
    })
      .then((responce) => responce.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => setErrors(e))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    loading,
    data,
    errors,
  };
}
