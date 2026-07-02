import React, { useState } from "react";
import { FaPlay, FaYoutube } from "react-icons/fa";
import { withBasePath } from "../../lib/basePath";

function Speech() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="full-page flex items-center bg-white pt-16">
      <div className="mx-auto w-full max-w-5xl overflow-y-auto px-4 py-6 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Why Hi-Med?
        </p>
        <h2 className="mt-2 font-heading text-2xl font-bold text-primary-900 sm:text-4xl">
          Hear It From Our Director
        </h2>

        <div className="relative mx-auto mt-5 aspect-video max-h-[48vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-primary-950 shadow-card sm:mt-8">
          {isPlaying ? (
            <video
              src={withBasePath("/images/director-message.mp4")}
              poster={withBasePath("/images/director-poster.jpg")}
              className="h-full w-full"
              controls
              autoPlay
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label="Play director's message"
              className="group relative h-full w-full"
            >
              <img
                src={withBasePath("/images/director-poster.jpg")}
                alt="Hi-Med director's message"
                className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-60"
                loading="lazy"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-xl text-white shadow-lg transition-transform group-hover:scale-110 sm:h-20 sm:w-20 sm:text-2xl">
                  <FaPlay className="ml-1" />
                </span>
              </span>
            </button>
          )}
        </div>

        <p className="mt-5 text-sm text-slate-600 sm:mt-8 sm:text-base">
          Visit our YouTube channel for sample classes, success stories, and more.
        </p>

        <a
          href="#"
          className="mt-3 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600 sm:mt-4 sm:py-3"
        >
          <FaYoutube className="text-lg" />
          YouTube Channel
        </a>
      </div>
    </section>
  );
}

export default Speech;
