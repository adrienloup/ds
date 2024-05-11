import { useState } from "react";
import style from "./Notifications.module.scss";

type FormProps = {
  handleAdd: ({ id, title }: { id: number; title: string }) => void;
};

export const NotificationFormComponent = ({ handleAdd }: FormProps) => {
  const [value, setValue] = useState<string>("");

  const onChange = (e: { target: { value: string } }) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const id = new Date().getTime();
    const title = value;

    handleAdd({ id, title });
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
