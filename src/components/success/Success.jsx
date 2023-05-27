import React from "react";
import styles from "../success/success.module.css";
import Card from "../card/Card";

function Success() {
  return (
    <div className={styles.success}>
      <div className={styles.success__text}>
        <div className={styles.success__text__title}>
          <h1>Success Stories</h1>
          <div className={styles.success__text__title__small}>
            <p>
              It was once a dream, now a reality. Hear from our 2022 batch
              students.
            </p>
          </div>
        </div>
        <Card />
      </div>
    </div>
  );
}

export default Success;
