import React from "react";
import Hero from "../components/Hero";
import ContactImage from "../assets/images/heroes/contact.jpg";

const ContactPage = () => {
  return (
    <div className="w-screen">
      <Hero src={ContactImage}>
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

          <div className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Our Location
            </h2>
            <div className="w-full h-[400px] rounded shadow overflow-hidden">
              <iframe
                title="The Food Lab Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.943846870181!2d-73.967104!3d40.7678438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258eb899f0889%3A0xb5e90aa7d877ee1f!2sHunter%20College!5e0!3m2!1sen!2sus!4v1718669900000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
