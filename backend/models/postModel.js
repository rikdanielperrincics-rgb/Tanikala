import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {type: String, unique: true},
    email: {
        type: String,
        unique: true
    },
    password: String,
    googleId: String
})


export default mongoose.model('Users', userSchema);