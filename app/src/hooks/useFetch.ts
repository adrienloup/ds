import { useEffect, useState } from "react";
import { ErrorResponse } from "react-router-dom";

export function useFetch<T>(
  url: string,
  options: { headers: HeadersInit | undefined } = { headers: {} }
) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T[]>([]);
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
      .then((data: T[]) => {
        setData(data as T[]);
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
