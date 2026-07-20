"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./common/Buttons";

const SLIDES = [
  {
    words: ["Fresh", "Juicy", "Bright"],
    copy: "Streamlining media relations for brands, Orange PR manages media relations, freeing clients to focus on daily operations while ensuring campaign initiatives are constantly monitored and updated for success.",
    bg: "/images/banner.webp",
    video: "/images/video-thumb.webp",
  },
   {
    words: ["Fresh", "Juicy", "Bright"],
    copy: "Streamlining media relations for brands, Orange PR manages media relations, freeing clients to focus on daily operations while ensuring campaign initiatives are constantly monitored and updated for success.",
    bg: "/images/banner.webp",
    video: "/images/video-thumb.webp",
  },
];

const WEIGHT_CLASSES = ["font-light", "font-semibold translate-x-[-20px]  max-md:translate-x-[-10px]", "font-black"];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const slide = SLIDES[active];

  const goTo = (index: number) => {
    setActive((index + SLIDES.length) % SLIDES.length);
  };

  return (
    <section className="relative max-[767px]:h-[600px]  max-[640px]:h-[550px] h-screen w-full overflow-hidden bg-black">
      {SLIDES.map((s, i) => (
        <div
          key={s.bg}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${s.bg})` }}
          aria-hidden={i !== active}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-orange-400/10 to-pink-400/30 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />

      <div className="absolute bottom-[20px]  max-[640px]:bottom-[100px] left-[5%] z-13 w-[92%] max-w-[620px]">
        <h1 className="uppercase leading-[0.86] text-white  max-[640px]:mb-[20px]">
          {slide.words.map((word, i) => (
            <span
              key={word}
              className={`block text-[15vw] sm:text-[9vw] lg:text-[6.2vw] xl:text-[104px] ${WEIGHT_CLASSES[i]}`}
            >
              {word}
            </span>
          ))}
        </h1>

        <p className="mb-[100px] max-[767px]:mb-[20px] max-[640px]:hidden mt-[50px] max-[767px]:max-w-[90%]  max-w-[430px] text-[16px] leading-relaxed text-[#fff]">
          {slide.copy}
        </p>

        

        <Button link="/about" label="Explore" variant="white" />
      </div>

      <div className="absolute right-6 bottom-[5%] z-10  w-[260px] -translate-y-1/2 rounded-[10px] border border-white/25 bg-white/30 p-2.5 backdrop-blur-md lg:right-10 lg:w-[320px] min-[1550px]:w-[350px] group/video max-[767px]:hidden">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[10px]">
          <Image
            src={slide.video}
            alt="Behind the scenes at Orange PR"
            fill
            className="object-cover group-hover/video:scale-[1.05]  transition duration-300"
            sizes="280px"
          />

          

          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/80 backdrop-blur-[10px] text-[#fff] shadow-lg transition-transform group-hover/video:scale-105 flex  items-center justify-center cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 16 18" fill="currentColor" className="pl-[3px]">
              <path d="M0 0L16 9L0 18V0Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/25   flex justify-end">
        <div className="h-px w-full bg-white/25 " />
        <div className="flex w-fit mr-0 items-center justify-end px-6 py-4 md:py-6 sm:px-10">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => goTo(active - 1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/50 text-white transition-colors hover:bg-white hover:text-black cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M9 1L2 7L9 13"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="flex items-center gap-2.5">
              {SLIDES.map((s, i) => (
                <button
                  key={s.bg}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => goTo(i)}
                  className={`grid place-items-center rounded-full transition-all ${
                    i === active
                      ? "h-6 w-6 border border-white/70"
                      : "h-2.5 w-2.5 bg-white/50 hover:bg-white/80"
                  }`}
                >
                  {i === active && (
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  )}
                </button>
              ))}
            </div>

            <button
              type="button"
              aria-label="Next slide"
              onClick={() => goTo(active + 1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/50 text-white transition-colors hover:bg-white hover:text-black cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M5 1L12 7L5 13"
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