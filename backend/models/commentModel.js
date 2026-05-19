import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    author: String,
    date: String,
    content: String,
    likedBy: [String]  
});

export default commentSchema; 