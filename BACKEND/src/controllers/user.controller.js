import { allUserUrl } from "../dao/user.dao.js"
import { wrapAsync } from "../utils/helper.js"

export const getAllUserUrls =wrapAsync(async (req, res)=>{
    const {_id}= req.user

    const urls = await allUserUrl(_id)

    res.status(200).json({message:"url fetched successfully",urls})
})