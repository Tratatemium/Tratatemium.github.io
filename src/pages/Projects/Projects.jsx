import styles from "./Projects.module.css";
import Gallery from "../../components/Gallery";
import ArrowLink from "../../components/ArrowLink";
import section from "../SectionLayout.module.css";
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
          <h2 className={styles.title}># Project 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {/* <Gallery
            images={galleries.hobbies.cooking}
            openLightbox={openLightbox}
          /> */}
          <div class={styles.links}>
            <ArrowLink href="s" text="Live website" svgType="Globe" />
            <ArrowLink href="s" text="GitHub page" svgType="GitHub" />
            <ArrowLink href="s" text="Nothing" />
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
