import styles from "./Like.module.scss";

export const Like = ({ active }: { active: boolean }) => {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="467 392 58 57"
      className={[styles.like, active ? ` ${styles.active}` : ""].join("")}
    >
      <g transform="translate(467 392)">
        <path
          className={styles.heart}
          d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
        />
        <circle className={styles.circ1} cx="29" cy="29" r="1.5" />
        <g className={styles.grp7} opacity="0" transform="translate(7 6)">
          <circle className={styles.circ2} fill="#08d9e1" cx="2" cy="6" r="2" />
          <circle className={styles.circ3} fill="#1dcc45" cx="5" cy="2" r="2" />
        </g>
        <g className={styles.grp6} opacity="0" transform="translate(0 28)">
          <circle className={styles.circ2} fill="#ba14d7" cx="2" cy="7" r="2" />
          <circle className={styles.circ3} fill="#fff500" cx="3" cy="2" r="2" />
        </g>
        <g className={styles.grp3} opacity="0" transform="translate(52 28)">
          <circle className={styles.circ3} fill="#08d9e1" cx="2" cy="7" r="2" />
          <circle className={styles.circ2} fill="#1dcc45" cx="4" cy="2" r="2" />
        </g>
        <g className={styles.grp2} opacity="0" transform="translate(44 6)">
          <circle className={styles.circ3} fill="#ba14d7" cx="5" cy="6" r="2" />
          <circle className={styles.circ2} fill="#ba14d7" cx="2" cy="2" r="2" />
        </g>
        <g className={styles.grp5} opacity="0" transform="translate(14 50)">
          <circle className={styles.circ2} fill="#fff500" cx="6" cy="5" r="2" />
          <circle className={styles.circ3} fill="#fff500" cx="2" cy="2" r="2" />
        </g>
        <g className={styles.grp4} opacity="0" transform="translate(35 50)">
          <circle className={styles.circ2} fill="#ff7300" cx="6" cy="5" r="2" />
          <circle className={styles.circ3} fill="#ff7300" cx="2" cy="2" r="2" />
        </g>
        <g className={styles.grp1} opacity="0" transform="translate(24)">
          <circle
            className={styles.circ2}
            fill="#08d9e1"
            cx="2.5"
            cy="3"
            r="2"
          />
          <circle
            className={styles.circ3}
            fill="#08d9e1"
            cx="7.5"
            cy="2"
            r="2"
          />
        </g>
      </g>
    </svg>
  );
};
