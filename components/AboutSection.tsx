import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    label: "Our Clients",
    value: "208",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12">
        <circle cx="10" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M4 19c0-3.3 2.7-6 6-6s6 2.7 6 6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M17.5 8.2l.8 1.7 1.9.3-1.4 1.3.3 1.9-1.6-.9-1.6.9.3-1.9-1.4-1.3 1.9-.3z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Events",
    value: "355",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12">
        <rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 9.5h17" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 3v3.5M16 3v3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="8.3" cy="13.5" r="1" fill="currentColor" />
        <circle cx="12" cy="13.5" r="1" fill="currentColor" />
        <circle cx="8.3" cy="16.8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Years of Experience",
    value: "10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12">
        <circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 6.5l.9 1.8 2 .3-1.4 1.4.3 2-1.8-1-1.8 1 .3-2-1.4-1.4 2-.3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M9 13.5L7.5 21l4.5-2.2 4.5 2.2-1.5-7.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Materials",
    value: "15049",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-12 w-12">
        <path d="M4 17l5-5 3.5 3.5L20 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 8H20v4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="5.5" cy="19.5" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
];

/** Loose grid of faint circles/crescents echoing the decorative left margin in the reference. */
function DecorativePattern() {
  const shapes = [
    { x: 30, y: 10, r: 34 },
    { x: 95, y: 45, r: 16 },
    { x: 20, y: 95, r: 22 },
    { x: 80, y: 130, r: 12 },
    { x: 35, y: 170, r: 30 },
    { x: 100, y: 205, r: 10 },
    { x: 15, y: 250, r: 16 },
    { x: 70, y: 275, r: 24 },
    { x: 25, y: 330, r: 12 },
    { x: 90, y: 355, r: 18 },
    { x: 40, y: 400, r: 10 },
    { x: 85, y: 430, r: 14 },
    { x: 20, y: 460, r: 20 },
  ];
  return (
    <svg
      viewBox="0 0 140 500"
      className="h-full w-full"
      aria-hidden="true"
    >
      {shapes.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#F2F2F2" />
      ))}
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section className="relative w-[90%] mx-auto max-w-[130rem] overflow-hidden bg-white pt-20 md:pt-28">
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-32 lg:block">
        {/* <DecorativePattern /> */}
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 right-0 select-none whitespace-nowrap font-sans text-[4rem] font-extrabold leading-none text-neutral-100 sm:text-[8rem] lg:-top-6 lg:text-[10rem] xl:text-[13rem]"
      >
        ORANGE
      </span>
          <h2 className="text-[45px]  max-md:text-[35px] max-sm:text-[30px] font-[700] leading-[1.05] text-neutral-900">
            Think. Create.
            <br />
            Promote.
          </h2>

      <div className="relative z-1  mt-8 mx-auto grid max-w-7xl gap-12  lg:grid-cols-[300px_auto] lg:gap-20 ">
        <div>

          <div className="relative aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-sm">
            <Image
              src="/images/about-us.webp"
              alt="Orange PR team at work"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="">
          <p className="text-[20px] leading-[30px] text-[#000]">
            Orange PR is Dubai's leading communication company, specializing in cultural, lifestyle, fashion and art. Our agency was founded on a culture of smart strategic thinking, creativity, and innovation that delivers successful solutions to our local, national, and international customer base. Our ability to create and execute dynamic, forward-thinking PR campaigns quickly, while maintaining quality, increasing visibility, and achieving the targeted objectives or aims, is the key to our success. By offering a full turn-key solution, companies partner with us because of our unique approach, which allows us to build a solid connection with you and your brand. Therefore plan, execute, and evaluate effective cross-media and cross-cultural campaigns.
          </p>

          <Link href="/about-us"
            className="block w-fit mt-8 rounded-sm bg-neutral-900 px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-neutral-800"
          >
            Read More
          </Link>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 mx-auto mt-[40px] max-xl:mt-[35px] max-md:mt-[30px] max-sm:mt-[20px]  border border-[#F1F1F1]   sm:mt-20 ">
        <div className="grid grid-cols-2 max-sm:gap-[10px_20px] gap-y-8 md:grid-cols-4 sm:gap-y-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center max-[480px]:flex-col py-10  gap-4 sm:pl-4 md:pl-8 ${
                i > 0 ? "sm:border-l sm:border-[#F1F1F1]" : "sm:pl-0"
              }`}
            >
              <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-md bg-[#DEE4E6] text-[#466378]">
                {s.icon}
              </div>
              <div>
                <p className="text-[22px] leading-none  max-xl:text-[20px] max-md:text-[18px] max-sm:text-[17px]  text-[#466378]">{s.label}</p>
                <p className="text-[30px] max-xl:text-[26px] max-md:text-[22px] max-sm:text-[20px] font-[500] text-[#000]">{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}