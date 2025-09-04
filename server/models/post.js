// File: server/models/post.js
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // This links to the model defined in auth.js
        required: true
    },
    content: {
        type: String,
        trim: true,
        required: true
    },
    mediaUrl: {
        type: String
    }
}, { 
    timestamps: true
});

export default mongoose.model("Post", postSchema);