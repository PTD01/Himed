import React from "react";
import styles from "../value/value.module.css";

function Value() {
  return (
    <div>
      <div className={styles.value}>
        <div className={styles.value__lottie}>
          <img
            src="https://res.cloudinary.com/djkf4l52i/image/upload/v1669471268/value_mq3e4e.svg"
            alt="value"
          />
        </div>
        <div className={styles.value__text}>
          <div className={styles.value__text__title}>
            <h1> Our Value</h1>
          </div>
          <div className={styles.value__text__title__small}>
            <p>One Course with full Force!</p>
          </div>
          <div>
            <p>
              At HI-MED, we believe in the power of education in a God-fearing
              environment. Our dedicated team provides a nurturing space for
              students to excel academically. We foster a community that
              embraces faith and values, empowering students to study with
              purpose and integrity. Join us as we embark on a journey of
              knowledge and spiritual growth, where academic excellence and
              reverence for God go hand in hand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Value;
