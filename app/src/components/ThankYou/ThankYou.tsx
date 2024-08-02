import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "../Modal/Modal";
import { Icon } from "../Icon/Icon";
import style from "./ThankYou.module.scss";

export const ThankYou = ({ active }: { active?: boolean }) => {
  // console.log("ThankYou");
  const [searchModal, setSearchModal] = useState(false);

  return (
    <div
      className={[style.thankyou, active ? ` ${style.active}` : ""].join("")}
    >
      <div
        tabIndex={0}
        onClick={() => setSearchModal(!searchModal)}
        className={style.inner}
      >
        <p>
          <span>You are looking for something?</span> Searching the site is
          quite simple
        </p>
        <div>Search</div>
        <Icon name="home" cssClass={style.icon} />
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
