import styles from "./Projects.module.css";
import Gallery from "../../components/Gallery";
import ArrowLink from "../../components/ArrowLink";
import section from "../SectionLayout.module.css";
import { galleries } from "./Projects.data.js";
import useInView from "../../hooks/useInView";

function Projects({ openLightbox }) {
  const [ref1, isInview1] = useInView({ threshold: 0.2 });
  return (
    <>
      <h1 className={styles.title}>&lt;My projects&gt;</h1>
      <div className={section.content}>
        <section
          ref={ref1}
          className={`${section.section} ${isInview1 ? section.show : ""}`}
        >
          <h2 className={styles.title}># 2048 Web Game</h2>
          <p className={styles.description}>
            A modern, responsive web version of the classic 2048 sliding puzzle
            game, built with HTML, CSS, and JavaScript. The project features
            smooth animations, a neon-inspired UI, and full responsiveness for
            both desktop and mobile devices. Players can use keyboard arrows or
            swipe gestures to merge tiles, track their score and moves, and
            restart the game anytime. This project demonstrates interactive game
            logic, responsive design, and user-focused UI implementation.
          </p>
          <p className={styles.description}>
            Inspired by{" "}
            <ArrowLink
              href="https://play2048.co/"
              text="Gabriele Cirulli’s original 2048 game"
            />
            , developed as part of the Front-End Development program at Hyper
            Island.
          </p>
          <Gallery
            images={galleries.my2048game}
            openLightbox={openLightbox}
          />
          <div class={styles.links}>
            <ArrowLink
              href="https://tratatemium.github.io/2048-game/"
              text="2048 game"
              svgType="Globe"
            />
            <ArrowLink
              href="https://github.com/Tratatemium/2048-game"
              text="GitHub page"
              svgType="GitHub"
            />
          </div>
          <div className={`${section.separator} ${styles.projectSeparator}`}>
            • • •
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
