import { ReactNode } from "react";

const useDataAndAriaAttr = (props: Record<string, string>) =>
  Object.entries(props)
    .filter(([key]) => {
      const isValid = key.startsWith("data-") || key.startsWith("aria-");
      if (!isValid) {
        console.error(`Source Design System: Unknown prop "${key}"`);
      }
      return isValid;
    })
    .reduce((prev, [key, value]) => Object.assign(prev, { [key]: value }), {});

export function TestAddDataAndAriaAttr({
  children,
  ...dataAndAriaAttr
}: { children: ReactNode } | { children: ReactNode & Record<string, string> }) {
  return (
    <div
      style={{
        padding: "1rem",
        width: "fit-content",
        border: "0.2rem solid var(--color-3)",
      }}
      {...useDataAndAriaAttr(dataAndAriaAttr)}
    >
      {children}
    </div>
  );
}
