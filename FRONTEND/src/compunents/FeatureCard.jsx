import React from "react";
import { motion } from "framer-motion";
import { FaLink, FaChartLine, FaShieldAlt, FaRocket } from 'react-icons/fa';

const FeatureCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 mb-16">
            {/* Feature Cards */}
            <motion.div whileHover={{ scale: 1.03 }} className="bg-white/30 backdrop-blur-md border border-white/40 shadow-lg p-6 rounded-xl text-center">
                <FaLink className="text-blue-600 text-3xl mx-auto mb-2" />
                <h3 className="font-semibold text-lg text-blue-700 mb-1">Blazing-fast URLs</h3>
                <p className="text-sm text-gray-700">Shorten links instantly with top-tier performance.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="bg-white/30 backdrop-blur-md border border-white/40 shadow-lg p-6 rounded-xl text-center">
                <FaChartLine className="text-green-600 text-3xl mx-auto mb-2" />
                <h3 className="font-semibold text-lg text-green-700 mb-1">Click Analytics</h3>
                <p className="text-sm text-gray-700">Track every click with live stats and insights.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="bg-white/30 backdrop-blur-md border border-white/40 shadow-lg p-6 rounded-xl text-center">
                <FaShieldAlt className="text-purple-600 text-3xl mx-auto mb-2" />
                <h3 className="font-semibold text-lg text-purple-700 mb-1">Privacy-Focused</h3>
                <p className="text-sm text-gray-700">We don't track you or show ads — ever.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} className="bg-white/30 backdrop-blur-md border border-white/40 shadow-lg p-6 rounded-xl text-center">
                <FaRocket className="text-red-500 text-3xl mx-auto mb-2" />
                <h3 className="font-semibold text-lg text-red-600 mb-1">Custom URLs</h3>
                <p className="text-sm text-gray-700">Create personalized and branded short links easily.</p>
            </motion.div>
        </motion.div>
    );
};

export default FeatureCard;
