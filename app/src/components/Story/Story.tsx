import { CSSProperties, ReactNode, useState } from "react";
import { useAlert } from "../../hooks/useAlert";
import { Button } from "../../components/Button/Button";
import { Icon } from "../../components/Icon/Icon";
import styles from "./Story.module.scss";
import { Tooltip } from "../Tooltip/Tooltip";

interface StoryProps {
  demo?: ReactNode;
  code?: ReactNode;
  codepen?: string;
  github?: string;
  story?: string;
  copy?: string;
  css?: CSSProperties;
}

export const Story = ({
  demo,
  code,
  codepen,
  github,
  copy,
  css,
}: StoryProps) => {
  // console.log("Story");
  const [expanded, setExpanded] = useState(true);
  const { addAlert } = useAlert();

  const copyCode = () => {
    navigator.clipboard.writeText(copy!);
    addAlert({
      text: "Copied",
      timeout: 1,
      status: "success",
    });
  };

  const handleOpenNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div
      className={[styles.story, expanded ? ` ${styles.expanded}` : ""].join("")}
    >
      {demo && (
        <>
          <div className={styles.demo} style={css}>
            {demo}
          </div>
          <div className={styles.toolsbar}>
            <Tooltip
              text="Source code"
              position="top"
              onKeyDown={() => setExpanded(!expanded)}
            >
              <Button
                tabIndex={-1}
                aria-label={"Source code"}
                cssClass={`${styles.button} ${styles.contained} ${styles.small}`}
                onClick={() => setExpanded(!expanded)}
              >
                <Icon name={expanded ? "code" : "code_off"} />
              </Button>
            </Tooltip>
            <Tooltip
              text="Copy the source"
              position="top"
              onKeyDown={() => copyCode()}
            >
              <Button
                tabIndex={-1}
                cssClass={`${styles.button} ${styles.contained} ${styles.small}`}
                aria-label={"Copy the source"}
                onClick={() => copyCode()}
              >
                <svg
                  focusable="false"
                  aria-hidden="true"
                  viewBox="64 64 896 896"
                  fill="currentColor"
                >
                  <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>
                </svg>
              </Button>
            </Tooltip>
            <Tooltip
              text="Edit in Codepen"
              position="top"
              onKeyDown={() =>
                handleOpenNewTab(`https://codepen.io/adrienloup/pen/${codepen}`)
              }
            >
              <Button
                tabIndex={-1}
                cssClass={`${styles.button} ${styles.contained} ${styles.small}`}
                href={`https://codepen.io/adrienloup/pen/${codepen}`}
                aria-label={"Edit in Codepen"}
              >
                <svg
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2"
                    strokeWidth="5"
                  />
                </svg>
              </Button>
            </Tooltip>
            <Tooltip
              text="GitHub repository"
              position="top-end"
              onKeyDown={() =>
                handleOpenNewTab(
                  `https://github.com/adrienloup/ds/tree/master/library/src/components/${github}`
                )
              }
            >
              <Button
                cssClass={`${styles.button} ${styles.contained} ${styles.small}`}
                href={`https://github.com/adrienloup/ds/tree/master/library/src/components/${github}`}
                aria-label={"GitHub repository"}
              >
                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                  <path
                    d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
                    fill="currentColor"
                  ></path>
                </svg>
              </Button>
            </Tooltip>
          </div>
        </>
      )}
      {code && <pre className={styles.code}>{code}</pre>}
    </div>
  );
};
