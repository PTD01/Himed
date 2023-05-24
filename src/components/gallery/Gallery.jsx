import React from "react";
import styles from "../gallery/gallery.module.css";

function Gallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__text}>
        <div className={styles.gallery__text__title}>
          <h1>Our Programs</h1>
        </div>
        <div className={styles.gallery__text__title__small}>
          <p>One Course with full Force!</p>
        </div>
        <div>
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
        <div>
          <br />
          <button className="btn btn-primary btn-l rounded-lg">Gallery</button>
        </div>
      </div>
      <div className={styles.gallery__lottie}></div>
    </div>
  );
}

export default Gallery;
