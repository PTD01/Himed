import React from "react";
import Head from "next/head";
import Nav from "../components/nav/Nav";
import Landing from "../components/landing/Landing";
import About from "../components/about/About";
import Goals from "../components/goals/Goals";
import Programs from "../components/programs/Programs";
import Value from "../components/value/Value";
import Speech from "../components/speech/Speech";
import Success from "../components/success/Success";
import Centers from "../components/centers/Centers";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import { withBasePath } from "../lib/basePath";

const siteTitle =
  "Hi-Med | National Preparatory Center for Medical and Engineering Aspirants";
const siteDescription =
  "Hi-Med is a Cameroon-based career orientation and preparatory school helping students succeed in the National Competitive Entrance Examinations for medical, engineering, and biomedical science schools. Since 2015.";

function Home() {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={withBasePath("/images/logo2.jpeg")} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Nav />
      <main>
        <Landing />
        <About />
        <Goals />
        <Programs />
        <Value />
        <Speech />
        <Success />
        <Centers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
