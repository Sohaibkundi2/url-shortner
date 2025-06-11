import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";

import {get_current_user, login_user,register_user, logout_user} from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/register',register_user);
router.post('/login',login_user);
router.post('/logout',logout_user);
router.get('/me',authMiddleware,get_current_user);

export default router