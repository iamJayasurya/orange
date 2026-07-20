"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Tile =
  | { type: "photo"; src: string; alt: string; grow: number }
  | { type: "spacer"; grow: number }
  | { type: "space2"; grow: number }
  | { type: "space"; grow: number };

const columns: Tile[][] = [
  [
    { type: "spacer", grow: 2.0 },
    {
      type: "photo",
      src: "/images/testimonials-1.webp",
      alt: "Team member portrait",
      grow: 3.0,
    },
    {
      type: "photo",
      src: "/images/testimonials-2.webp",
      alt: "Team member portrait",
      grow: 3.4,
    },
  ],
  [
    { type: "spacer", grow: 1.0 },
    {
      type: "photo",
      src: "/images/testimonials-3.webp",
      alt: "Team member portrait",
      grow: 3.2,
    },
    {
      type: "photo",
      src: "/images/testimonials-4.webp",
      alt: "Team member portrait",
      grow: 3.0,
    },
    { type: "space", grow: 2.0 },
  ],
  [
    { type: "spacer", grow: 2.3 },
    {
      type: "photo",
      src: "/images/testimonials-5.webp",
      alt: "Team member portrait",
      grow: 4.0,
    },
    { type: "space", grow: 3.0 },
  ],
  [
    { type: "spacer", grow: 1.1 },
    {
      type: "photo",
      src: "/images/testimonials-6.webp",
      alt: "Team member portrait",
      grow: 3.0,
    },
    { type: "space", grow: 5.2 },
  ],
  [
    { type: "spacer", grow: 1.8 },
    {
      type: "photo",
      src: "/images/testimonials-7.webp",
      alt: "Team member portrait",
      grow: 3.0,
    },
    { type: "space", grow: 4.5 },
  ],
  [
    { type: "spacer", grow: 1.5 },
    {
      type: "photo",
      src: "/images/testimonials-8.webp",
      alt: "Team member portrait",
      grow: 3.0,
    },
    { type: "space", grow: 4.8 },
  ],
  [
    { type: "spacer", grow: 2.4 },
    {
      type: "photo",
      src: "/images/testimonials-9.webp",
      alt: "Team member portrait",
      grow: 2.8,
    },
    { type: "space", grow: 4.1 },
  ],
  [
    { type: "spacer", grow: 1.0 },
    {
      type: "photo",
      src: "/images/testimonials-10.webp",
      alt: "Team member portrait",
      grow: 3.0,
    },
    {
      type: "photo",
      src: "/images/testimonials-11.webp",
      alt: "Team member portrait",
      grow: 3.6,
    },
    { type: "space", grow: 0.7 },
  ],
  [
    { type: "spacer", grow: 2.3 },
    {
      type: "photo",
      src: "/images/testimonials-12.webp",
      alt: "Team member portrait",
      grow: 2.6,
    },
    { type: "space2", grow: 3.4 },
  ],
];

const testimonials = [
  {
    avatar: "https://i.pravatar.cc/120?img=13",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "James Andrews",
    role: "CEO and Founder of the Company",
  },
  {
    avatar: "https://i.pravatar.cc/120?img=32",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    name: "Priya Nair",
    role: "Head of Product Design",
  },
  {
    avatar: "https://i.pravatar.cc/120?img=51",
    quote:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.",
    name: "Daniel Osei",
    role: "Client Success Lead",
  },
];

export default function HomeTestimonials() {
  const [active, setActive] = useState(0);

  const go = (dir: 1 | -1) => {
    setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const current = testimonials[active];

  return (
    <section className="w-full bg-white px-6 pt-20 md:pt-28 pb-14 sm:pb-20">
      {/* Photo wall */}
      <div className="relative mx-auto grid aspect-[1241/449] w-full max-w-[880px] grid-cols-9 grid-rows-1 gap-2 sm:gap-3 md:gap-4">
        {columns.map((col, ci) => (
          <div key={ci} className="flex h-full min-w-0 flex-col gap-2 sm:gap-3 md:gap-4">
            {col.map((tile, ti) => {
              if (tile.type === "photo") {
                return (
                  <div
                    key={ti}
                    style={{ flexGrow: tile.grow, flexBasis: 0 }}
                    className="relative min-h-0 w-full overflow-hidden rounded-md sm:rounded-lg"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tile.src}
                      alt={tile.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                );
              }

              if (tile.type === "spacer") {
                return (
                  <div
                    key={ti}
                    style={{ flexGrow: tile.grow, flexBasis: 0 }}
                    className="min-h-0 w-full rounded-md bg-[#F8F8F8] sm:rounded-lg"
                  />
                );
              } 
              else if(tile.type ==="space2"){return (
                  <div
                    key={ti}
                    style={{ flexGrow: tile.grow, flexBasis: 0 }}
                    className="min-h-0 w-full rounded-md bg-[#D9D9D9] sm:rounded-lg"
                  />
                );

              }

              return (
                <div
                  key={ti}
                  style={{ flexGrow: tile.grow, flexBasis: 0 }}
                  className="min-h-0 w-full rounded-md bg-transparent sm:rounded-lg"
                />
              );
            })}
          </div>
        ))}
      </div>

<div className="sm:-mt-12  mt-2  md:-mt-15 ">
      <h2 className=" text-center font-[600]
                  tracking-tight
                  text-neutral-900
                  text-[28px]
                  leading-[34px]
                  sm:text-[35px]
                  sm:leading-[42px]
                  md:text-[42px]
                  md:leading-[50px]
                  xl:text-[50px]
                  xl:leading-[64px]
                  2xl:text-[64px]
                  2xl:leading-[64px]">
        TESTIMONIALS
      </h2>

      <div className="mx-auto mt-5 md:mt-10 flex max-w-xl flex-col items-center text-center xl:mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-10 h-10 xl:h-16 xl:w-16 overflow-hidden rounded-full ring-1 ring-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.avatar}
                alt={current.name}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-6 max-w-md  leading-[22px] text-[#000] text-[16px]">
              {current.quote}
            </p>

            <p className="mt-6 text-[20px] font-[600] text-neutral-900">
              {current.name}
            </p>
            <p className="mt-0.5 text-xs text-[#000] text-[300]">{current.role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="mt-8 flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-6 w-6 items-center justify-center text-neutral-400 transition-colors hover:text-neutral-700 cursor-pointer"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex items-center gap-1.5 font-mono text-xs">
            {testimonials.map((t, i) => (
              <span key={t.name} className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={
                    i === active
                      ? "font-semibold text-neutral-900"
                      : "text-neutral-400 transition-colors hover:text-neutral-600 cursor-pointer"
                  }
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
                {i < testimonials.length - 1 && (
                  <span className="text-neutral-300">/</span>
                )}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-6 w-6 items-center justify-center text-neutral-400 transition-colors hover:text-neutral-700 cursor-pointer"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}