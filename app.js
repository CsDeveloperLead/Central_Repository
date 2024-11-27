import express from 'express'
import cors from 'cors'

const app = express()

const allowedOrigins = ["http://localhost:5173", "http://localhost:8000"]; // Add any other origins you need

app.use(
    cors({
        origin: function (origin, callback) {
            // Allow requests with no origin (like mobile apps or curl requests)
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                // If the origin isn't in the allowed list
                return callback(new Error("Not allowed by CORS"), false);
            }
            return callback(null, true);
        },
        credentials: true, // if your frontend needs to send cookies
    })
);
app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public')) // this is required for uploading image through cloudinary


//import router here
import userRouter from './routes/user.routes.js'
import productRouter from './routes/product.routes.js'
import orderRouter from './routes/order.routes.js'


app.use('/api/v1/users', userRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/order', orderRouter)



export default app