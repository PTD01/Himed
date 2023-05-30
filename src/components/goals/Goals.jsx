import React from "react";
import { motion } from "framer-motion";
import styles from "../goals/goals.module.css";

function Goals() {
  return (
    <>
      <div
        id="features"
        className="bg-white w-full  pt-10 flex justify-between content-start md:content-center  h-full flex-wrap  px-10 2xl:px-20 py-3 "
      >
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 "
        >
          <img
            src="https://res.cloudinary.com/djkf4l52i/image/upload/v1669497424/mission_varxjn.svg"
            alt="mission"
          />
        </motion.div>
        <div className="w-full md:w-1/2 flex justify-center  flex-col">
          <div className={styles.goals__text__title}>
            <h1 className="font-bold">Our mission</h1>
          </div>
          <div className={styles.goals__text__title__small}>
            <p>One Course with full Force!</p>
          </div>
          <div className=" text-justify">
            <p>
              At HI-MED, our mission is to empower students and provide them
              with the necessary tools and support to unlock their full
              potential. <br /> Our mission extends beyond helping students
              succeed in national exams. We are committed to instilling a sense
              of social responsibility, ethical practice, and empathy towards
              patients and the communities they serve. By nurturing
              compassionate and highly competent professionals, we aim to make a
              lasting positive impact on healthcare, engineering, and nursing
              Join us on this journey of discovery, growth, and achievement as
              we work together to make a meaningful difference in the world
              through education and service. Together, let's unlock your
              potential and pave the way for a successful and fulfilling career
              in medicine, engineering, or nursing.
            </p>
          </div>
        </div>
      </div>

      {/* <div className={styles.goals}>
        <div className={styles.goals__lottie}>
          <img
            src="https://res.cloudinary.com/djkf4l52i/image/upload/v1669497424/mission_varxjn.svg"
            alt="mission"
          />
        </div>
        <div className={styles.goals__text}>
          <div className={styles.goals__text__title}>
            <h1>Our mission</h1>
          </div>
          <div className={styles.goals__text__title__small}>
            <p>One Course with full Force!</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit ess/images/mission.svge cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Goals;
