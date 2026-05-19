import axios from "axios";
import e from "cors";
import { useState } from "react";
import { toast } from "react-toastify";

function AddCommunityPostModal({ tags, tagBgColors, userEmail, userName, setIsModalOpen, refreshPosts}) {
    const [newPost, setNewPost] = useState({
        title: "",
        content: "",
        tags: [],
    });
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const toggleNewPostTag = (tagName) => {
    if (newPost.tags.includes(tagName)) {
        setNewPost({ ...newPost, tags: newPost.tags.filter((t) => t !== tagName) });
    } else {
        setNewPost({ ...newPost, tags: [...newPost.tags, tagName] });
    }
    };
    const closeModal = () => {
    setIsModalOpen(false);
    setNewPost({ title: "", content: "", tags: [] });
    };
    function handlePostSubmit() {
        try {
            if (!newPost.title.trim() || !newPost.content.trim()) {
                toast.error("Please fill in both the title and content fields.");
                return;
            } else if (newPost.tags.length === 0) {
                toast.error("Please select at least one tag for your post.");
                return;
            }
            const newPostTemp = {
            author: userName || "Unknown User",
            date: new Date().toLocaleString(),
            title: newPost.title,
            content: newPost.content,
            email: userEmail || "Unknown User",
            postTags: newPost.tags || [],
            likedBy: [],
            commentsList: []
            };

            const response = axios.post(
            "http://localhost:8000/api/post",
            newPostTemp
            );
            
            toast.success("Post created successfully!");
            
            setTimeout(() => {
                closeModal();
                setTitle("");
                setContent("");
                setSelectedTags([]);
                refreshPosts();
            }, 1000);
        } catch (error) {
            console.log("Error submitting post:", error.response?.data || error.message);
        }
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4B3573]/20 backdrop-blur-sm transition-all duration-300">
            
            {/* Modal Card */}
            <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl p-8 mx-4 flex flex-col gap-6 transform scale-100 transition-all border border-purple-100">
                
                {/* Header / Title Section */}
                <div className="flex justify-between items-center">
                <h2 className="text-[2.2rem] font-extrabold text-[#4B3573] tracking-tight">
                    Create New Post
                </h2>
                <button 
                    onClick={closeModal}
                    className="text-gray-400 hover:text-red-400 transition-colors p-1.5 rounded-full hover:bg-gray-50"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                </div>

                {/* Input: Title */}
                <div className="flex flex-col w-full">
                <input 
                    type="text" 
                    placeholder="Title of Discussion" 
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    className="w-full text-[1.4rem] font-bold text-[#766a94] border-b-2 border-purple-100 focus:border-[#C7B3EE] outline-none pb-2 placeholder-purple-200/70 transition-colors bg-transparent"
                />
                </div>

                {/* Input: Discussion Body */}
                <div className="flex flex-col w-full">
                <textarea 
                    placeholder="What's on your mind? This is a safe space to share." 
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    className="w-full h-44 text-[1rem] text-[#5E4A7E] border-2 border-purple-500/10 rounded-2xl p-5 focus:border-[#C7B3EE] focus:ring-4 focus:ring-purple-100 outline-none resize-none placeholder-purple-300/80 transition-all bg-[#faf8fc]"
                ></textarea>
                </div>

                {/* Togglable Tag Selector */}
                <div>
                <p className="text-[#766a94] font-bold mb-3 text-[0.95rem] tracking-wide">Add Tags to your post:</p>
                <div className="flex gap-2 flex-wrap">
                    {tags.map((tag) => {
                    const isSelected = newPost.tags.includes(tag.name);
                    return (
                        <button
                        key={tag.name}
                        onClick={() => toggleNewPostTag(tag.name)}
                        className={`px-5 py-2 rounded-full text-[0.85rem] font-bold transition-all duration-200 ${
                            isSelected 
                            ? `${tagBgColors[tag.name]} text-white shadow-md scale-[1.03]` 
                            : 'bg-gray-100 text-gray-400 hover:bg-gray-200/80'
                        }`}
                        >
                        {tag.name}
                        </button>
                    );
                    })}
                </div>
                </div>

                {/* Actions Footer */}
                <div className="flex justify-end items-center gap-4 mt-2 pt-4 border-t border-gray-100">
                <button 
                    onClick={closeModal}
                    className="px-6 py-2.5 rounded-full font-bold text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors"
                >
                    Cancel
                </button>
                <button 
                    onClick={handlePostSubmit} 
                    className="bg-[#766a94] hover:bg-[#61567d] text-white px-8 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                    <span>Post Discussion</span>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                </button>
                </div>

            </div>
        </div>
    )
}

export default AddCommunityPostModal
