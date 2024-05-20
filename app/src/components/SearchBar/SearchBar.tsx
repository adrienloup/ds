import { Checkbox } from "../Forms/Checkbox/Checkbox";
import { TextField } from "../Forms/TextField/TextField";
import style from "./SearchBar.module.scss";

interface SearchBarType {
  cssClass?: string;
  value: string;
  checked: boolean;
  onChange: (e: string) => void;
  onCheck: (e: boolean) => void;
}

export const SearchBar = ({
  cssClass,
  value,
  checked,
  onChange,
  onCheck,
}: SearchBarType) => {
  return (
    <div className={[style.searchBar, cssClass ? ` ${cssClass}` : ""].join("")}>
      <TextField value={value} onChange={onChange} placeholder="Search..." />
      <Checkbox
        checked={checked}
        onChange={onCheck}
        label="Only show new components"
      />
    </div>
  );
};
