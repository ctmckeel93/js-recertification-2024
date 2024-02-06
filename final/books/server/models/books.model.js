import {model, Schema} from 'mongoose';

const BookSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [2, "Title must be at least 2 characters"],
        maxLength: [255, "Title cannot exceed 255 characters"]
    },
    author: {
        type: String,
        required: [true, "Author is required"],
        minLength: [2, "Author must be at least 5 characters"],
        maxLength: [255, "Author cannot exceed 255 characters"]

    },
    pages: {
        type: Number,
        required: [true, "Pages is a required field"],
        min: [1, "Must include at least 1 page"]
    },
    isAvailable: {
        type: Boolean,
        default: false
    }
    
},
{timestamps: true}

);

const Book = model("book", BookSchema);
export default Book;