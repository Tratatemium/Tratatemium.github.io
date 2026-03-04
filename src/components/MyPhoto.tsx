import styles from "./MyPhoto.module.css";
import myPhoto from "../assets/my-photo.png";

interface MyPhotoProps {
  className?: string;
}

function MyPhoto({ className }: MyPhotoProps) {
  return (
    <section className={`${styles.myPhoto}${className ? ` ${className}` : ""}`}>
      <img
        src={myPhoto}
        alt="Vladislav Zhuravskii - Front-end Developer"
        loading="lazy"
      />
    </section>
  );
}

export default MyPhoto;
