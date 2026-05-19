import mongoose from "mongoose";
import commentSchema from "./commentModel.js"

const postSchema = new mongoose.Schema({
    author: { type: String, required: true },
    date: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    postTags: { type: [String], default: [] },
    likedBy: { type: [String], default: [] },
    email: { type: String, required: true },
    commentsList: [commentSchema] 
}
)

export default mongoose.model('Posts', postSchema);