import express, { request } from 'express';
import connectDB from './src/config/mongodb.config.js';
import urlSchema from './src/models/shorturl.model.js'
import shortUrlRoute from './src/routes/shortUrl.route.js'
import auth_routes from './src/routes/auth.route.js'
import user_routes from './src/routes/user.route.js'
import dotenv from 'dotenv'
import { redirectUserFromShortUrl } from './src/controllers/redirectUserFromShortUrl.js';
import { globalErrorHandler } from './src/middlewares/globalErrorHandler.js';
import cors from 'cors'
import { attachUser } from './src/utils/attachUser.js';
import cookieParser from 'cookie-parser';

dotenv.config()
const PORT = process.env.PORT || 5000;

const app = express()
app.use(cors({
    origin: ['http://localhost:5173', 'https://shrtit.tech', 'https://www.shrtit.tech','https://url-shortner-production-2288.up.railway.app'],
    credentials: true
}));


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(attachUser)



app.use('/api/auth',auth_routes)
app.get('/:id',redirectUserFromShortUrl)
app.use('/api/create',shortUrlRoute)
app.use('/api/user',user_routes)

app.use(globalErrorHandler);

app.listen(PORT,()=>{
    connectDB()
    console.log(`server is listning on http://localhost:${PORT}`)
})