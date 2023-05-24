import React from "react";
import Landing from "../components/landing/Landing";
import Goals from "../components/goals/Goals";
import Programs from "../components/programs/Programs";
import Value from "../components/value/Value";
import Space from "../components/space/Space";
import Speech from "../components/speech/Speech";
import Success from "../components/success/Success";
import Gallery from "../components/gallery/Gallery";
import More from "../components/more/More";
import Contact from "../components/contact/Contact";

function index() {
  return (
    <div>
      <nav className="items-center hover: bg-slate-900 text-neutral-content/80 p-4 px-12 flex justify-between transition-all">
        <div className="text-primary text-4xl font-bold italic uppercase tracking-wide ">
          <img
            src="https://res.cloudinary.com/djkf4l52i/image/upload/v1669648173/WhatsApp_Image_2022-10-30_at_07.24.59-removebg-preview_gqksmk.png"
            alt=""
            width="20%"
          />
        </div>
        <div className="flex gap-4">
          <a href="#" className="btn">
            Programs
          </a>
          <a href="#" className="btn ">
            Programs
          </a>
          <a href="#" className="btn ">
            Past students
          </a>
          <a href="#" className="btn ">
            Diaspora
          </a>
        </div>
      </nav>
      <Landing />
      <Goals />
      <Programs />
      <Value />
      <Space />
      <Speech />
      <Space />
      <Success />
      <Gallery />
      <More />
      <Contact />
    </div>
  );
}

export default index;
