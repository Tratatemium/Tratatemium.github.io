import styles from "./Lightbox.module.css";

function Lightbox({ isOpen, images, index, onClose, onNext, onPrev }) {
  if (!isOpen) return null;

  const currentImage = images[index];

  return (
    <div className={styles.lightbox}>
      <button className={styles.close} onClick={onClose}>
        &times;
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
        &#10094;
      </button>
      <button className={styles.next} onClick={onNext}>
        &#10095;
      </button>
    </div>
  );
}

export default Lightbox;
