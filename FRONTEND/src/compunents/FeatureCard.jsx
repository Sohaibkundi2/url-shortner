import React from "react";
import { motion } from "framer-motion";
import { FaLink, FaChartLine, FaShieldAlt, FaRocket } from "react-icons/fa";

const features = [
  {
    icon: <FaLink className="text-blue-600 text-xl" />,
    title: "Blazing-fast URLs",
    description: "Shorten links instantly with top-tier performance.",
    border: "border-blue-600",
    shadow: "shadow-blue-400/50",
    bgCircle: "bg-blue-100",
    ring: "ring-blue-300",
  },
  {
    icon: <FaChartLine className="text-green-600 text-xl" />,
    title: "Click Analytics",
    description: "Track every click with live stats and insights.",
    border: "border-green-600",
    shadow: "shadow-green-400/50",
    bgCircle: "bg-green-100",
    ring: "ring-green-300",
  },
  {
    icon: <FaShieldAlt className="text-purple-600 text-xl" />,
    title: "Privacy-Focused",
    description: "We don't track you or show ads — ever.",
    border: "border-purple-600",
    shadow: "shadow-purple-400/50",
    bgCircle: "bg-purple-100",
    ring: "ring-purple-300",
  },
  {
    icon: <FaRocket className="text-red-500 text-xl" />,
    title: "Custom URLs",
    description: "Create personalized and branded short links easily.",
    border: "border-red-500",
    shadow: "shadow-red-400/50",
    bgCircle: "bg-red-100",
    ring: "ring-red-300",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  whileHover: { scale: 1.05 },
};

const FeatureCard = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6 p-4 sm:p-6 lg:p-8"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover="whileHover"
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-md border-2 ${feature.border} p-6 rounded-2xl text-center shadow-md transition-all duration-300 ease-in-out ${feature.shadow} active:ring-4 active:ring-offset-2 active:${feature.ring}`}
        >
          <div
            className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center ${feature.bgCircle}`}
          >
            {feature.icon}
          </div>
          <h3 className="font-semibold text-lg text-gray-800 mb-1">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-700">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeatureCard;
