"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const quickLinks = ["Home", "PR Services", "About Us", "Contact Us"];

const socials = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M14 9h2.5V6H14c-1.9 0-3.5 1.6-3.5 3.5V11H8v3h2.5v6H14v-6h2.3l.4-3H14V9.6c0-.3.3-.6.6-.6z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M5 5l14 14M19 5L5 19"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <span className="text-[10px] font-bold leading-none">in</span>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16.2" cy="7.8" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "#",
    icon: (
      <span className="text-[11px] font-bold leading-none">P</span>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <rect x="3.5" y="6" width="17" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10.5 9.5l4 2.5-4 2.5z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    // Wire this up to your newsletter provider of choice.
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="w-full bg-black text-white">
      {/* Newsletter */}
      <div className="mx-auto w-[90%] max-w-[130rem] py-12 md:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:grid lg:gap-10 md:grid-cols-[1.65fr_1fr_1fr] xl:grid-cols-[1.9fr_2fr]">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Newsletter</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry&apos;s
              standard dummy text.
            </p>
          </div>

          <div className="w-full lg:w-[full]">
            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.p
                  key="done"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-[52px] items-center rounded-md border border-white/20 px-5 text-sm text-white/80"
                >
                  Thanks — you&apos;re subscribed.
                </motion.p>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSubscribe}
                  className="flex items-center justify-between rounded-md border border-white/20 pl-5 pr-2"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="h-[52px] w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex h-9 w-9 shrink-0 items-center justify-center text-white transition-transform hover:translate-x-0.5"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                      <path
                        d="M4 12h16M13 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Main columns */}
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-[130rem] w-[90%] gap-10 py-5 sm:py-8 md:py-12 md:grid-cols-[1.75fr_1fr_1fr] xl:grid-cols-[2fr_1fr_1fr] md:py-16">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight sm:text-[1.75rem]">
              ORANGE PR
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white">
              Orange PR is Dubai&apos;s leading communication company,
              specializing in cultural, lifestyle, fashion and art. Our
              agency was founded on a culture of smart strategic thinking,
              creativity, and innovation that delivers successful solutions
              to our local, national, and international customer base. Our
              ability to create and execute dynamic, forward-thinking PR
              campaigns quickly, while maintaining quality, increasing
              visibility, and achieving the targeted objectives or aims, is
              the key to our success.
            </p>
          </div>

          <div>
            <h4 className="text-[18px] font-bold tracking-wide text-white">
              QUICK LINKS
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[16px] text-white/70 transition-colors hover:text-white"
                  >
                    {link.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[18px] font-bold tracking-wide text-white">
              CONTACT INFO
            </h4>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3 text-[16px] text-white/70">
                <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-5 w-5 shrink-0">
                  <path
                    d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span className="leading-relaxed">
                  FD - First Floor Incubator Building
                  <br />
                  Masdar City, Abu Dhabi
                  <br />
                  United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-3 text-[16px] text-white/70">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
                  <rect x="7.5" y="3" width="9" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M11 18h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                +971 58 58 7 3195
              </li>
              <li className="flex items-center gap-3 text-[16px] text-white/70">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                maria@orangepragency.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[130rem] w-[90%] flex-col items-center justify-between gap-4  py-6 text-xs text-white/60 sm:flex-row">
          <p>
            © 2025 Orange PR Agency. &nbsp;|&nbsp; Design &amp; Development by
            : MightyWarners Technologies
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition-colors hover:border-white/50 hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}