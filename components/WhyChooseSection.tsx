"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const cards = [
  {
    number: "01",
    title: "Market Entry Expertise",
    description:
      "We provide end-to-end PR and digital marketing solutions for businesses entering India.",
    image: "/images/market-entry.webp",
    bg: "bg-[#AEB4B9]",
  },
  {
    number: "02",
    title: "Strong Media Relationships",
    description:
      "Our network spans top Indian publications, ensuring maximum visibility for your brand.",
    image: "/images/strong-media.webp",
    bg: "bg-[#FD9073]",
  },
  {
    number: "03",
    title: "Localized Storytelling",
    description:
      "We tailor messaging to resonate with Indian consumers, investors, and stakeholders.",
    image: "/images/localized-storytelling.webp",
    bg: "bg-[#FBB78C]",
  },
];

//card style 

function useCardsPerView() {
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) return 1;
      if (w < 768) return 2;
      return 3;
    };

    const update = () => setPerView(compute());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perView;
}

export default function WhyChooseSection() {
  const perView = useCardsPerView();
  const [page, setPage] = useState(0);

  const pageCount = Math.max(1, Math.ceil(cards.length / perView));
  const currentPage = Math.min(page, pageCount - 1);

  useEffect(() => {
    setPage(0);
  }, [perView]);

  const visibleCards =
    perView >= 3
      ? cards
      : cards.slice(currentPage * perView, currentPage * perView + perView);

  return (
    <section className="w-full bg-white px-4 sm:px-6 py-14 sm:py-20">
      <div className="relative z-[1] mx-auto max-w-[130rem] w-[90%]">
        <div className="absolute -left-[5%] top-0 -z-[1] h-[60%] w-[110%] rounded-t-[30px] bg-[#EFEFEF]" />

        <div className="px-6 pb-20 pt-12 sm:px-10 sm:pb-18 sm:pt-14 md:pb-20 md:pt-16">
          <h2
            className="text-center font-semibold uppercase tracking-tight text-neutral-900
                       text-[26px] leading-[32px]
                       sm:text-[34px] sm:leading-[40px]
                       md:text-[42px] md:leading-[50px]
                       lg:text-[46px] lg:leading-[54px]"
          >
            Why Choose Concept PR?
          </h2>
        </div>

        {/* Cards — below md, only the current page's cards are shown (1 below sm, 2 below md);
            at md+ all three show in a grid */}
        <div className="flex flex-wrap justify-center gap-6 px-1 md:grid md:grid-cols-3 md:px-0">
          {visibleCards.map((card) => {
            const originalIndex = cards.indexOf(card);
            return (
              <div
                key={card.number}
                className={`flex w-full max-sm:max-w-[100%] max-w-[280px] md:max-w-[300px] md:max-w-none flex-col rounded-3xl p-6 text-white shadow-lg shadow-black/10 sm:p-7 h-[380px] md:h-[420px] xl:h-[500px] ${
                  card.bg
                } ${originalIndex === 1 ? "md:translate-y-[80px]" : ""}`}
              >
                {/* Number + thumbnail */}
                <div className="flex items-start justify-between gap-3">
                  <span className="text-6xl font-[600] leading-none tracking-tight sm:text-7xl">
                    {card.number}
                  </span>
                  <div className="relative h-[90px] w-[90px] shrink-0 overflow-hidden shadow-md sm:h-20 sm:w-20 md:h-[120px] md:w-[120px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Title + description, pinned to the bottom of the card */}
                <div className="mt-auto pt-10">
                  <h3 className="text-[#fff] font-[600] uppercase leading-snug tracking-tight text-[20px] leading-[24px] md:text-[20px] md:leading-[30px] xl:text-[24px] xl:leading-[32px] max-w-[320px]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[20px] text-[#fff] md:text-[18px] md:leading-[24px] xl:text-[20px] xl:leading-[26px]">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Slide navigation — mobile/tablet only (hidden once perView reaches 3 at md+) */}
        {perView < 3 && (
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-1.5 text-sm font-semibold">
              {Array.from({ length: pageCount }).map((_, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setPage(i)}
                    className={
                      i === currentPage
                        ? "text-neutral-900"
                        : "text-neutral-400 hover:text-neutral-600"
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>
                  {i < pageCount - 1 && (
                    <span className="text-neutral-400">/</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}