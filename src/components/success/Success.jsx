import React from "react";
import styles from "../success/success.module.css";

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
        <div className="card w-96 glass">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
