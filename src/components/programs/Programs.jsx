import React, { useState } from "react";
import { FaStethoscope, FaCogs, FaFlask } from "react-icons/fa";
import { withBasePath } from "../../lib/basePath";

const programCards = [
  {
    icon: FaStethoscope,
    accent: "primary",
    image: "/images/medecin.jpeg",
    title: "Medical Entrance Exam Prep",
    description:
      "Focused preparation for medical, pharmacy, and biomedical science school entrance exams: Biology, Chemistry, and Physics with past-paper practice.",
    tags: ["Biology", "Chemistry", "Physics"],
    schools: ["FMBS", "FMPS", "Agriculture", "Veterinary Medicine", "SRN", "FHS"],
  },
  {
    icon: FaCogs,
    accent: "engineering",
    image: "/images/artificial-intelligence.jpeg",
    title: "Engineering Entrance Exam Prep",
    description:
      "Structured coaching for engineering school entrance exams, built around Mathematics, Physics, and problem-solving speed under timed conditions.",
    tags: ["Mathematics", "Physics", "Logic"],
    schools: ["ENSPY", "EGEM", "ENSPD", "COT", "FET", "NAHPI", "ENSTP", "ENSPM", "FASA", "IUT", "SUP'PTIC", "US Army"],
  },
  {
    icon: FaFlask,
    accent: "primary",
    image: "/images/periodic-table.jpeg",
    title: "Core Science Subjects",
    description:
      "Foundational and advanced coaching in Physics, Chemistry, Biology, and Mathematics from qualified, available teachers using our own materials.",
    tags: ["Physics", "Chemistry", "Biology", "Maths"],
    schools: [],
  },
];

function Programs() {
  const [active, setActive] = useState(0);
  const program = programCards[active];

  return (
    <section id="programs" className="full-page flex items-center bg-white pt-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            One Course, Full Force
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-primary-900 sm:text-4xl">
            Our Programs
          </h2>
        </div>

        <div className="mx-auto mt-5 flex gap-2 rounded-full bg-primary-50 p-1.5 sm:mt-8">
          {programCards.map(({ title, accent }, i) => (
            <button
              key={title}
              type="button"
              onClick={() => setActive(i)}
              className={`flex-1 rounded-full px-3 py-2 text-xs font-semibold transition-colors sm:px-5 sm:text-sm ${
                active === i
                  ? accent === "engineering"
                    ? "bg-engineering-500 text-white"
                    : "bg-primary-800 text-white"
                  : "text-primary-700 hover:bg-primary-100"
              }`}
            >
              {title.replace(" Entrance Exam Prep", "").replace(" Subjects", "")}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-6 overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-primary-100 sm:mt-8 lg:grid-cols-2">
          <img
            src={withBasePath(program.image)}
            alt={program.title}
            className="h-40 w-full object-cover sm:h-56 lg:h-full"
            loading="lazy"
          />
          <div className="flex flex-col justify-center p-5 sm:p-8">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg text-white ${
                program.accent === "engineering" ? "bg-engineering-500" : "bg-primary-800"
              }`}
            >
              <program.icon />
            </span>
            <h3 className="mt-3 font-heading text-lg font-semibold text-primary-900 sm:text-xl">
              {program.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {program.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {program.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            {program.schools.length > 0 && (
              <div className="mt-4 border-t border-primary-100 pt-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Schools our students get into
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {program.schools.map((school) => (
                    <span
                      key={school}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                    >
                      {school}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <a
              href="#contact"
              className="mt-5 inline-block w-fit rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
