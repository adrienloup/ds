import { useState } from "react";
import style from "./TodoList.module.scss";

type TodoFormProps = {
  onAdd: ({ id, label }: { id: any; label: any }) => void;
};

export const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [value, setValue] = useState("");

  const onChange = (e: { target: { value: string } }) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const id = new Date().getTime();
    const label = value;
    onAdd({ id, label });
    setValue("");
  };

  return (
    <form action="submit" onSubmit={onSubmit} className={style.form}>
      <input
        type="text"
        placeholder="Add todo..."
        value={value}
        onChange={onChange}
      />
      {value && <button>Add</button>}
    </form>
  );
};
