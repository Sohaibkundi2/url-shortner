import { findUserById } from "../dao/user.dao.js";
import { AppError, verifyToken } from "../utils/helper.js";

export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) {
        return next(new AppError("You are not logged in", 401));
    }
    try {
        const decoded = verifyToken(token);
        const user = await findUserById(decoded.id);
        if (!user) {
            return next(new AppError("User not found", 401));
        }
        req.user = user;
        next();
    } catch (error) {
        return next(new AppError("unauthorized", 401));
        
    }
};
