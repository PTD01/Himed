import React from "react";
import styles from "../programs/programs.module.css";

function Programs() {
  return (
    <div className={styles.programs}>
      <div className={styles.programs__text}>
        <div className={styles.programs__text__title}>
          <h1>Our Programs</h1>
        </div>
        <div className={styles.programs__text__title__small}>
          <p>One Course with full Force!</p>
        </div>
        <div>
          <p>
            Our distinguished faculty members, who have won awards in their
            specialized fields, teach Physics, Chemistry, and Biology. We have
            developed our own curriculum, books, and study materials to suit our
            needs. Our philosophy is that teaching concepts in students' native
            languages facilitates deeper comprehension. Our innovative
            curriculum, individualized training, and assessment methods have led
            to our high national ranking.
          </p>
        </div>
      </div>
      <div className={styles.programs__lottie}>
        <div className={styles.card}>
          <div className="card glass">
            <figure>
              <img
                src="https://res.cloudinary.com/djkf4l52i/image/upload/v1669324590/medecin_pps5il.jpg"
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
    </div>
  );
}

export default Programs;
