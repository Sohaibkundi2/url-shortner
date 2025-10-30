import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllUserUrls } from '../api/user.api';
import { motion } from 'framer-motion';
import { toast } from "react-hot-toast";

const UserUrl = () => {
const BASE_URL = "https://shrtit.tech/";
  const { data, isLoading, isError } = useQuery({
    queryKey: ['userUrls'],
    queryFn: getAllUserUrls,
  });

  const urls = data?.urls || [];
  const [copiedIdx, setCopiedIdx] = React.useState(null);

  const handleCopy = (shortUrl, idx) => {
    navigator.clipboard.writeText(shortUrl);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
    toast.success("Short URL copied to clipboard!");
  };

  if (isLoading) return <div className="text-center py-8 text-gray-500">Loading URLs...</div>;
  if (isError) return <div className="text-center py-8 text-red-500">Error loading URLs</div>;

  return (
    <motion.div
      className="p-4 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-2xl font-bold mb-6 text-gray-800 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        🔗 Your Created URLs
      </motion.h2>

      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
        {urls.length > 0 ? (
          urls.slice().reverse().map((url, idx) => (
            <motion.div
              key={url._id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 shadow-md rounded-xl p-5 border border-gray-200 hover:shadow-lg transition flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"

            >
              {/* Left: URL Info */}
              <div className="flex-1 space-y-2">
                <div>
                  <p className="text-xs text-gray-500">Short URL</p>
                  <a
                    href={`${BASE_URL}${url.short_url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline break-words font-medium"
                  >
                    {`${BASE_URL}${url.short_url}`}
                  </a>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Original URL</p>
                  <p className="text-sm text-gray-700 break-words">{url.full_url}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Clicks</p>
                  <span className="text-base font-semibold text-blue-700">{url.clicks}</span>
                </div>
              </div>

              {/* Right: Copy Button */}
              <div className="sm:text-right">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-5 py-2 text-sm rounded-full font-medium transition shadow-sm ${copiedIdx === idx
                    ? "bg-green-500 text-white"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    }`}
                  onClick={() => handleCopy(`${BASE_URL}${url.short_url}`, idx)}
                >
                  {copiedIdx === idx ? "✓ Copied" : "📋 Copy"}
                </motion.button>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div
            className="flex flex-col items-center justify-center text-gray-500 space-y-3 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <svg
              className="w-16 h-16 text-blue-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3H4.5A2.25 2.25 0 002.25 5.25v13.5A2.25 2.25 0 004.5 21h13.5a2.25 2.25 0 002.25-2.25V11.25a2.25 2.25 0 00-.659-1.591l-4.341-4.341A2.25 2.25 0 0015.75 9z"
              />
            </svg>
            <p className="text-lg font-semibold">No URLs found</p>
            <p className="text-sm text-gray-400">Add your first short link to see it here.</p>
          </motion.div>
        )}
      </div>

    </motion.div>
  );
};

export default UserUrl;
