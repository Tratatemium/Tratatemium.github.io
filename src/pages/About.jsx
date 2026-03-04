import styles from "./About.module.css";

function About({ PhotoComponent }) {
  return (
    <>
      <h1 className={styles.title}>&lt;About me&gt;</h1>

      <PhotoComponent className={styles.myPhoto} />

      <section className={styles.text}>
        <p>
          Hi, I'm Vladislav Zhuravskii, a front-end development student at Hyper
          Island, Stockholm Sweden. Originally from Moscow, I've lived in Sweden
          since 2022 and I'm building a new career in tech after working in
          logistics and warehouse management.
        </p>
        <p>
          I enjoy creating clean, user-friendly web interfaces and continue to
          expand my skills in programming and problem-solving. With previous
          experience in Python, Lua, and web technologies, I'm passionate about
          turning ideas into interactive projects and growing as a developer.
        </p>
        <p>
          Outside of coding, I enjoy hiking, cooking, and exploring creative
          hobbies.
        </p>
      </section>
    </>
  );
}

export default About;
