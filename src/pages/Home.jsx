import React from "react";
import Hero from "../components/Hero";
import HeroImage from "../assets/images/hero.jpg";

const HomePage = () => {
  return (
    <div className="h-screen w-screen">
      <Hero src={HeroImage}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          TᕼE ᖴOOᗪ ᒪᗩᗷ
        </h1>
      </Hero>

      <section className="bg-white text-gray-800 px-6 py-16 sm:px-10 lg:px-20">
        Image Gallery
      </section>
    </div>
  );
};

export default HomePage;
