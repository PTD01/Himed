import React from "react";
import { withBasePath } from "../../lib/basePath";

function Landing() {
  return (
    <section
      id="home"
      className="full-page relative flex items-center overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-700 pt-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center overflow-y-auto px-4 py-6 text-center sm:px-6 lg:px-8">
        <img
          src={withBasePath("/images/logo1.jpeg")}
          alt="Hi-Med logo"
          width={72}
          height={72}
          className="h-14 w-14 rounded-full shadow-lg ring-4 ring-white/20 sm:h-20 sm:w-20"
        />

        <span className="mt-4 inline-flex flex-wrap items-center justify-center gap-x-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white ring-1 ring-white/30 sm:text-xs">
          11 Years of Service &middot; Since 2015 &middot; Hardwork, Determination, Faith
        </span>

        <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          National Preparatory Center for{" "}
          <span className="text-primary-300">Medical</span> and{" "}
          <span className="text-engineering-500">Engineering</span> Aspirants
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-100 sm:text-lg">
          A career orientation and preparatory school helping Cameroonian
          students succeed in the National Competitive Entrance Examinations
          for medical, engineering, and biomedical science schools.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="rounded-lg bg-accent px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-600"
          >
            Start the Enrollment
          </a>
          <a
            href="#programs"
            className="rounded-lg border border-white/40 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
          >
            Explore Programs
          </a>
        </div>

        <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-white/15 pt-4 sm:mt-8 sm:max-w-lg sm:pt-6">
          <div>
            <dt className="sr-only">Years of service</dt>
            <dd className="font-heading text-xl font-bold text-white sm:text-3xl">11</dd>
            <p className="text-[11px] text-primary-200 sm:text-sm">Years of service</p>
          </div>
          <div>
            <dt className="sr-only">Training centers</dt>
            <dd className="font-heading text-xl font-bold text-white sm:text-3xl">6</dd>
            <p className="text-[11px] text-primary-200 sm:text-sm">Centers in Yaoundé</p>
          </div>
          <div>
            <dt className="sr-only">Programs offered</dt>
            <dd className="font-heading text-xl font-bold text-white sm:text-3xl">2</dd>
            <p className="text-[11px] text-primary-200 sm:text-sm">Entrance exam tracks</p>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default Landing;
