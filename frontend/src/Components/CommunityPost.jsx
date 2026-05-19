import {useState} from "react";
import axios from 'axios';

function CommunityPost({ post, openCommentModal, openDeleteModal, tagBgColors, userEmail, setIsEditModalOpen, setEditingPost, refreshPosts, setSelectedPostForComments}) {


    const openEditModal = (post) => {
        setEditingPost({
        _id: post._id,
        title: post.title,
        content: post.content,
        tags: [...post.postTags],
        });
        setIsEditModalOpen(true);
    };

    const handleLike = async (post) => {
    try {
        const isAlreadyLiked = post.likedBy.includes(userEmail);

        const updatedLikedBy = isAlreadyLiked
        ? post.likedBy.filter(email => email !== userEmail)
        : [...post.likedBy, userEmail];

        await axios.put(`http://localhost:8000/api/post/like/${post._id}`, {
        likedBy: updatedLikedBy, email: userEmail
        });

        refreshPosts();

    } catch (error) {
        console.log("Error liking post:", error.response?.data || error.message);
    }
    };

    return (
                <div key={post._id} className="w-full border-b border-gray-300 pt-6 flex flex-col">
                
                <div className="px-8">
                    <div className="flex justify-between items-center text-[0.85rem] text-[#766a94] mb-2 font-medium">
                    <span>By: {post.author}</span>
                    <span>{post.date}</span>
                    </div>

                    <h2 className="text-[1.8rem] font-bold text-[#766a94] mb-3 leading-tight tracking-tight">
                    {post.title}
                    </h2>

                    <p className="text-[1rem] text-[#5E4A7E] opacity-90 mb-4 leading-relaxed">
                    {post.content}
                    </p>

                    <div className="flex gap-2 mb-6">
                    {post.postTags.map(tag => (
                        <span 
                        key={tag} 
                        className={`px-4 py-1 rounded-full text-white text-[1rem] font-semibold ${tagBgColors[tag]}`}
                        >
                        {tag}
                        </span>
                    ))}
                    </div>
                </div>

                <div className="flex justify-between items-center px-8 py-4 border-t border-gray-300 text-[#766a94] text-[0.9rem] font-medium w-full">
                    
                    <div className="flex gap-6">
                    <div className="flex items-center gap-1.5 cursor-pointer hover:text-purple-400 transition-colors">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" onClick={()=>handleLike(post)}/>
                        </svg>
                        <span>{post.likedBy.length}</span>
                    </div>

                    <div 
                        onClick={() => openCommentModal(post)}
                        className="flex items-center gap-1.5 cursor-pointer hover:text-purple-400 transition-colors"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                        </svg>
                        <span>{post.commentsList.length}</span>
                    </div>
                    </div>

                    {post.email === userEmail && (
                    <div className="flex gap-4">
                        <button 
                        onClick={() => openEditModal(post)}
                        className="flex items-center gap-1 hover:text-purple-400 transition-colors"
                        >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                        Edit
                        </button>
                        <button 
                        onClick={() => openDeleteModal(post)}
                        className="flex items-center gap-1 hover:text-red-400 transition-colors"
                        >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                        Delete
                        </button>
                    </div>
                    )}

                </div>
                </div>
    )
}

export default CommunityPost
