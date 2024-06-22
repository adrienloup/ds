import { useState } from "react";

export function TestNoRerender() {
  console.log("TestNoRerender");

  const [user, setUser] = useState({
    name: "Adrien",
    age: 42,
  });

  function handleNoRerender() {
    user.age = 43;
    setUser(user);
    console.log(user);
  }

  function handleRerender() {
    setUser({ ...user, age: user.age + 1 });
    console.log(user);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <button onClick={() => handleNoRerender()}>No re-render</button>
      </div>
      <div>
        <button onClick={() => handleRerender()}>Re-render</button>
      </div>
      <div>{JSON.stringify(user.age)}</div>
    </div>
  );
}
