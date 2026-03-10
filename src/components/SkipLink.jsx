import styles from "./SkipLink.module.css";

function SkipLink({ mainId }) {
  return (
    <a
      href={`#${mainId}`}
      class={styles.skipLink}
      aria-label="Skip to main content"
      tabindex="-1"
    >
      <span tabindex="0">[skip to main content]</span>
    </a>
  );
}

export default SkipLink;
