import React from "react";
import Tilt from "react-parallax-tilt";
import styles from "../styles/Cards.module.css";

const SingleCard = ({ card }) => {
  return (
    <>
      <Tilt>
        <div className={styles.card__container}>
          <div className={styles.card__content}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default SingleCard;
