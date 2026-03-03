import styles from "./Lightbox.module.css";

function Lightbox() {
  return (
    <div className={styles.Lightbox}>
      <span className={styles.close}>&times;</span>
      <div className={styles.lightboxContent}>
        <img className={styles.lightboxImg} />
        <div className={styles.lightboxCaption}></div>
      </div>
      <button className={styles.prev}>&#10094;</button>
      <button className={styles.next}>&#10095;</button>
    </div>
  );
}

export default Lightbox;
