import React from "react";
import UrlForm from "../compunents/UrlForm";
import { motion } from "framer-motion";
import AboutHeader from "../compunents/AboutHeader";
import FeatureCard from "../compunents/FeatureCard";
import { Link } from "@tanstack/react-router";
import { useSelector } from "react-redux";
import { FaRocket } from "react-icons/fa6";

const HomePage = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-yellow-50 flex flex-col items-center justify-start px-4 overflow-hidden text-center relative">
      <AboutHeader />

      {/* Micro Interactions */}
      <div className="absolute right-1 top-1/4 h-32 w-1 bg-gradient-to-b from-blue-300 to-blue-600 animate-pulse rounded-l" />
      <div className="absolute left-1 top-1/4 h-32 w-1 bg-gradient-to-b from-blue-300 to-blue-600 animate-pulse rounded-l" />

      {/* Main Card */}
      <div className="w-full mt-10 max-w-md bg-white mb-2 rounded-lg shadow-md p-6 z-10">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          URL Shortener
        </h1>
        <UrlForm />
      </div>
      {/* Sign Up CTA - only show when not logged in */}
      {!isAuthenticated && (
        <>
          <p className="text-sm text-gray-600 mt-4">
            Want to create custom URLs or click tracking?
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Sign up to manage and monitor your links easily.
          </p>

          <Link
            to="/signup"
            className="mt-2 mb-10 inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow hover:opacity-70 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FaRocket className="text-white" />
            Get Started Free
          </Link>
        </>
      )}

      <FeatureCard />
    </div>
  );
};

export default HomePage;
