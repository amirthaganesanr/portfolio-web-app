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
      <div className={styles.card}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>
            {titlePrefix}
            {title}
          </span>
          <span
            className={`${styles.indicator} ${
              negativeValue ? styles.indicatorNegative : ""
            }`}
          >
            {formatNumber(indicator)}
          </span>
        </div>
        <div className={styles.valueContainer}>
          <span className={styles.value}>
            {prefix ? `${prefix} ${formatNumber(value)}` : formatNumber(value)}
          </span>
        </div>
        {symbol && (
          <div className={styles.symbolContainer}>
            <span>({symbol}) </span>
            <span>{symbolName}</span>
          </div>
        )}
        <LineChart data={sparkLine} height={100} negative={negativeValue} />
      </div>
    </>
  );
};

export default Card;
