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
          <br />
          <div className={styles.landing__filter__title__button}>
            <button className="btn btn-primary rounded-lg">
              Start the enrollment
            </button>
          </div>
          <div></div>
        </div>
        <div className={styles.landing__filter__lottie}>
          <img src={"/../../../images/blanding.gif"} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
