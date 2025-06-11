import shortUrl from "../models/shorturl.model.js";
import User from "../models/user.model.js";

export const findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        throw error;
    }
}

export const findUserById = async (id) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        throw error;
    }
}
export const createUser = async (name,email,password) => {
    try {
        const user = new User({
            name,
            email,
            password
        });
        await user.save();
        return user;
    } catch (error) {
        throw error;
    }
}

export const getCustomShortUrl = async (slug) => {
    try {
        const url = await User.findOne({ short_url: slug });
        return url;
    } catch (error) {
        throw error;
    }
};

export const allUserUrl =async (id)=>{
    return await shortUrl.find({user:id})
}