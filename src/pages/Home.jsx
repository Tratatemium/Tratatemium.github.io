import styles from "./Home.module.css";
import myPhoto from "../assets/my-photo.png";

function Home() {
  return (
    <div className={styles.content}>
      <section id="maincontent" className={styles.wordCloud}>
        <p className={styles.myName}>
          <span>
            &lt;Vladislav
            <br />
          </span>
          <span>Zhuravskii&gt;</span>
        </p>
        <p className={styles.occupation}>
          <span className={styles.line1}>
            a{" "}
            <span className="accent-color-1">&lt;Front-end Developer&gt;</span>
            <br />
          </span>
          <span className={styles.line2}>student</span>
        </p>

        <p className={styles.hello}>Hi! I am</p>

        <p className={`${styles.skills} accent-color-2`}>
          <span style={{ "--i": 1 }}>
            &#123;
            <br />
          </span>
          <span style={{ "--i": 2 }}>
            &nbsp;&nbsp;&nbsp;&nbsp;HTML
            <br />
          </span>
          <span style={{ "--i": 3 }}>
            &nbsp;&nbsp;&nbsp;&nbsp;CSS
            <br />
          </span>
          <span style={{ "--i": 4 }}>
            &nbsp;&nbsp;&nbsp;&nbsp;JavaScript
            <br />
          </span>
          <span style={{ "--i": 5 }}>
            &nbsp;&nbsp;&nbsp;&nbsp;React
            <br />
          </span>
          <span style={{ "--i": 6 }}>
            &nbsp;&nbsp;&nbsp;&nbsp;Python
            <br />
          </span>
          <span style={{ "--i": 7 }}>&#125;</span>
        </p>

        <p className={`${styles.hobbies1} accent-color-3`}>
          <span>
            # a cook
            <br />
          </span>
          <span>
            # a coder
            <br />
          </span>
        </p>

        <p className={`${styles.hobbies2} accent-color-3`}>
          <span>
            # a woodworker
            <br />
          </span>
          <span>
            # a gamer
            <br />
          </span>
        </p>
      </section>

      <section className={styles.myPhoto}>
        <img
          src={myPhoto}
          alt="Vladislav Zhuravskii - Front-end Developer"
          loading="lazy"
        />
      </section>
    </div>
  );
}

export default Home;
