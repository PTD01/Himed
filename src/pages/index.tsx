import React from "react";
import Landing from "../components/landing/Landing";
import Goals from "../components/goals/Goals";
import Programs from "../components/programs/Programs";
import Value from "../components/value/Value";
import Space from "../components/space/Space";
import Speech from "../components/speech/Speech";
import Success from "../components/success/Success";
import Gallery from "../components/gallery/Gallery";
import Contact from "../components/contact/Contact";
import Nav from "../components/nav/Nav";

function index() {
  return (
    <div>
      <div className="fixed left-10">
        <img
          src="https://res.cloudinary.com/djkf4l52i/image/upload/v1669648173/WhatsApp_Image_2022-10-30_at_07.24.59-removebg-preview_gqksmk.png"
          alt="logo"
          width={150}
          height={150}
        />
      </div>
      <Nav />
      <Landing />
      <Goals />
      <Programs />
      <Value />
      <Space />
      <Speech />
      <Space />
      <Success />
      <Gallery />
      <Contact />
    </div>
  );
}

export default index;
