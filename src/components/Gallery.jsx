import styles from "./Gallery.module.css";
import { useState } from "react";

function Gallery({ images }) {

  return (
    <div className={styles.gallery}>
      {images.map((img) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          data-caption={img.caption}
          loading="lazy"
          tabIndex={0}
        />
      ))}
    </div>
  );
}
export default Gallery;
