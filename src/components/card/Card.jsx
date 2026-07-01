import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

function Card({ name, program, quote, initials }) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-card ring-1 ring-primary-100 sm:p-7">
      <FaQuoteLeft className="text-xl text-primary-200 sm:text-2xl" />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
        {quote}
      </p>
      <div className="mt-4 flex items-center gap-3 sm:mt-6">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-800 text-sm font-semibold text-white">
          {initials}
        </span>
        <div>
          <p className="font-heading text-sm font-semibold text-primary-900">{name}</p>
          <p className="text-xs text-slate-500">{program}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
