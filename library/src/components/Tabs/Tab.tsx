import { ForwardedRef, ReactNode } from "react";

export interface DsTabType {
  children: ReactNode;
  id: string;
  tabRef: ForwardedRef<HTMLButtonElement>;
  isSelected: boolean;
  controls: string;
  ariaLabel: string;
  disabled: boolean;
  onClick: () => void;
  onKeyDown: (event: { key: string }) => void;
}

export const DsTab = ({
  children,
  id,
  tabRef,
  isSelected,
  controls,
  ariaLabel,
  disabled,
  onClick,
  onKeyDown,
}: DsTabType) => {
  return (
    <button
      type="button"
      role="tab"
      className={[
        "ds-tab",
        isSelected ? " ds-tab--selected" : "",
        disabled ? " ds-tab--disabled" : "",
      ].join("")}
      ref={tabRef}
      id={id}
      aria-selected={isSelected}
      aria-controls={controls}
      aria-label={ariaLabel}
      tabIndex={isSelected ? 0 : -1}
      disabled={disabled}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      {children}
    </button>
  );
};
