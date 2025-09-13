import LineChart from "../LineChart/LineChart";
import type { CardProps } from "@/types/Card.types";
import styles from "./Card.module.css";

const Card: React.FC<CardProps> = ({
  title,
  titlePrefix,
  value,
  prefix,
  indicator,
  symbol,
  symbolName,
}) => {
  const data = [1, 2, 3, 4, 5, 4, 3, 2, 5, 6];

  return (
    <>
      <div className={styles.tile}>
        <div className={styles["tile__title-container"]}>
          <span className={styles["tile__title"]}>
            {titlePrefix}
            {title}
          </span>
          <span
            className={`${styles["tile__indicator"]} ${styles["tile__indicator-negative"]}`}
          >
            {indicator}
          </span>
        </div>
        <div className={styles["tile__value-container"]}>
          <span className={styles["tile__value"]}>
            {prefix ? `${prefix} ${value}` : value}
          </span>
        </div>
        <div className={styles["tile__symbol-container"]}>
          <span className={styles["tile__symbol"]}>({symbol}) </span>
          <span className={styles["tile__symbol-name"]}>{symbolName}</span>
        </div>
        <div className={styles["tile__line-chart"]}>
          <LineChart data={data} height={100} />
        </div>
      </div>
    </>
  );
};

export default Card;
