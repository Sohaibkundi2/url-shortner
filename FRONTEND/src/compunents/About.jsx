import React, { useState } from "react";
import { motion } from "framer-motion";
import AboutHeader from "./AboutHeader.jsx";
import FeatureCard from "./FeatureCard.jsx";
import { FaRocket, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "@tanstack/react-router";

const faqs = [
  {
    question: "What is this platform?",
    answer:
      "Shrtit is a modern URL shortener that helps you create clean, concise links while tracking performance in real-time.",
  },
  {
    question: "Is it completely free?",
    answer:
      "Yes — all core features are free to use with no ads, hidden fees, or mandatory signups.",
  },
  {
    question: "Can I track how many times my link is clicked?",
    answer:
      "Absolutely. Each shortened link includes detailed analytics so you can monitor engagement with ease.",
  },
  {
    question: "Does it support custom short URLs?",
    answer:
      "Yes. Once you're signed in, you can create branded or custom aliases to match your content or campaign.",
  },
  {
    question: "Do I need an account to manage my links?",
    answer:
      "An account is required to save, manage, or delete your links — giving you full control over your content.",
  },
  {
    question: "How secure is my data?",
    answer:
      "Your privacy is a priority. All user data is securely encrypted and never shared with third parties.",
  },
];


const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-100 to-yellow-50 py-10 px-4 overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-blue-300 to-purple-300 opacity-20 rounded-b-full -z-10" />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <AboutHeader />

        <div className="mt-6">
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:opacity-80 transition"
          >
            <FaRocket /> Get Started
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <FeatureCard />

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
          ❓ Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-blue-100 rounded-lg overflow-hidden shadow-sm bg-white"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center px-4 py-3 text-blue-700 font-medium focus:outline-none"
              >
                {faq.question}
                {activeIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {activeIndex === idx && (
                <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-16">
        <p>
          © {new Date().getFullYear()} Shrtit — Built with ❤️ for simplicity.
        </p>
      </footer>
    </div>
  );
};

export default About;
