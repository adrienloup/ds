export function TestListSearchableCheckbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  console.log("TestListSearchableCheckbox");

  return (
    <label style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  );
}
