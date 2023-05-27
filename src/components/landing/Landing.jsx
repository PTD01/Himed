import React from "react";
import styles from "../landing/landing.module.css";
function Landing() {
  return (
    <>
      <div className="landing__page__container w-[100vw] h-[100vh]  bg-no-repeat bg-cover bg-landing bg-white">
        <div className=" container pt-32 flex justify-between content-start md:content-center  h-full flex-wrap px-0 md:px-10">
          <div className="text-gray-800 w-[100%] md:w-[50%]">
            <div className="text-center md:text-left text-2xl md:text-4xl xl:text-5xl font-bold ">
              <div className="mt-0 md:mt-20 leading-normal">
                <span>Coaching</span>{" "}
                <span className="underline text-blue-800">students</span>{" "}
                <span>into</span> <br />
                <span>future</span>{" "}
                <span className="text-red-600 underline">Medical</span>{" "}
                <span className="underline text-blue-800">personnels</span>{" "}
                <span>and Ingineers</span>
              </div>
            </div>
            <div className="hidden md:block">
              <button className="btn btn-primary btn-lg rounded-lg mt-10">
                Start the enrollment
              </button>
            </div>
          </div>
          <div className="text-gray-200 w-[100%] md:w-[50%] flex justify-center">
            <div>
              <img
                src={"/../../../images/learning.gif"}
                className="w-[400px] md:w-[500px] block "
                alt=""
              />
            </div>
          </div>
          <div className="md:hidden items-center justify-center w-full ">
            <button className="btn btn-primary btn-lg rounded-lg mt-4 mx-auto block">
              Start the enrollment
            </button>
          </div>
        </div>
      </div>

      {/* <div className={styles.landing}>
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
                <span
                  className={styles.landing__filter__title__titre__students}
                >
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
      </div> */}
    </>
  );
}

export default Landing;
