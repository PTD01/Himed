import React from "react";
import { motion } from "framer-motion";
import styles from "../value/value.module.css";

function Value() {
  return (
    <div className="w-full  pt-10 flex justify-between content-start md:content-center  h-full flex-wrap  px-10 2xl:px-20 py-3">
      <div className="w-full md:w-1/2 ">
        <motion.img
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          src="https://res.cloudinary.com/djkf4l52i/image/upload/v1669471268/value_mq3e4e.svg"
          alt="mission"
        />
      </div>
      <div className="w-full md:w-1/2 flex justify-center  flex-col pt-10 md:pt-0 ">
        <h1 className="text-2xl md:text-3xl font-bold">Our mission</h1>

        <div className={styles.goals__text__title__small}>
          <p>One Course with full Force!</p>
        </div>
        <div className="">
          <p className="text-justify">
            At HI-MED, we believe in the power of education in a God-fearing
            environment. Our dedicated team provides a nurturing space for
            students to excel academically. We foster a community that embraces
            faith and values, empowering students to study with purpose and
            integrity. Join us as we embark on a journey of knowledge and
            spiritual growth, where academic excellence and reverence for God go
            hand in hand.
          </p>
        </div>
      </div>
      {/* <div className="bg-white w-[100vw] h-auto md:h-[90vh] px-10 flex items-center justify-between flex-wrap py-14"></div> */}
      {/* <div className={styles.value}>
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
      </div> */}
    </div>
  );
}

export default Value;
