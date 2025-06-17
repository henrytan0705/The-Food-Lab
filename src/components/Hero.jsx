import React from "react";

const Hero = ({ src, children }) => {
  return (
    <div
      className="w-full h-screen bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${src})` }}
      role="img"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 z-10">
        {children}
      </div>
    </div>
  );
};

export default Hero;
