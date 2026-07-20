"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "./common/Buttons";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Media",
    subtitle: "Relations",
    description:
      "Orange PR takes charge of all media relations on behalf of our clients, enabling them to concentrate on their brand's daily requirements.",
    image: "/images/journalist-taking-interview-from-woman.webp",
  },
  {
    id: 2,
    title: "Influencer",
    subtitle: "Management",
    description:
      "We connect brands with the right voices, managing every campaign from outreach to reporting so partnerships feel authentic.",
    image: "/images/young-woman-blogger-recording-video-camera.webp",
  },
  {
    id: 3,
    title: "Events",
    subtitle: "",
    description:
      "From concept to execution, we plan and run brand experiences that bring audiences together in memorable ways.",
    image: "/images/studio-camera-concert.webp",
  },
];

const MOBILE_HEIGHT =
  "h-[280px] [@media(min-width:420px)]:h-[320px] [@media(min-width:640px)]:h-[360px]";

const DESKTOP_HEIGHT_BY_TIER = {
  full: "[@media(min-width:768px)]:h-[600px]   h-[500px] max-md:h-[400px]",
  near: "[@media(min-width:768px)]:h-[500px]   h-[400px] max-md:h-[400px]", // ~84%
  far: "[@media(min-width:768px)]:h-[400px]   h-[300px] max-md:h-[400px]", // ~73%
};

const getHeightClass = (index: number, activeIndex: number) => {
  const distance = Math.abs(index - activeIndex);
  const tier =
    distance === 0
      ? DESKTOP_HEIGHT_BY_TIER.full
      : distance === 1
      ? DESKTOP_HEIGHT_BY_TIER.near
      : DESKTOP_HEIGHT_BY_TIER.far;
  return `${MOBILE_HEIGHT} ${tier}`;
};

const MOBILE_WIDTH =
  "w-[85%] [@media(min-width:420px)]:w-[calc(50%-8px)] [@media(min-width:640px)]:w-[calc(33.333%-11px)]";

const getWidthClass = (isActive: boolean) =>
  isActive
    ? `${MOBILE_WIDTH} shrink-0 max-md:min-w-[300px] [@media(min-width:768px)]:flex-1.5 [@media(min-width:768px)]:shrink [@media(min-width:768px)]:w-[500px]`
    : `${MOBILE_WIDTH} shrink-0 [@media(min-width:768px)]:w-[200px] [@media(min-width:768px)]:shrink-0 [@media(min-width:1024px)]:shrink-0   [@media(min-width:1024px)]:w-[140px]`;

export default function WhatWeDoCarousel() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [contentHeights, setContentHeights] = useState<number[]>([]);

  const goTo = (index: number) => {
    setActive((index + slides.length) % slides.length);
  };

  useEffect(() => {
    const measure = () => {
      setContentHeights(contentRefs.current.map((el) => el?.scrollHeight ?? 0));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Keep the active card in view without relying on hard-coded pixel math,
  // so this keeps working at any viewport width / card size.
  useEffect(() => {
    const card = cardRefs.current[active];
    const track = trackRef.current;
    if (!card || !track) return;

    const cardLeft = card.offsetLeft;
    const cardRight = cardLeft + card.offsetWidth;
    const viewLeft = track.scrollLeft;
    const viewRight = viewLeft + track.clientWidth;

    if (cardLeft < viewLeft) {
      track.scrollTo({ left: cardLeft, behavior: "smooth" });
    } else if (cardRight > viewRight) {
      track.scrollTo({ left: cardRight - track.clientWidth, behavior: "smooth" });
    }
  }, [active]);

  return (
    <section className="w-full bg-white pt-20 md:pt-28 flex justify-center md:justify-end overflow-hidden  min-[1600px]:justify-center">
      <div className="grid w-[95%] min-[1600px]:w-[90%] min-[1600px]:mx-auto max-w-[130rem] grid-cols-1 items-center justify-between  max-md:mx-auto max-md:w-[90%] min-[767px]:grid-cols-[minmax(260px,360px)_60%]  min-[1100px]:grid-cols-[minmax(260px,360px)_70%] min-[1450px]:grid-cols-[minmax(260px,360px)_60%] min-[1100px]:h-[600px] xl:gap-[40px]">
        <div className="min-w-0 max-md:w-full">
          <h2
            className="font-semibold uppercase leading-[1.08] tracking-tight text-neutral-900
                       text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[54px]"
          >
            What we do
            <br />
            experts
          </h2>

          <p className="mt-5 text-lg font-medium text-[#466378] sm:text-xl">
            We build brands.
          </p>

          <p className="md:my-[60px] my-[40px] max-w-xs text-[16px] leading-[20px] text-[#000] max-md:max-w-[90%] md:text-[18px] md:leading-[24px]">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6  max-md:w-full max-md:justify-between">
            <Button variant="black" link="/about-us" label="Read More" />

            <div className="flex items-center gap-1.5 text-sm font-semibold   ">
              {slides.map((s, i) => (
                <span key={s.id} className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    className={
                      i === active
                        ? "text-neutral-900"
                        : "text-neutral-400 hover:text-neutral-600 cursor-pointer"
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>
                  {i < slides.length - 1 && (
                    <span className="text-neutral-400">/</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: carousel. Below md it's a real snap-slider
           (overflow-x-auto + snap-x); from md up the track no longer
           scrolls — the active card just expands in place. */}
        <div className="min-w-0 max-md:mt-[20px]">
          <div
            ref={trackRef}
            className="flex items-start gap-4 overflow-x-auto scroll-smooth pb-1 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [@media(min-width:768px)]:overflow-visible [@media(min-width:768px)]:snap-none [&::-webkit-scrollbar]:hidden"
          >
            {slides.map((slide, i) => {
              const isActive = i === active;
              const distance = Math.abs(i - active);
              const heightClass = getHeightClass(i, active);
              const widthClass = getWidthClass(isActive);

              return (
                <button
                  key={slide.id}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-pressed={isActive}
                  aria-label={`${slide.title} ${slide.subtitle}`.trim()}
                  className={`group relative snap-start self-start overflow-hidden rounded-2xl text-left outline-none transition-[flex-grow,width,height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${heightClass}
                    ${widthClass}`}
                >
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 768px) 33vw, 320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={isActive}
                  />

                  {/* Every card gets the same glass-blur treatment — just a
                     shorter panel for cards with less text to host:
                     active (title + description + button) needs the most
                     room, the near/far tiers taper down to just the title. */}
                  <div
                    className={`pointer-events-none absolute inset-x-0 bottom-0 backdrop-blur-md transition-[height] duration-500 ${
                      isActive
                        ? "h-[45%]"
                        : distance === 1
                        ? "h-[36%]"
                        : "h-[30%]"
                    }`}
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to top, black 35%, transparent 100%)",
                      maskImage:
                        "linear-gradient(to top, black 35%, transparent 100%)",
                    }}
                  />

                  <div className="absolute inset-x-0 bottom-0 p-4 transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-5 md:p-6">
                    <h3 className="text-lg font-light leading-none text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-xl md:text-2xl lg:text-[28px]">
                      {slide.title}
                    </h3>
                    {slide.subtitle && (
                      <h3 className="mt-1 text-base font-light leading-tight text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-lg md:text-xl lg:text-2xl">
                        {slide.subtitle}
                      </h3>
                    )}

                    <div
                      className={`overflow-hidden transition-[max-height,opacity,margin-top] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        maxHeight: isActive ? contentHeights[i] ?? 200 : 0,
                        marginTop: isActive ? 12 : 0,
                      }}
                    >
                      <div
                        ref={(el) => {
                          contentRefs.current[i] = el;
                        }}
                      >
                        <p className="max-w-[90%] text-xs leading-relaxed text-white/80 line-clamp-3">
                          {slide.description}
                        </p>
                        <span
                          className={`mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-900 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 ${
                            isActive
                              ? "translate-y-0 opacity-100 delay-150"
                              : "translate-y-2 opacity-0 delay-0"
                          }`}
                        >
                          <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}