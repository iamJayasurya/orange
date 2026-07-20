import AboutSection from "@/components/AboutSection";
import Contactform from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import HomeTestimonials from "@/components/HomeTestimonials";
import WhatWeDoCarousel from "@/components/WhatwedoCarousel";
import WhyChooseSection from "@/components/WhyChooseSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <Header/>
      <main>
        <HeroSection/>
        <AboutSection/>
        <WhatWeDoCarousel/>
        <WhyChooseSection/>
        <HomeTestimonials/>
        <Contactform/>
      </main>
      <Footer/>
    </div>
  );
}
