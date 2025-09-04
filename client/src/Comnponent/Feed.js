// File: client/src/components/Feed.js
import React, { useState, useEffect } from 'react';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://codequest-backend-xotm.onrender.com/api/posts/feed');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="feed-container" style={{ padding: '20px' }}>
            <h2>Public Feed</h2>
            {posts.length === 0 ? (
                <p>No posts yet. Be the first!</p>
            ) : (
                posts.map((post) => (
                    <div key={post._id} className="post" style={{ border: '1px solid #eee', padding: '15px', marginBottom: '15px', borderRadius: '8px' }}>
                        <h4>{post.user ? post.user.name : 'Unknown User'}</h4>
                        <p>{post.content}</p>
                        <small>{new Date(post.createdAt).toLocaleString()}</small>
                    </div>
                ))
            )}
        </div>
    );
};

export default Feed;