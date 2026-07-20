"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const inputClass =
  "w-full rounded-[5px] border border-[#D9D9D9] bg-white px-5 py-4 text-sm text-black placeholder:text-black outline-none transition-colors duration-200 focus:border-neutral-400";

export default function Contactform() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect your API here
    setSubmitted(true);
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Image */}
        <div className="relative h-[260px] sm:h-[360px] md:h-[600px] xl:h-[700px] 2xl:h-[750px]">
          <Image
            src="/images/contact-us.webp"
            alt="Get in touch"
            fill
            priority
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="relative bg-[#EFEFEF]">
          <div className="px-4 py-10 sm:px-6 md:absolute md:inset-0 md:flex md:items-center md:justify-center md:px-0 md:py-0">
            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[92%]
                sm:max-w-[88%]
                md:max-w-[620px]
                rounded-2xl
                bg-white
                p-6
                shadow-[0_25px_70px_-20px_rgba(0,0,0,0.25)]
                sm:p-8
                md:-ml-20
                md:p-10
                lg:-ml-28
              "
            >
              <h2
                className="
                  font-[600]
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
                  2xl:leading-[64px]
                "
              >
                GET IN TOUCH
              </h2>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 rounded-md border border-neutral-200 bg-neutral-50 px-5 py-6 text-sm text-neutral-600"
                  >
                    Thanks — your message has been sent. We'll get back to you
                    shortly.
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleSubmit}
                    className="mt-6 space-y-5"
                  >
                    {/* Name */}
                    <div className="grid gap-4 md:grid-cols-2">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        required
                        className={inputClass}
                      />

                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        required
                        className={inputClass}
                      />
                    </div>

                    {/* Email / Phone */}
                    <div className="grid gap-4 md:grid-cols-2">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className={inputClass}
                      />

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        className={inputClass}
                      />
                    </div>

                    {/* Message */}
                    <textarea
                      name="comments"
                      rows={5}
                      placeholder="Enter your comments here..."
                      className={`${inputClass} min-h-[150px] resize-none`}
                    />

                    {/* Button */}
                    <button
                      type="submit"
                      className="
                        mt-3
                        inline-flex
                        items-center
                        justify-center
                        rounded-[5px]
                        bg-black
                        px-10
                        py-4
                        text-base
                        font-medium
                        uppercase
                        tracking-wide
                        text-white
                        transition-colors
                        duration-200
                        hover:bg-neutral-800
                      "
                    >
                      Submit
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}