import styles from "../styles/Home.module.css";
import Tilt from "react-parallax-tilt";

export default function Home() {
  return (
    <div className={styles.container}>
      <Tilt perspective={400}>
        <div className={styles.card__container}>
          <div className={styles.card__content}>
            <h3>Hover!</h3>
            <p>Something magical is going to happen</p>
          </div>
        </div>
      </Tilt>
      <Tilt>
        <div className={styles.card__container}>
          <div className={styles.card__content}>
            <h3>Hover!</h3>
            <p>Something magical is going to happen</p>
          </div>
        </div>
      </Tilt>
      <Tilt perspective={300}>
        <div className={styles.card__container}>
          <div className={styles.card__content}>
            <h3>Hover!</h3>
            <p>Something magical is going to happen</p>
          </div>
        </div>
      </Tilt>
    </div>
  );
}
