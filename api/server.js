import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import categoryRouter from './routes/category.route.js';
import { trim } from './middleware/trim.middleware.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200,
}));
app.use(trim);
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World!');
});


// CONNECTION TO MONGODB DATABASE REMOTELY
app.listen(port, () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log(err)
    });

    return console.log(`Express is listening at http://localhost:${port}`);
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/me', authRouter);
app.use('/api/category', categoryRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error!";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});