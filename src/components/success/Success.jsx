import React from "react";
import Card from "../card/Card";

// Sample quotes — swap in real student testimonials once collected.
const testimonials = [
  {
    initials: "AM",
    name: "Aïcha M.",
    program: "Medical School Entrant",
    quote:
      "Hi-Med's practice on past exam papers made the difference. I walked into the entrance exam knowing exactly what to expect.",
  },
  {
    initials: "BT",
    name: "Brice T.",
    program: "Engineering School Entrant",
    quote:
      "The personal follow-up fixed the Maths and Physics gaps that had held me back for two years. I got in on my first serious attempt.",
  },
  {
    initials: "SN",
    name: "Sandra N.",
    program: "Medical School Entrant",
    quote:
      "Beyond the academics, the discipline I learned at Hi-Med still shapes how I study today.",
  },
];

function Success() {
  return (
    <section id="testimonials" className="full-page flex items-center bg-white pt-16">
      <div className="mx-auto w-full max-w-7xl overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Success Stories
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-primary-900 sm:text-4xl">
            It Was Once a Dream, Now a Reality
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-lg">
            Hear from students who trained with Hi-Med on their way into
            medical and engineering schools.
          </p>
        </div>

        <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="w-[80%] shrink-0 snap-center sm:w-auto">
              <Card {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Success;
