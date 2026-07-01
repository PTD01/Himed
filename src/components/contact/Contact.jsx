import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { withBasePath } from "../../lib/basePath";

const contactMethods = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+237 670 084 694",
    href: "https://wa.me/237670084694",
  },
  {
    icon: FaPhoneAlt,
    label: "Call Us",
    value: "+237 674 350 936",
    href: "tel:+237674350936",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "contact@himed.cm",
    href: "mailto:contact@himed.cm",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Centers",
    value: "6 centers across Yaoundé",
    href: "#centers",
  },
];

function Contact() {
  return (
    <section id="contact" className="full-page flex items-center bg-white pt-16">
      <div className="mx-auto w-full max-w-7xl overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Get In Touch
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-primary-900 sm:text-4xl">
              Ready to Join Our Program?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
              Reach out to learn more about our programs, or to register
              for the upcoming intake.
            </p>

            <div className="mt-4 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
              {contactMethods.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  <div className="flex items-start gap-3 rounded-xl bg-primary-50 p-3 ring-1 ring-primary-100 transition-colors hover:bg-primary-100 sm:p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-800 text-white sm:h-10 sm:w-10">
                      <Icon />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">
                        {label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-primary-900">
                        {value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="relative hidden overflow-hidden rounded-2xl shadow-card sm:block">
            <img
              src={withBasePath("/images/cover.jpeg")}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary-900/90" />
            <div className="relative p-6 text-white lg:p-10">
              <h3 className="font-heading text-xl font-bold lg:text-2xl">Start the Enrollment</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-primary-200 lg:mt-3">
                Message us with your name, the program you&apos;re
                interested in, and your current class level. We&apos;ll
                follow up with the intake schedule and fees.
              </p>
              <a
                href="https://wa.me/237670084694"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600 lg:mt-6 lg:py-3.5"
              >
                <FaWhatsapp className="text-lg" />
                Chat with Us on WhatsApp
              </a>

              <div className="mt-5 hidden border-t border-white/10 pt-4 text-sm text-primary-200 lg:mt-8 lg:block lg:pt-6">
                <p className="font-semibold text-white">Office Hours</p>
                <p className="mt-1">Monday – Saturday: 8:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Mobile-only compact enrollment CTA, swapped in for the image panel above */}
          <a
            href="https://wa.me/237670084694"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white sm:hidden"
          >
            <FaWhatsapp className="text-lg" />
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
