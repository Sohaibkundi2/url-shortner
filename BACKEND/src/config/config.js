
export const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    sameSite: 'lax', // 'n', // Adjust as necessary (Lax, Strict, None)
    maxAge: 1 * 60 * 60 * 1000 // 1 hour in milliseconds
};