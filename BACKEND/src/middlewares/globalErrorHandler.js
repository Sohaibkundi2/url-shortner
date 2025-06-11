// middlewares/errorHandler.js
export const globalErrorHandler = (err, req, res, next) => {
  console.error("🌐 GLOBAL ERROR:", err.stack || err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    status: "error",
    error: message,
  });
};
