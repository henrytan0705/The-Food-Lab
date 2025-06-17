import React from "react";
import Hero from "../components/Hero";
import HomeImage from "../assets/images/heroes/home.jpg";

const ContactPage = () => {
  return (
    <div className="h-screen w-screen">
      <Hero src={HomeImage}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          ᑕOᑎTᗩᑕT
        </h1>
      </Hero>

      <section className="bg-white text-gray-800 px-6 py-16 sm:px-10 lg:px-20">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-red-500">Get In Touch</h2>

          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Let us know how we can help..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
