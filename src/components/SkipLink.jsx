import styles from "./SkipLink.module.css";

function SkipLink({ mainId }) {
  return (
    <a
      href={`#${mainId}`}
      className={styles.skipLink}
      aria-label="Skip to main content"
      tabIndex="-1"
    >
      <span tabIndex="0">[skip to main content]</span>
    </a>
  );
}

export default SkipLink;
