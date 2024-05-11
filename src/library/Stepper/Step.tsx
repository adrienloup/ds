import { DsIcon } from "../Icon/Icon";
import style from "./Step.module.scss";

type StepType = {
  index: number;
  label: string;
  active?: boolean;
  complete?: boolean;
  update: (index: number) => void;
};

export const DsStep = ({
  index,
  label,
  active,
  complete,
  update,
}: StepType) => {
  return (
    <div
      className={[
        style.step,
        active ? ` ${style.active}` : "",
        complete ? ` ${style.complete}` : "",
      ].join("")}
    >
      <button className={style.button} onClick={() => update(index + 1)}>
        {complete ? <DsIcon name="done" /> : index + 1}
      </button>
      <span className={style.label}>{label}</span>
    </div>
  );
};
