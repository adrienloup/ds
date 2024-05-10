import { useState } from "react";
import style from "./NotificationList.module.scss";

type FormProps = {
  handleAdd: ({ id, label }: { id: any; label: any }) => void;
};

export const NotificationForm = ({ handleAdd }: FormProps) => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: { target: { value: string } }) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const id = new Date().getTime();
    const label = value;

    handleAdd({ id, label });
    setValue("");
  };

  return (
    <form action="submit" onSubmit={onSubmit} className={style.form}>
      <input
        type="text"
        placeholder="Add notification..."
        value={value}
        onChange={onChange}
      />
      {value && <button>Add</button>}
    </form>
  );
};
