import styles from "./Lightbox.module.css";

function Lightbox({ containerRef, isOpen, images, index, onClose, onNext, onPrev }) {

  if (!isOpen) return null;

  const currentImage = images[index];

  return (
    <div className={styles.lightbox} ref={containerRef}>
      <button className={styles.close} onClick={onClose}>
        ×
      </button>
      <div className={styles.lightboxContent}>
        <img
          className={styles.lightboxImg}
          src={currentImage?.src}
          alt={currentImage?.alt}
        />
        <p className={styles.lightboxCaption}>{currentImage?.caption}</p>
      </div>
      <button className={styles.prev} onClick={onPrev}>
        ❮
      </button>
      <button className={styles.next} onClick={onNext}>
        ❯
      </button>
    </div>
  );
}

export default Lightbox;
