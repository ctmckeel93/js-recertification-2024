import {connect} from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;


async function dbConnect() {

    try {

        await connect(MONGODB_URI, {
            dbName: "books"
        })
        console.log("Successfully pinged your deployment! Connected to MongoDB");

    } catch (error){
        console.log(error);
        throw error;
    }
}

export default dbConnect;