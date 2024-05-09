import { Button } from "../Button/Button";
import style from "./TodoList.module.scss";

type TodoProps = {
  todo: {
    id: number;
    label: string;
  };
  onDelete: () => void;
};

export const Todo = ({ todo, onDelete }: TodoProps) => {
  return (
    <div className={style.todo}>
      <span>{todo.label}</span>
      <Button cssClass={style.button} onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
};
