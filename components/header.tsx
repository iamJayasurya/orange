"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "PR Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Toggle header background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Scroll-driven background: transparent -> black gradient, top to bottom */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black via-black/70 to-transparent transition-opacity duration-500 ease-in-out ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <nav className="relative mx-auto flex h-[100px] w-[95%] max-w-[130rem] items-center justify-between">
        <Link
          href="/"
          aria-label="Link to Home page"
          className="relative h-9 w-40 shrink-0"
        >
          <Image
            src="/images/logo.svg"
            alt="Orange PR"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="ml-auto hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-[15px] font-bold uppercase leading-5 tracking-wide text-white transition-colors duration-300 hover:text-orange-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Dots menu button — same trigger on mobile and desktop */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "More options"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="ml-6 grid h-11 w-11 place-items-center gap-1 rounded-md border border-white/40 p-0 transition-colors hover:border-white cursor-pointer"
        >
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative h-6 w-6"
          >
            <Image
              src="/images/mage_dots-menu.png"
              fill
              alt="more Dot "
              className="object-contain"
            />
          </motion.span>
        </button>
      </nav>

      {/* Side menu — shared between mobile and desktop */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60"
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-xs flex-col overflow-hidden bg-black px-8 py-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-extrabold text-white">
                  ORANGE PR
                </span>
              </div>

              <ul className="mt-12 flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-xl font-bold uppercase tracking-wide text-white transition-colors hover:text-orange-400"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}