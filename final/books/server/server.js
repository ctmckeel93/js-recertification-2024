import express from 'express';
import  cors from 'cors';
import router from './routes/books.routes.js';

import dotenv from 'dotenv';
dotenv.config();

import db from  "./config/mongoose.config.js";
db();


const app = express();
const port = process.env.port

app.use(express.json(), cors());
app.use("/api", router)

app.listen(port, () => console.log(`Listening on port ${port}`));