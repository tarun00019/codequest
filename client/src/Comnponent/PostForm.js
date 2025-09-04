// File: client/src/components/PostForm.js
import React, { useState } from 'react';

const PostForm = () => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // IMPORTANT: Replace this with a real user's _id from your database for testing.
        // You can find this ID using a database tool like MongoDB Compass.
        const userId = 'PASTE_A_REAL_USER_ID_HERE';

        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, content }),
            });

            if (response.ok) {
                setContent(''); // Clear the text box
                alert('Post successful!');
                window.location.reload(); // Reload to see the new post
            } else {
                const errorData = await response.json();
                alert(`Failed to post: ${errorData.message}`);
            }
        } catch (error) {
            alert('An error occurred while posting.');
        }
    };

    return (
        <div className="post-form-container" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px' }}>
            <h2>Create a Post</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    rows="4"
                    placeholder="What's on your mind?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                />
                <button type="submit">Post</button>
            </form>
        </div>
    );
};

export default PostForm;