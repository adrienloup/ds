import { Checkbox } from "../Forms/Checkbox/Checkbox";
import { TextField } from "../Forms/TextField/TextField";
import style from "./SearchBar.module.scss";

type SearchBarType = {
  label?: string;
  value: string;
  checked: boolean;
  onChange: (e: { target: { value: string } }) => void;
  onCheck: (e: { target: { checked: boolean } }) => void;
};

export const SearchBar = ({
  label,
  value,
  checked,
  onChange,
  onCheck,
}: SearchBarType) => {
  return (
    <div className={style.searchbar}>
      <TextField
        cssClass={style.textfield}
        label={label}
        value={value}
        onChange={onChange}
        placeholder="UI components"
        prefix="manage_search"
      />
      <Checkbox
        cssClass={style.checkbox}
        checked={checked}
        onChange={onCheck}
        label="Only show new components"
      />
    </div>
  );
};
