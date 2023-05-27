import React from "react";
import styles from "../gallery/gallery.module.css";

function Gallery() {
  return (
    <div className="gallery min-h-screen flex flex-col md:flex-row justify-center items-center w-[100vw] h-[80vh]  ">
      <div className="ps-10 flex flex-wrap  md:w-[50vw] ">
        <div className={styles.gallery__text__title}>
          <h1>Our Gallery</h1>
        </div>
        <div className={styles.gallery__text__title__small}>
          <p>One Course with full Force!</p>
        </div>
        <div className=" text-left ">
          <p>
            Our distinguished faculty members, who have won awards in their
            specialized fields, teach Physics, Chemistry, and Biology. We have
            developed our own curriculum, books, and study materials to suit our
            needs. Our philosophy is that teaching concepts in students' native
            languages facilitates deeper comprehension. Our innovative
            curriculum, individualized training, and assessment methods have led
            to our high national ranking.
          </p>
        </div>

        <br />
        <div className="w-full flex justify-center items-center md:justify-start pt-2 pb-2 ">
          <button className="btn btn-primary btn-md rounded-lg">Gallery</button>
        </div>
      </div>
      <div className="gallery__lottie flex justify-center w-[100vw] md:w-[100vw] ">
        <img src={"/../../../images/gallery.png"} alt="" className="w-[100%]" />
      </div>
    </div>
  );
}

export default Gallery;
