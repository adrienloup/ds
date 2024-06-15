export function TestListSearchableRange({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="range"
        min="0"
        max="5"
        step="1"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {`$${value}`}
    </div>
  );
}
