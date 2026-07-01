import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const centers = [
  { area: "Biscuiterie Nso Boyz", landmark: "UNHIMAS" },
  { area: "Neptune Simbock", landmark: "Collège Berceau des Anges" },
  { area: "Marché Ekounou", landmark: "St. Nkoayos Primary School" },
  { area: "Commissariat Odza", landmark: "Greener Pastures International School" },
  { area: "Etoudi Netpune", landmark: "St. Catherine Primary School" },
  { area: "Bonne Fontaine Emana", landmark: "St. Emmanuel Primary School (Quartier Anglo)" },
];

function Centers() {
  return (
    <section id="centers" className="full-page flex items-center bg-primary-50/60 pt-16">
      <div className="mx-auto w-full max-w-7xl overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Six Locations Across Yaoundé
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-primary-900 sm:text-4xl">
            Our Centers
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-lg">
            Classes run at six centers around the city, so students can
            train close to home.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {centers.map(({ area, landmark }) => (
            <div
              key={area}
              className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-card ring-1 ring-primary-100 sm:p-5"
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-800 text-white sm:h-9 sm:w-9">
                <FaMapMarkerAlt className="text-sm" />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold text-primary-900">
                  {area}
                </p>
                <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">{landmark}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Centers;
