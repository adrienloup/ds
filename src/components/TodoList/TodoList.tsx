import { useContext, useState } from "react";
import { SettingContext } from "../../contexts/Setting";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import style from "./TodoList.module.scss";

export const TodoList = () => {
  const { setting, setSetting } = useContext(SettingContext);
  const [todolist, setTodolist] = useState(setting.todo);

  const onDelete = (id: number) => {
    const listed = todolist.filter((todo) => todo.id !== id);
    setSetting({ ...setting, todo: [...listed] });
    setTodolist([...listed]);
  };

  const onAdd = ({ id, label }: { id: number; label: string }) => {
    setSetting({ ...setting, todo: [...todolist, { id, label }] });
    setTodolist([...todolist, { id, label }]);
  };

  return (
    <div className={style.todolist}>
      <ul>
        {todolist.map((todo) => (
          <li key={todo.id}>
            <Todo todo={todo} onDelete={() => onDelete(todo.id)} />
          </li>
        ))}
      </ul>
      <TodoForm onAdd={onAdd} />
    </div>
  );
};
