import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/mongoose.config.js/';
const app = express();
const port = process.env.port;

app.use(express.json(), cors());
dotenv.config();
db(); 
app.listen(port, () => console.log(`Listening on port ${port}`));





