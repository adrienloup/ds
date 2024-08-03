import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "../Modal/Modal";
import { Icon } from "../Icon/Icon";
import styles from "./Search.module.scss";
import { SearchModal } from "../SearchModal/SearchModal";

export const Search = ({ active }: { active?: boolean }) => {
  // console.log("Search");
  const [searchModal, setSearchModal] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <div
      className={[styles.search, active ? ` ${styles.active}` : ""].join("")}
    >
      <button
        ref={ref}
        type="button"
        onClick={() => setSearchModal(!searchModal)}
        className={styles.button}
      >
        {active ? (
          <p>You are looking for something?</p>
        ) : (
          <>
            <Icon name="manage_search" cssClass={styles.icon} />
            <p>
              <span>You are looking for something?</span> Searching the site is
              quite simple
            </p>
          </>
        )}
      </button>
      {searchModal &&
        createPortal(
          <Modal
            targetRef={ref}
            head={<h3>Searching</h3>}
            body={<SearchModal />}
            open={searchModal}
            onClick={() => setSearchModal(false)}
          />,
          document.body
        )}
    </div>
  );
};
