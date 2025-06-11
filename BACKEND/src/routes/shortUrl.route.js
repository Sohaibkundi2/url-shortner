import express from 'express';
import { createShortUrl, createCustomShortUrl } from '../controllers/shortUrl.controller.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { slug } = req.body;

    if (slug) {
      await createCustomShortUrl(req, res, next);
    } else {
      await createShortUrl(req, res, next);
    }
  } catch (error) {
    next(error);
  }
});

export default router;
