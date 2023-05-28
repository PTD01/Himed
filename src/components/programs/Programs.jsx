import React from "react";
import { motion } from "framer-motion";
import styles from "../programs/programs.module.css";

function Programs() {
  return (
    <>
      <div
        id="program"
        className="bg-[#CC0000] w-full  pt-10 flex justify-between content-start md:content-center  h-full flex-wrap  px-10 2xl:px-20 py-3"
      >
        <div className="w-full md:w-1/2 flex justify-center  flex-col text-white">
          <div className=" ">
            <h1 className="text-3xl md:text-4xl pt-2 font-bold">
              Our Programs
            </h1>
          </div>
          <div className="text-white py-1">
            <p>Shape Your Future in Medicine, Engineering, and Nursing!</p>
          </div>
          <div>
            <p className="text-justify">
              Step into our highly specialized program meticulously crafted to
              equip aspiring students with the knowledge, skills, and confidence
              required to excel in the fiercely competitive national exams
              within the esteemed fields of medicine, engineering, and nursing.{" "}
              <br />
              Our comprehensive curriculum, tailored to each discipline, covers
              a vast range of subjects, ensuring a well-rounded preparation that
              encompasses the core concepts and advanced topics essential for
              success. Through intensive classroom instruction, rigorous
              practice exams, and personalized guidance from experienced
              educators, we foster a supportive learning environment that
              empowers students to master the intricacies of their chosen
              profession. Join us as we embark on a transformative educational
              journey, nurturing the next generation of accomplished
              professionals poised to make a significant impact in the dynamic
              domains of healthcare, engineering, and nursing.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
          <motion.div
            // whileInView={{ x: [100, -50], opacity: [0, 1] }}
            // transition={{ duration: 0.5 }}
            className=" w-[300px] md:w-[350px]  bg-cover bg-no-repeat rounded mt-10 md:mt-0  "
          >
            <div className="card__header"></div>
            <div className="flex flex-col h-[180px] card__bottom ps-10 pt-5">
              <h2 className="text-lg ">Welcome to our comprehensive program</h2>
              <p>
                We prepare students for the national exams in the fields of
                medicine, engineering, and nursing, empowering them to excel in
                their respective careers
              </p>
              <div className="flex justify-end mt-4">
                <button className="btn btn-md bg-[#2196F3] border-0 me-10 ">
                  Learn more!
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* <div className={styles.programs}>
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
              developed our own curriculum, books, and study materials to suit
              our needs. Our philosophy is that teaching concepts in students
              native languages facilitates deeper comprehension. Our innovative
              curriculum, individualized training, and assessment methods have
              led to our high national ranking.
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
      </div> */}
    </>
  );
}

export default Programs;
