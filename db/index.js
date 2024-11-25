import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js'

// this function is just to connect backend with MONGO DB 
// this function is called in index.js in root
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\nMongoDB Connected || DB Host : ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MONGODB Connection Error :", error)
        process.exit(1)
    }
}

export default connectDB