import LineChart from "../LineChart/LineChart";
import type { CardProps } from "@/types/Card.types";
import styles from "./Card.module.css";
import { formatNumber } from "../../utils/helper";

const Card: React.FC<CardProps> = ({
  title,
  titlePrefix,
  value,
  prefix,
  indicator,
  symbol,
  symbolName,
  sparkLine,
}) => {
  const negativeValue = indicator < 0;
  return (
    <>
      <div className={styles.tile}>
        <div className={styles["tile__title-container"]}>
          <span className={styles["tile__title"]}>
            {titlePrefix}
            {title}
          </span>
          <span
            className={`${styles["tile__indicator"]} ${
              negativeValue ? styles["tile__indicator-negative"] : ""
            }`}
          >
            {formatNumber(indicator)}
          </span>
        </div>
        <div className={styles["tile__value-container"]}>
          <span className={styles["tile__value"]}>
            {prefix ? `${prefix} ${formatNumber(value)}` : formatNumber(value)}
          </span>
        </div>
        {symbol && (
          <div className={styles["tile__symbol-container"]}>
            <span className={styles["tile__symbol"]}>({symbol}) </span>
            <span className={styles["tile__symbol-name"]}>{symbolName}</span>
          </div>
        )}
        <div className={styles["tile__line-chart"]}>
          <LineChart data={sparkLine} height={100} negative={negativeValue} />
        </div>
      </div>
    </>
  );
};

export default Card;
