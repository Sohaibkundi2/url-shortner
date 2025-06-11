import { loginUser, registerUser } from "../services/auth.service.js";
import { wrapAsync } from "../utils/helper.js";
import { cookieOptions } from "../config/config.js";

export const register_user = wrapAsync(async (req, res) => {
    const { username, email, password } = req.body;
    const name = username; 

    // Assuming registerUser returns { user, token }
    const { user, token } = await registerUser(name, email, password);
    
    req.user = user;
    res.cookie('accessToken', token, cookieOptions);
    
    // Remove password before sending user object
    const userObj = user.toObject ? user.toObject() : { ...user };
    delete userObj.password;

    res.status(201).json({
        message: "User registered successfully",
        accessToken: token,
        user: userObj,
    });
});

export const login_user = wrapAsync(async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await loginUser(email, password);
        req.user = user;
        res.cookie('accessToken', token, cookieOptions);

        // Remove password before sending user object
        const userObj = user.toObject ? user.toObject() : { ...user };
        delete userObj.password;

        res.status(200).json({
            message: "Login successful",
            accessToken: token,
            user: userObj,
        });

    } catch (err) {
        if (err.message === "Invalid email or password") {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        console.error('Login error:', err);
        res.status(500).json({ message: "Internal server error" });
    }
});


export const get_current_user = wrapAsync(async (req, res) => {
    const userObj = req.user.toObject ? req.user.toObject() : { ...req.user };
    delete userObj.password;
    
    res.status(200).json({
        message: "User logged in",
        user: userObj,
    });
}); 

export const logout_user = wrapAsync(async (req, res)=>{
      res.clearCookie('accessToken');
      res.status(200).json({ message: 'Logged out' });
})