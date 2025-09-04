// File: client/src/pages/SocialFeed/SocialFeed.js
import React from 'react';
import PostForm from '../../components/PostForm';   
import Feed from '../../components/Feed';       
import LeftSidebar from '../../Comnponent/Leftsidebar/Leftsidebar'; 

const SocialFeed = () => {
  return (
    <div className="home-container-1">
        <LeftSidebar />
        <div className="home-container-2">
            <h1>CodeQuest Social Feed</h1>
            <p>Connect with other users by sharing posts.</p>
            <PostForm />
            <hr />
            <Feed />
        </div>
    </div>
  );
};

export default SocialFeed;