// File: server/routes/posts.js
import express from "express";
import { createPost, getFeed } from '../controller/posts.js';

const router = express.Router();

// URL will be POST /api/posts/
router.post("/", createPost);

// URL will be GET /api/posts/feed
router.get("/feed", getFeed);

export default router;