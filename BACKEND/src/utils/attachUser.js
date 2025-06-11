import { verifyToken } from "./helper.js";
import User from "../models/user.model.js";

export const attachUser = async (req, res, next) => {
    const token = req.cookies.accessToken

    if(!token){
        return next()
    }
    try {
        const decoded = verifyToken(token);
        const user = await User.findById(decoded.id);
        if (!user) {
            console.error("User not found for token:", decoded.id);
            return next(); // Proceed without user if token is invalid
        }
        req.user = user; // Attach user info to request object
        next();
    } catch (error) {
        console.error("Token verification failed:", error);
        return next(); // Proceed without user if token verification fails
    }
}