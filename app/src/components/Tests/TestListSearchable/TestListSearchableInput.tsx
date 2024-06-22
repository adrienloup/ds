export function TestListSearchableInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  console.log("TestListSearchableInput");

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
