import styles from "./Gallery.module.css";

export interface Image {
  src: string;
  alt: string;
  caption: string;
}

interface GalleryProps {
  images: Image[];
  openLightbox: (images: any, index: any) => {};
}

function Gallery({ images, openLightbox }: GalleryProps) {
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
