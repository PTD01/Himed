import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { withBasePath } from "../../lib/basePath";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Success Stories" },
  { href: "#centers", label: "Centers" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2" onClick={handleLinkClick}>
          <img
            src={withBasePath("/images/logo1.jpeg")}
            alt="Hi-Med logo"
            width={44}
            height={44}
            className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11"
          />
          <span className="font-heading text-lg font-bold text-primary-800 sm:text-xl">
            Hi-Med
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-primary-900/80 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-600 lg:inline-block"
        >
          Enroll Now
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="text-2xl text-primary-800 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-primary-100 bg-white px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-primary-900 hover:bg-primary-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Enroll Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Nav;
