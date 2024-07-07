import { StatusType } from "../../models/Status";
import { TextField } from "../Forms/TextField/TextField";

type SearchBarType = {
  cssClass?: string[];
  id?: string;
  placeholder?: string;
  status?: StatusType;
  value: string;
  onChange: (e: { target: { value: string } }) => void;
};

export const SearchBar = ({
  cssClass,
  id,
  placeholder,
  status,
  value,
  onChange,
}: SearchBarType) => {
  // console.log("SearchBar");
  return (
    <div className={cssClass![0]}>
      <TextField
        cssClass={cssClass![1]}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        prefix="manage_search"
        status={status}
      />
    </div>
  );
};
