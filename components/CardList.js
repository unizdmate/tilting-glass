import { cards } from "./Cards";
import SingleCard from "./SingleCard";
import styles from "../styles/CardList.module.css";

const CardList = () => {
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <SingleCard card={card} key={card.title} />
      ))}
    </div>
  );
};

export default CardList;
