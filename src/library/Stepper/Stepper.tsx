import { DsStep } from "./Step";
import style from "./Stepper.module.scss";

type StepperProps = {
  prev?: string;
  next?: string;
  steps: string[];
  active: number;
  update: (index: number) => void;
};

export const DsStepper = ({
  prev,
  next,
  steps,
  active,
  update,
}: StepperProps) => {
  return (
    <div className={style.stepper}>
      {prev && (
        <button
          className={[style.prev, active < 2 ? ` ${style.disabled}` : ""].join(
            ""
          )}
          onClick={() => {
            update(active - 1);
          }}
        >
          {prev}
        </button>
      )}
      {steps.length > 0 && (
        <div className={style.inner}>
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
            style.next,
            active >= steps.length ? ` ${style.disabled}` : "",
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
