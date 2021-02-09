import styles from "../styles/Home.module.css";
import CardList from "./../components/CardList";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Try and hover over the cards!</h2>
      <CardList />
    </div>
  );
}
