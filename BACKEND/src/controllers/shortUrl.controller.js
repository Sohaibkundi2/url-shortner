import { AppError, GeneratNanoId } from "../utils/helper.js";
import urlSchema from "../models/shorturl.model.js";
import { get } from "mongoose";
import { getCustomShortUrl } from "../dao/user.dao.js";

export const createShortUrl = async (req, res, next) => {
  try {
    const { url } = req.body;

    if (!url) {
      return next(new AppError("Full URL is required", 400));
    }

    const shortUrl = GeneratNanoId(7);

    const newUrl = new urlSchema({
      full_url: url,
      short_url: shortUrl,
      ...(req.user && { user: req.user._id }),
    });

    await newUrl.save();

    res.status(200).json({
      status: "success",
      data: {
        shortUrl: process.env.APP_URL + shortUrl,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const createCustomShortUrl = async (req, res, next) => {
  try {
    const { url, slug = null } = req.body;

    if (!url) {
      return next(new AppError("Full URL is required", 400));
    }

    const finalSlug = slug || GeneratNanoId(7);

    // Check if slug already exists
    const existingUrl = await getCustomShortUrl(finalSlug);
    if (existingUrl) {
      return res.status(400).json({
        status: "fail",
        message: "This custom slug is already in use. Please choose another.",
      });
    }

    const newUrl = new urlSchema({
      full_url: url,
      short_url: finalSlug,
      ...(req.user && { user: req.user._id }),
    });

    await newUrl.save();

    res.status(200).json({
      status: "success",
      data: {
        shortUrl: process.env.APP_URL + finalSlug,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        status: "fail",
        message: "This url is already taken. Try a different one.",
      });
    }

    next(error);
  }
};
