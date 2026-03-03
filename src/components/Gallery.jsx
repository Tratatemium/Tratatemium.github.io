import styles from "./Gallery.module.css";

function Gallery({ images, openLightbox }) {
  return (
    <div className={styles.gallery}>
      {images.map((img, index) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          data-caption={img.caption}
          loading="lazy"
          tabIndex={0}
          onClick={() => openLightbox(images, index)}
          onKeyDown={(e) => {
            if (e.key === "Enter") openLightbox(images, index);
          }}
        />
      ))}
    </div>
  );
}
export default Gallery;
