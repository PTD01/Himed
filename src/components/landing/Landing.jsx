import React from "react";
import styles from "../landing/landing.module.css";
function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.landing__filter}>
        <div className={styles.landing__filter__title}>
          <div className={styles.landing__filter__titre}>
            Coaching
            <span className={styles.landing__filter__title__titre__students}>
              students
            </span>
            into future
            <span className={styles.landing__filter__title__titre__doctors}>
              Medical
              <span className={styles.landing__filter__title__titre__students}>
                personnels
              </span>
            </span>
            and Ingineers
          </div>
          <div className={styles.landing__filter__title__button}>
            <button className={styles.button}>Start the enrollment</button>
          </div>
          <div className={styles.landing__filter__title__down}>SCROLLDOWN</div>
        </div>
        <div className={styles.landing__filter__lottie}></div>
      </div>
    </div>
  );
}

export default Landing;
