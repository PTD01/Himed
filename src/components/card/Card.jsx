import React from "react";
import styles from "../card/card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <div className="card w-96 bg-white">
        <figure>
          <img
            src="https://res.cloudinary.com/djkf4l52i/image/upload/v1680974941/girl_computer_zyzul0.png"
            alt="student"
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
  );
}

export default Card;
