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
      <button onClick={onDelete}>x</button>
    </div>
  );
};
