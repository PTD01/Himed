import React from "react";
import { FaGraduationCap, FaUserMd, FaTools } from "react-icons/fa";
import { withBasePath } from "../../lib/basePath";

const highlights = [
  { icon: FaGraduationCap, label: "11 years preparing students for entrance exams" },
  { icon: FaUserMd, label: "Medical entrance exam track" },
  { icon: FaTools, label: "Engineering entrance exam track" },
];

function About() {
  return (
    <section id="about" className="full-page flex items-center bg-white pt-16">
      <div className="mx-auto grid w-full max-w-7xl gap-8 overflow-y-auto px-4 py-6 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            About Hi-Med
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-primary-900 sm:text-4xl">
            Built for Cameroon&apos;s toughest entrance exams
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-lg">
            Hi-Med has run since 2015 as a career orientation and
            preparatory school, getting students into schools such as
            ENSPY, ENSTP, IUT, FMBS, and FMPS through six centers across
            Yaoundé, qualified teachers, and a competitive study
            environment.
          </p>

          <ul className="mt-6 space-y-3">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                  <Icon className="text-base" />
                </span>
                <span className="text-sm font-medium text-primary-900">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <img
          src={withBasePath("/images/chemistry-lab.jpeg")}
          alt="Practical science session at Hi-Med"
          className="hidden h-full max-h-[70vh] w-full rounded-2xl object-cover shadow-card lg:block"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default About;
