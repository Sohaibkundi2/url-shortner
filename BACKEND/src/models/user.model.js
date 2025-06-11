import mongoose from 'mongoose'

const userSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    avatar: {
        type:String,
        required:false,
        default: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
    }
})


const User = mongoose.model("User", userSchema)

export default User