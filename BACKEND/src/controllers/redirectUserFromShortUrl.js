import urlSchema from "../models/shorturl.model.js";
import { AppError } from "../utils/helper.js";

export const redirectUserFromShortUrl = async (req, res, next) => {

  try {
    const { id } = req.params;
    if (!id) {
        return next(new AppError("Short URL is required", 400));
    }
    const url = await urlSchema.findOneAndUpdate(
      { short_url: id },
      { $inc: { clicks: 1 } }
    );
    if (!url) {
      if (!url) {
        return next(new AppError("Short URL not found", 404));
      }
    }
    if (url) {
      res.redirect(url.full_url);
    } else {
      res.status(404).send("Not Found...");
    }
  } catch (error) {
    next(error);
  }
};
