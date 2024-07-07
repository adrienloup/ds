import { CSSProperties, ReactNode } from "react";
import { DsButton } from "../Button/Button";
import { DsIcon } from "../Icon/Icon";
import "./Modal.scss";

interface ModalProps {
  children: ReactNode;
  open: boolean;
  cssClass?: string;
  position?: string;
  maxWidth?: string;
  transition?: boolean;
  backdrop?: boolean;
  style?: CSSProperties;
  onClick: () => void;
}

export const DsModal = ({
  children,
  open,
  cssClass,
  position = "middle",
  maxWidth = "40rem",
  transition = true,
  backdrop = true,
  onClick,
  ...rest
}: ModalProps) => {
  return (
    <div
      className={[
        "ds-modal",
        ` ds-modal-${position}`,
        transition ? ` ds-modal-transition` : "",
        !backdrop ? ` ds-modal-border` : "",
        open ? ` ds-modal-open` : "",
        cssClass ? ` ${cssClass}` : "",
      ].join("")}
      {...rest}
    >
      <div className="ds-modal_content" style={{ maxWidth: `${maxWidth}` }}>
        <div className="ds-modal_inner">{children}</div>
        <DsButton
          cssClass="ds-modal_button ds-modal_button-contained ds-modal_button-small"
          onClick={onClick}
        >
          <DsIcon name="close" />
        </DsButton>
      </div>
      {backdrop && <div className="ds-modal_backdrop" onClick={onClick}></div>}
    </div>
  );
};
