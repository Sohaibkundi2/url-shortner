import React from "react";

const AboutHeader = () => {
  return (
    <div>
      <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 mt-10 text-transparent bg-clip-text mb-4">
        Welcome to Shrtit
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        A sleek, fast, and trackable URL shortener designed for modern web
        users.
      </p>
    </div>
  );
};

export default AboutHeader;
