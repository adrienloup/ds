import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "../TextField/TextField";
import style from "./Select.module.scss";

type OptionType = {
  name: string;
  path: string;
};

type SelectType = {
  options: OptionType[];
  value: string;
  handleValueChange: (e: { target: { value: string } }) => void;
};

export const Select = ({ options, value, handleValueChange }: SelectType) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function handleOptionChange(option: OptionType) {
    console.log("tutu");
    navigate(option.path);
    // setOpen(false);
  }

  return (
    <div
      // tabIndex={0}
      className={style.select}
      onClick={() => setOpen(!open)}
      onBlur={() => (console.log("1"), setOpen(false))}
    >
      tutu
      <input type="text" value={value} onChange={handleValueChange} />
      <TextField
        cssClass={style.textfield}
        value={value}
        onChange={handleValueChange}
        placeholder="UI components"
        prefix="manage_search"
      />
      <ul className={[style.options, open ? ` ${style.open}` : ""].join("")}>
        {options.map((option) => (
          <li
            key={option.name}
            tabIndex={0}
            className={style.option}
            onClick={(e) => {
              e.stopPropagation();
              console.log("2");
              handleOptionChange(option);
              // setOpen(false);
            }}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
