// File: server/models/auth.js

import mongoose from "mongoose";

const userschema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    about: { type: String },
    tags: { type: [String] },
    joinedon: { type: Date, default: Date.now },

    // ADD THIS BLOCK for the friends list
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

export default mongoose.model("User", userschema)