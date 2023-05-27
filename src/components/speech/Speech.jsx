import React from "react";
import styles from "../speech/speech.module.css";
import YouTube from "react-youtube";

function Speech() {
  return (
    <>
      <div
        className="container flex flex-col justify-center items-center py-4"
        id="whyUs"
      >
        <div className="text-3xl md:text-4xl text-center">
          <h1>Hear it from our director</h1>
          <p className="text-lg py-1">Why HIMED?</p>
        </div>
        <div className="">
          {/* <YouTube
            videoId="WHSUHyn1fR4" // defaults -> ''
            className="w-[400px] "
          /> */}
          <div className="w-full flex justify-center items-center">
            <iframe
              className="w-[350px] md:w-[600px] h-[200px] md:h-[400px]"
              src="/../../../images/Hi-Med Slideshow.mp4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <p className="py-4 px-1 md:px-0 text-center">
            Visit our Youtube channel for sample classes, success stories and
            more
          </p>
          <div className="w-full flex justify-center items-center">
            <button className="btn bg-[#CC0000] btn-md border-0 rounded-lg text-white ">
              Youtube Channel
            </button>
          </div>
        </div>
      </div>
      {/* <div className={styles.speech}>
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
    </div> */}
    </>
  );
}

export default Speech;
