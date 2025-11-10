import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB = async () => {

    try {
        const connection = await mongoose.connect(ENV.MONGO_URI);

        console.log(`MongoDB Conectado de forma Satisfactoria a: ${connection.connection.host}`);
    } catch (error) {
        console.log("Error conectando a MongoDB:", error);
        process.exit(1);
    }
}