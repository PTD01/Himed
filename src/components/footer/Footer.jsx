import React from "react";
import { FaFacebook, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { withBasePath } from "../../lib/basePath";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#programs", label: "Programs" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#testimonials", label: "Success Stories" },
  { href: "#centers", label: "Our Centers" },
  { href: "#contact", label: "Contact" },
];

const programs = [
  "Medical Entrance Exam Prep",
  "Engineering Entrance Exam Prep",
  "Physics, Chemistry & Biology",
  "Mathematics Coaching",
];

const phoneNumbers = [
  "670 084 694",
  "674 350 936",
  "653 137 070",
  "672 493 593",
  "692 971 541",
  "691 040 275",
  "650 087 139",
  "654 907 167",
];

function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <img
              src={withBasePath("/images/logo1.jpeg")}
              alt="Hi-Med logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-heading text-lg font-bold text-white">Hi-Med</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-200">
            Since 2015, Hi-Med has coached students across Cameroon toward
            success in medical and engineering school entrance examinations.
            Hardwork &middot; Determination &middot; Faith.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#" /* TODO: link to facebook.com/HIMED once confirmed */
              aria-label="Facebook: HI-MED"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/237670084694"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-primary-200 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold text-white">Our Programs</h3>
          <ul className="mt-4 space-y-2.5">
            {programs.map((program) => (
              <li key={program} className="text-sm text-primary-200">
                {program}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold text-white">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-200">
            <li className="flex items-start gap-2.5">
              <FaMapMarkerAlt className="mt-0.5 shrink-0 text-accent" />
              <span>6 centers across Yaoundé, Cameroon</span>
            </li>
            <li className="flex items-start gap-2.5">
              <FaEnvelope className="mt-0.5 shrink-0 text-accent" />
              <span>contact@himed.cm</span>
            </li>
          </ul>
          <div className="mt-4">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary-300">
              <FaPhoneAlt className="text-accent" />
              Call or WhatsApp Us
            </p>
            <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm text-primary-200">
              {phoneNumbers.map((num) => (
                <span key={num}>+237 {num}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="px-4 text-center text-xs text-primary-300 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Hi-Med National Preparatory Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
