import { nanoid } from "nanoid"
import jwt from 'jsonwebtoken';

export const GeneratNanoId = (length) => {
    return nanoid(length)
}

export const signToken = (payload)=>{
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        throw new Error("Invalid token");
    }
}

const wrapAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
export { wrapAsync };

export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    // Maintains proper stack trace for where error was thrown
    Error.captureStackTrace(this, this.constructor);
  }
}
