import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 7000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';

mongoose.connect(MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});