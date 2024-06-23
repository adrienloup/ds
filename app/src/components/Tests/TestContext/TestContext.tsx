export function TestContext() {
  console.log("TestContext");

  return (
    <div>
      <p style={{ fontSize: "2rem", color: "red", marginTop: "1rem" }}>
        Allows you to avoid prop drilling.
      </p>
    </div>
  );
}
