import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { DataContext } from "../../contexts/DataContext";
import { DataType } from "../../models/Data";
import { NotificationsComponent } from "../Notifications/Notifications";
import { ButtonComponent } from "../Button/Button";
import { BadgeComponent } from "../Badge/Badge";
import { ModalComponent } from "../Modal/Modal";
import { IconComponent } from "../Icon/Icon";
import style from "./ToolBar.module.scss";

// @TODO: change the event optimally
type ToolBarProps = {
  onClick?: () => void;
};

export const ToolBarComponent = ({ onClick }: ToolBarProps) => {
  const { data } = useContext<DataType>(DataContext);
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className={style.toolbar}>
      {data.user && (
        <ButtonComponent
          ariaLabel={"Settings"}
          cssClass={style.button}
          to={"/ds/login"}
        >
          <IconComponent name={"face_2"} />
        </ButtonComponent>
      )}
      <ButtonComponent
        href={"https://github.com/adrienloup/ds"}
        ariaLabel={"Github"}
        cssClass={style.button}
      >
        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
          <path
            d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
            fill="currentColor"
          ></path>
        </svg>
      </ButtonComponent>
      <BadgeComponent
        value={data.notifications.length}
        max={9}
        cssClass={style.badge}
      >
        <ButtonComponent
          ariaLabel={"Notifications"}
          cssClass={style.button}
          onClick={() => setModal(!modal)}
        >
          <IconComponent name="notifications" />
        </ButtonComponent>
      </BadgeComponent>
      <ButtonComponent
        ariaLabel={"Settings"}
        cssClass={style.button}
        onClick={onClick}
      >
        <IconComponent name={"settings"} />
      </ButtonComponent>
      {modal &&
        createPortal(
          <ModalComponent
            head={<h3>Breaking news</h3>}
            body={<NotificationsComponent />}
            open={modal}
            onClick={() => setModal(false)}
          />,
          document.body
        )}
    </div>
  );
};
