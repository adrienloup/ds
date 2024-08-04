import { StatusType } from "../../models/Status";
import { TextField } from "../Forms/TextField/TextField";

interface SearchBarProps {
  cssClass?: string;
  id?: string;
  placeholder?: string;
  status?: StatusType;
  value: string;
  onChange: (e: { target: { value: string } }) => void;
}

export const SearchBar = ({
  cssClass,
  id,
  placeholder,
  status,
  value,
  onChange,
}: SearchBarProps) => {
  // console.log("SearchBar");
  return (
    <TextField
      cssClass={cssClass ? `${cssClass}` : ""}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      prefix="manage_search"
      status={status}
    />
  );
};
