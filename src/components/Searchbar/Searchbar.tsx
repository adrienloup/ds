import { useId, useState } from "react";
import { IconComponent } from "../Icon/Icon";
import style from "./Searchbar.module.scss";

type SearchbarProps = {
  id?: string;
  label?: string;
  placeholder?: string;
  update: (value: string) => void;
};

export const SearchbarComponent = ({
  id,
  label,
  placeholder,
  update,
}: SearchbarProps) => {
  const [focus, setFocus] = useState<boolean>(false);
  const uId = useId();

  return (
    <div
      className={[`${style.searchbar}`, focus ? ` ${style.focus}` : ""].join(
        ""
      )}
    >
      <label
        htmlFor={id ? id : uId}
        className={style.label}
        dangerouslySetInnerHTML={{ __html: label! }}
      />
      <div className={style.inner}>
        <IconComponent name={"search"} cssClass={style.icon} />
        <input
          type="text"
          id={id ? id : uId}
          className={style.input}
          onChange={(e) => update(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
