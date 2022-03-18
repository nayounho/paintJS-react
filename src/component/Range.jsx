import styles from "../style/Range.module.css";

const Range = () => {
  return (
    <div className={styles.layout}>
      <input
        type="range"
        id="jsRange"
        min={0.1}
        max={10}
        step={0.2}
        className={styles.range}
      />
      <span className={styles.span}>3.5</span>
    </div>
  );
};

export default Range;
