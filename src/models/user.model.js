import mongoose, { Schema } from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


const userSchema = new Schema({
    username: {
        type: String,
        required: True,
        lowercase: True,
        unique: True,
        trim: True,
        index: True,
    },
    email: {
        type: String,
        required: True,
        lowercase: True,
        unique: True,
        trim: True,
    },
    fullname: {
        type: String,
        required: True,
        trim: True,
        index: True,
    },
    fullname: {
        type: String,
        required: True,
        lowercase: True,
        unique: True,
        trim: True,
        index: True,
    },
    avatar: {
        type: String,  // cloudinary img
        required: True,
    },
    coverimage: {
        type: String,
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Video'
        }
    ],
    password: {
        type: String,
        required: [true, "password is required"],
    },
    refreshToken: {
        type: String,
    },
}, { timestamps: true })


userSchema.pre("save", async function(next){
    if(!this.ismModified("password"))
        return next()
    this.password = bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return  await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken=function(){
     return  jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:process.env.ACCESS_TOKE_EXPIRY}
    )
}

userSchema.methods.generateRefreshToken=function(){
    return  jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:process.env.REFRESH_TOKE_EXPIRY}
    )
}
export const User = mongoose.model("User", userSchema)