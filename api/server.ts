import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route';
import authRouter from './routes/auth.route';

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log(err)
})

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error!";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
})