// File: server/controller/posts.js
import Post from '../models/post.js';
import User from '../models/auth.js'; // We import the user model from auth.js

export const createPost = async (req, res) => {
    // We will use req.userId from the auth middleware later.
    // For now, let's imagine it's sent in the body for testing.
    const { userId, content } = req.body;
    
    if (!userId || !content) {
        return res.status(400).json({ message: 'User ID and content are required.' });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const friendCount = user.friends ? user.friends.length : 0;
        if (friendCount === 0) {
            return res.status(403).json({ message: 'You need at least one friend to post.' });
        }

        const newPost = new Post({ content, user: userId });
        await newPost.save();
        res.status(201).json(newPost); // 201 means "Created"

    } catch (error) {
        res.status(500).json({ message: "Something went wrong...", error: error.message });
    }
};

export const getFeed = async (req, res) => {
    try {
        const posts = await Post.find()
            .populate('user', ['name']) // Use 'name' since your model has 'name' not 'username'
            .sort({ createdAt: -1 }); // Show newest posts first
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};