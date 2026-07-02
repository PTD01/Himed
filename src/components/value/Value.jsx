import React from "react";
import { FaUserFriends, FaChalkboardTeacher, FaTrophy, FaVideo } from "react-icons/fa";

const values = [
  {
    icon: FaUserFriends,
    title: "Personal Follow-Up",
    text: "Every student is tracked individually so gaps get caught early, well before exam day.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Qualified, Available Teachers",
    text: "Teachers who are not just qualified but consistently available throughout the program.",
  },
  {
    icon: FaTrophy,
    title: "Competitive Environment",
    text: "Students train alongside peers aiming for the same top schools.",
  },
  {
    icon: FaVideo,
    title: "Video-Projected Lessons",
    text: "Complex Physics, Chemistry, Biology, and Maths concepts made easier to follow.",
  },
];

function Value() {
  return (
    <section id="why-us" className="full-page flex items-center bg-primary-900 pt-16">
      <div className="mx-auto w-full max-w-7xl overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-300">
            Hardwork &middot; Determination &middot; Faith
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-white sm:text-4xl">
            Why Choose Hi-Med
          </h2>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-base text-white sm:h-11 sm:w-11 sm:text-lg">
                <Icon />
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold text-white sm:text-lg">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-primary-200 sm:mt-2">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Value;
