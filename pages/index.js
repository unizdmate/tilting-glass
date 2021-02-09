import styles from "../styles/Home.module.css";
import CardList from "./../components/CardList";
import Tilt from "react-parallax-tilt";

export default function Home() {
  return (
    <div className={styles.container}>
      <Tilt>
        <h2>Try and hover over the cards or this title!</h2>
      </Tilt>
      <CardList />
    </div>
  );
}
