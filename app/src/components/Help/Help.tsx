import { useState } from "react";
import style from "./Help.module.scss";
import { createPortal } from "react-dom";
import { Modal } from "../Modal/Modal";

export const Help = ({ active }: { active?: boolean }) => {
  // console.log("Help");
  const [searchModal, setSearchModal] = useState(false);

  return (
    <div className={[style.help, active ? ` ${style.active}` : ""].join("")}>
      <div onClick={() => setSearchModal(!searchModal)} className={style.inner}>
        <span>
          You are looking for something? Searching the site is simple{" "}
        </span>
        Thank you
      </div>
      {searchModal &&
        createPortal(
          <Modal
            head={<h3>Edit</h3>}
            body={<>search</>}
            open={searchModal}
            onClick={() => setSearchModal(false)}
          />,
          document.body
        )}
    </div>
  );
};
