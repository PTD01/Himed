import React from "react";
import styles from "../landing/landing.module.css";
import { motion } from "framer-motion";
function Landing() {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <div className="landing__page__container w-[100vw] h-[100vh] bg-no-repeat bg-cover bg-landing bg-white">
        <div className=" container pt-32 flex justify-between content-start md:content-center  h-full flex-wrap px-0 md:px-10">
          <div className="text-gray-800 w-[100%] md:w-[50%] flex flex-col justify-around">
            <div className="text-center md:text-left text-2xl md:text-4xl xl:text-4xl ">
              <div className="mt-0 md:mt-20 leading-normal">
                <div>
                  <img
                    src={"/../../../images/Cardiogram.gif"}
                    alt="cardiogram"
                    className="cardio pl-20"
                  />
                </div>
                <span>Coaching</span>{" "}
                <motion.span
                  whileInView={{ scale: [1, 0.9] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="underline text-[#2196F3]"
                >
                  students
                </motion.span>{" "}
                <span>into</span> <br />
                <span>future</span>{" "}
                <span className="text-[#CC0000]  underline">Medical</span>{" "}
                <span className="underline text-[#2196F3]">personnels</span>{" "}
                <span>and Ingineers</span>
              </div>
            </div>
            <div className="hidden md:block ">
              <button className="btn bg-[#2196F3] btn-lg rounded-lg mt-10 border-0">
                Start the enrollment
              </button>
            </div>
          </div>
          <motion.div
            variants={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="text-gray-200 w-[100%] md:w-[50%] flex items-center justify-end "
          >
            <img
              src={"/../../../images/learning.gif"}
              className="w-[400px] md:w-[200px] block"
              alt=""
            />
          </motion.div>

          <div className="md:hidden items-center justify-center w-full ">
            <button className="btn bg-[#2196F3] btn-lg rounded-lg mt-4 mx-auto block border-0">
              Start the enrollment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
