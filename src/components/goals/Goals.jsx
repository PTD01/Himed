import React from "react";
import { FaBullseye, FaEye, FaHandsHelping } from "react-icons/fa";

const goals = [
  {
    icon: FaBullseye,
    title: "Our Mission",
    text: "Equip students across Cameroon with the knowledge, discipline, and confidence to succeed in medical and engineering entrance examinations.",
  },
  {
    icon: FaEye,
    title: "Our Vision",
    text: "Be the exam-preparation center that schools, students, and parents in Cameroon trust for consistent, measurable results.",
  },
  {
    icon: FaHandsHelping,
    title: "Our Approach",
    text: "Structured lessons, focused practice on past exam papers, and individual coaching from a faculty that has excelled in these exams themselves.",
  },
];

function Goals() {
  return (
    <section className="full-page flex items-center bg-primary-50/60 pt-16">
      <div className="mx-auto w-full max-w-7xl overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            What drives us
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-primary-900 sm:text-4xl">
            Mission, Vision, and Approach
          </h2>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {goals.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-primary-100 sm:p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-800 text-lg text-white sm:h-12 sm:w-12 sm:text-xl">
                <Icon />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-primary-900 sm:mt-5 sm:text-xl">
                {title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:mt-3 sm:text-base">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Goals;
