import { TextField } from "../Forms/TextField/TextField";

type SearchBarType = {
  cssClass?: string[];
  id?: string;
  status?: "info" | "success" | "warning" | "error";
  value: string;
  onChange: (e: { target: { value: string } }) => void;
};

export const SearchBar = ({
  cssClass,
  id,
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
        placeholder="UI components"
        prefix="manage_search"
        status={status}
      />
    </div>
  );
};
