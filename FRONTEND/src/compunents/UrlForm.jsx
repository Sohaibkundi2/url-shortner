import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { createShortUrl } from "../api/createShortUrl";
import { motion, AnimatePresence } from "framer-motion";

const BASE_URL = "https://api.shrtit.tech/";

const UrlForm = () => {
  const [urlVal, setUrlVal] = useState("");
  const [slug, setSlug] = useState("");
  const [copied, setCopied] = useState(false);
  const [shortUrl, setShortUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false); 

  const auth = useSelector((state) => state.auth);
  const queryClient = useQueryClient();

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true); 

    try {
      const data = await createShortUrl(urlVal, slug);

      const fullShortUrl = data.shortUrl.startsWith("http")
        ? data.shortUrl
        : BASE_URL + data.shortUrl;

      setShortUrl(fullShortUrl);
      setUrlVal("");
      setSlug("");
      queryClient.invalidateQueries({ queryKey: ["userUrls"] }); // refresh URLs list
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong!");
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <motion.form
      onSubmit={submitHandler}
      className="space-y-6 max-w-xl mx-auto p-6 bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label htmlFor="url" className="block text-sm font-semibold text-gray-700 mb-1">
          🔗 Enter your URL
        </label>
        <input
          type="url"
          id="url"
          placeholder="https://example.com"
          required
          value={urlVal}
          onChange={(e) => setUrlVal(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </motion.div>

      {auth.isAuthenticated && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label htmlFor="slug" className="block text-sm font-semibold text-gray-700 mb-1">
            ✨ Custom URL (optional)
          </label>
          <input
            type="text"
            id="slug"
            placeholder="your-custom-url"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </motion.div>
      )}

      {errorMsg && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="p-3 text-sm text-red-700 bg-red-100 rounded-md shadow-sm"
        >
          ❌ {errorMsg}
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition disabled:opacity-50"
      >
        {isLoading ? "🔄 Creating..." : "🚀 Shorten URL"}
      </motion.button>

      <AnimatePresence>
        {shortUrl && (
          <motion.div
            key="short-url"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 p-4 bg-green-50 rounded-md shadow-sm"
          >
            <p className="text-sm text-gray-600 mb-2">🎉 Your shortened URL:</p>
            <div className="flex items-center justify-between">
              <a
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-all font-medium"
              >
                {shortUrl}
              </a>
              <motion.button
                type="button"
                onClick={handleCopy}
                whileHover={{ scale: 1.05 }}
                className={`ml-4 px-3 py-1 rounded-md transition-all duration-300 text-sm font-medium ${
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {copied ? "✓ Copied" : "📋 Copy"}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
};

export default UrlForm;
