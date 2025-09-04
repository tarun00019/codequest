// Imports 
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import 'dotenv/config'; // This one line handles loading your .env file

// routes
import userroutes from "./routes/user.js";
import questionroutes from "./routes/question.js";
import answerroutes from "./routes/answer.js";
import postRoutes from './routes/posts.js';

// --- App Configuration ---
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// --- API Routes ---
app.use("/user", userroutes);
app.use('/questions', questionroutes);
app.use('/answer', answerroutes);
app.use('/api/posts', postRoutes);

// --- Default Route ---
app.get('/', (req, res) => {
    res.send("Codequest is running perfect");
});

// --- Server and Database Connection ---
const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.MONGODB_URL; // Make sure this name matches your .env file

mongoose.connect(DATABASE_URL)
    .then(() => app.listen(PORT, () => { console.log(`server running on port ${PORT}`); }))
    .catch((err) => console.log(err.message));