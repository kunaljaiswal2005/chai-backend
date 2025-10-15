//require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import connectDb from './db/index.js'
import express from 'express'



dotenv.config({
    path: './env'
})

const app=express()
connectDb()

    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running at port : ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("Mongodb connection failed", error)
    })




// import express from "express";


// const app=express();

// (async ()=>{
//     try {
//          await mongoose.connect(`${process.env.MONGODB_URI }/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("error in connecting to db",error)
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`app is running on port % {process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log("error",error)
//         throw error
//     }
// })()