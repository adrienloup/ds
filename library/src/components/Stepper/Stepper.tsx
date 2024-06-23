import { DsStep } from "./Step";
import "./Stepper.scss";

export interface DsStepperType {
  prev?: string;
  next?: string;
  steps: string[];
  active: number;
  update: (index: number) => void;
}

export const DsStepper = ({
  prev,
  next,
  steps,
  active,
  update,
}: DsStepperType) => {
  return (
    <div className={"ds-stepper"}>
      {prev && (
        <button
          className={[
            "ds-stepper_prev",
            active < 2 ? ` ${"ds-stepper_disabled"}` : "",
          ].join("")}
          onClick={() => {
            update(active - 1);
          }}
        >
          {prev}
        </button>
      )}
      {steps.length > 0 && (
        <div className={"ds-stepper_inner"}>
          {steps.map((label, index) => (
            <DsStep
              key={index}
              index={index}
              label={label}
              active={active === index + 1}
              complete={index + 1 < active}
              update={update}
            />
          ))}
        </div>
      )}
      {next && (
        <button
          className={[
            "ds-stepper_next",
            active >= steps.length ? ` ${"ds-stepper_disabled"}` : "",
          ].join("")}
          onClick={() => {
            update(active + 1);
          }}
        >
          {next}
        </button>
      )}
    </div>
  );
};
