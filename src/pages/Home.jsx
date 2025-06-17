import React from "react";
import Hero from "../components/Hero";
import HomeImage from "../assets/images/heroes/home.jpg";
import Fries from "../assets/images/gallery/Fries.jpg";
import Tartare from "../assets/images/gallery/Tartare.jpg";
import Carbonara from "../assets/images/gallery/Carbonara.jpg";
import Bibimbamp from "../assets/images/gallery/Bibimbap.jpg";
import Cake from "../assets/images/gallery/Cake.jpg";
import Chicken from "../assets/images/gallery/Chicken.jpg";

const HomePage = () => {
  const galleryItems = [
    {
      src: Fries,
      alt: "Lab Fries",
    },
    {
      src: Chicken,
      alt: "Sous-Vide FriedChicken",
    },
    {
      src: Tartare,
      alt: "Tuna Tartare",
    },
    {
      src: Carbonara,
      alt: "Ramen Carbonara",
    },
    {
      src: Bibimbamp,
      alt: "Impossible Bibimbamp",
    },
    {
      src: Cake,
      alt: "Matcha Lava Cake",
    },
  ];

  return (
    <div className="w-screen">
      <Hero src={HomeImage}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          TᕼE ᖴOOᗪ ᒪᗩᗷ
        </h1>
      </Hero>

      <section className="bg-white text-gray-800 px-6 py-16 sm:px-10 lg:px-20">
        <div className="carousel carousel-center rounded-box">
          {galleryItems.map(({ src, alt }) => (
            <div className="carousel-item max-h-96 max-w-96">
              <img src={src} alt={alt} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
