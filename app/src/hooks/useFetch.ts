import { useEffect, useState } from "react";

export const useFetch = (url: string, options = { headers: {} }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);

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

  return { loading, data, errors };
};
