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
import Header from "../components/Header/Header";

function index() {
  return (
    <div>
      <Header />
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

      <div className="h-48"></div>
    </div>
  );
}

export default index;
