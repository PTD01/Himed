import React from "react";
import { motion } from "framer-motion";

function Gallery() {
  return (
    <div className="gallery min-h-screen flex flex-col md:flex-row pt-10 md:content-center items-center w-[100vw] h-[80vh]  ">
      <div className="ps-10 pe-10 md:pe-0 flex flex-wrap  md:w-[50vw] w-full justify-center  flex-col ">
        <div className="text-3xl md:text-4xl font-bold">
          <h1>Our Gallery</h1>
        </div>
        <div className=" text-justify ">
          <div className=" py-1">
            <p>Pictures are worth a thousand words.</p>
          </div>
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

      <div className="w-full md:w-1/2 ">
        <motion.img
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          src="/../../../images/gallery.png"
          alt="gallery"
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Gallery;
