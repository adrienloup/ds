import { Link } from "react-router-dom";
import { PageType } from "../../models/Page";
import { Empty } from "../Empty/Empty";
import styles from "./PageList.module.scss";
import { Icon } from "../Icon/Icon";

interface PageListProps {
  list: PageType[];
}

export const PageList = ({ list }: PageListProps) => {
  // console.log("PageList");
  const listed = [];
  // let lastCategory = "";

  for (const page of list) {
    // if (page.category!.value !== lastCategory) {
    //   listed.push(
    //     <div key={page.category!.value} className={styles.category}>
    //       {page.category!.name}
    //     </div>
    //   );
    // }
    // lastCategory = page.category!.value;
    listed.push(
      <Link key={page.name} to={page.path!} className={styles.item}>
        <span className={styles.page}>
          {page.name} <span>component ({page.category?.name})</span>
        </span>
        <Icon name="read_more" cssClass={styles.icon} />
      </Link>
    );
  }

  return (
    <div className={styles.list}>
      {listed.length > 0 ? (
        listed
      ) : (
        <Empty
          text="Nothing matches your search but don't give up :)"
          cssClass={styles.empty}
        />
      )}
    </div>
  );
};
