import React from "react";
import styles from "../speech/speech.module.css";

function Speech() {
  return (
    <div className={styles.speech}>
      <div className={styles.speech__text}>
        <div className={styles.speech__text__title}>
          <h1>Hear it from our director</h1>
        </div>
        <div className={styles.speech__text__title__small}>
          <p>Why HIMED?</p>
        </div>
        <div className={styles.speech__lottie}>
          <div className={styles.speech__lottie__video}>
            <video
              src="/../../../images/Hi-Med Slideshow.mp4"
              width="50%"
              controls
              autoplay
              loop
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <br />
        <p>
          Visit our Youtube channel for sample classes, success stories and more
        </p>
        <br />
        <br />
      </div>

      <button className="btn btn-error rounded-lg text-white">
        Youtube Channel
      </button>
    </div>
  );
}

export default Speech;
