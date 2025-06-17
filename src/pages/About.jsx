import React from "react";
import Hero from "../components/Hero";
import HomeImage from "../assets/images/heroes/home.jpg";

const AboutPage = () => {
  return (
    <div className="h-screen w-screen">
      <Hero src={HomeImage}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          ᗩᗷOᑌT
        </h1>
      </Hero>

      <section className="bg-white text-gray-800 px-6 py-16 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
          <p>
            Welcome to <strong>The Food Lab</strong>, where culinary innovation
            meets the soul of New York City. Founded in the heart of Brooklyn by
            a group of chefs, designers, and food lovers, The Food Lab was born
            out of a shared obsession: to reimagine classic dishes through a
            modern lens.
          </p>
          <p>
            Inspired by the city’s diversity and constant evolution, we
            experiment with bold flavors, unexpected pairings, and elevated
            plating—while keeping comfort and creativity at the center of every
            dish.
          </p>
          <p>
            Our kitchen isn't just a place where food is made. It's where ideas
            are tested, flavors are pushed, and traditions are challenged. From
            house-fermented ingredients to seasonal tasting menus, we treat each
            meal as a small act of invention.
          </p>
          <p>
            Whether you're dining in for a date night, a casual bite, or your
            first taste of something new, The Food Lab invites you to explore,
            indulge, and be surprised.
          </p>
          <p className="italic text-red-500 font-medium">
            Let’s experiment—together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
