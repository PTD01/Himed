import React from "react";
import styles from "../speech/speech.module.css";
import YouTube from "react-youtube";

function Speech() {
  return (
    <div className={styles.speech}>
      <div className={styles.speech__text}>
        <br /> <br />
        <br />
        <div className={styles.speech__text__title}>
          <h1>Hear it from our director</h1>
        </div>
        <div className={styles.speech__text__title__small}>
          <p>Why HIMED?</p>
        </div>
        <div className={styles.speech__lottie}>
          <div className={styles.speech__lottie__video}>
            <YouTube
              videoId="WHSUHyn1fR4" // defaults -> ''
            />
          </div>
        </div>
        <br />
        <p>
          Visit our Youtube channel for sample classes, success stories and more
        </p>
      </div>
      <br />
      <br />
      <br />
      <button className="btn btn-error rounded-lg text-white">
        Youtube Channel
      </button>
    </div>
  );
}

export default Speech;
