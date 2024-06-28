import { useFetch } from "./TestCustomHookUseFetch";

export function TestCustomHookFetch() {
  console.log("TestCustomHookFetch");

  const { loading, data, errors } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=12000"
  );

  return (
    <div style={{ marginTop: "2rem" }}>
      {loading && <div>Loading...</div>}
      {errors && <div>{errors.toString()}</div>}
      {data && (
        <div style={{ lineHeight: "1.2" }}>
          <ul>
            {data.map((post: { id: number; title: string }) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
