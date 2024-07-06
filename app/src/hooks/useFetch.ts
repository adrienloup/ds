import { useEffect, useState } from "react";

export function useFetch(
  url: string,
  options: { headers: HeadersInit | undefined } = { headers: {} }
) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{ id: 0; title: ""; body: "" }[]>([]);
  const [errors, setErrors] = useState<{
    status: number;
    statusText: string;
    data: undefined;
  }>({
    status: 0,
    statusText: "",
    data: undefined,
  });

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
