import { DsIcon } from "../Icon/Icon";

export interface DsStepType {
  index: number;
  label: string;
  active?: boolean;
  complete?: boolean;
  update: (index: number) => void;
}

export const DsStep = ({
  index,
  label,
  active,
  complete,
  update,
}: DsStepType) => {
  return (
    <div
      className={[
        "ds-step",
        active ? ` ${"ds-step-active"}` : "",
        complete ? ` ${"ds-step-complete"}` : "",
      ].join("")}
    >
      <button className={"ds-step_button"} onClick={() => update(index + 1)}>
        {complete ? <DsIcon name="done" /> : index + 1}
      </button>
      <span className={"ds-step_label"}>{label}</span>
    </div>
  );
};
