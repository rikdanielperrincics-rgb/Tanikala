import axios from "axios";
import { toast } from "react-toastify";
import { use, useState } from "react";

function CommentsModal({ selectedPostForComments, closeCommentModal, userName, refreshPosts, userEmail}) {
    const [commentText, setCommentText] = useState("");
    const handleComment = async (postId) => {
    try {
        if (!commentText.trim()) {
        toast.error("Comment cannot be empty");
        return;
        }

        const response = await axios.put(
        `http://localhost:8000/api/post/comment/${selectedPostForComments._id}`,
        {
            author: userName,
            content: commentText
        }
        );

        toast.success("Comment added!");

        refreshPosts();
        closeCommentModal();

    } catch (error) {
        console.log(
        "Error adding comment:",
        error.response?.data || error.message
        );

        toast.error("Failed to add comment");
    }
    };

    const handleLikeComment = async (comment) => {
    await axios.put(
        `http://localhost:8000/api/post/${selectedPostForComments._id}/comment/${comment._id}/like`,
        { email: userEmail }
        );
        refreshPosts();
        closeCommentModal();
    };
        
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4B3573]/20 backdrop-blur-sm transition-all duration-300">
            
            {/* Modal Card */}
            <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl p-8 mx-4 flex flex-col gap-5 transform scale-100 transition-all border border-purple-100">
                
                {/* Header section */}
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <div className="flex flex-col max-w-[85%]">
                    <span className="text-[0.8rem] text-purple-400 font-bold tracking-wide uppercase">Discussion Feed</span>
                    <h2 className="text-[1.6rem] font-extrabold text-[#4B3573] tracking-tight truncate">
                    Comments for: {selectedPostForComments.title}
                    </h2>
                </div>
                <button 
                    onClick={closeCommentModal}
                    className="text-gray-400 hover:text-red-400 transition-colors p-1.5 rounded-full hover:bg-gray-50 shrink-0"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                </div>

                {/* Comments Stream / Area */}
                <div className="flex flex-col gap-4 max-h-[38vh] overflow-y-auto pr-2">
                {selectedPostForComments.commentsList && selectedPostForComments.commentsList.length > 0 ? (
                    selectedPostForComments.commentsList.map((comment) => (
                    <div key={comment._id} className="bg-[#faf8fc] border border-purple-100/60 rounded-2xl p-4 flex flex-col gap-1.5">
                        
                        {/* Comment Subheader */}
                        <div className="flex justify-between items-center text-[0.8rem] text-[#766a94] font-medium">
                        <span className="font-bold">By: {comment.author}</span>
                        <span>{comment.date}</span>
                        </div>

                        {/* Comment Copy Text */}
                        <p className="text-[0.95rem] text-[#5E4A7E] opacity-90 leading-relaxed">
                        {comment.content}
                        </p>

                        {/* Heart */}
                        <div className="flex justify-end items-center mt-1">
                        <div className="flex items-center gap-1 text-[#766a94] text-[0.85rem] cursor-pointer hover:text-purple-400 transition-colors group">
                            <svg className="w-4 h-4 fill-none stroke-current group-hover:fill-purple-300 transition-all" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"onClick={()=>handleLikeComment(comment)} />
                            </svg>
                            <span className="font-semibold">{comment.likedBy.length}</span>
                        </div>
                        </div>

                    </div>
                    ))
                ) : (
                    /* "wehn theres no comment*/
                    <div className="text-center py-12 text-gray-400 font-semibold text-[1.1rem] tracking-wide italic">
                    Be the first to comment
                    </div>
                )}
                </div>

                {/* Fast Input Bottom Bar Row */}
                <div className="flex gap-3 items-center border-t border-gray-100 pt-4 mt-1">
                <input 
                    type="text" 
                    value={commentText}
                    onChange={(e)=>setCommentText(e.target.value)}
                    placeholder="Write a supportive comment..." 
                    className="flex-1 px-5 py-3 text-[0.95rem] text-[#5E4A7E] border-2 border-purple-500/10 rounded-full focus:border-[#C7B3EE] focus:ring-4 focus:ring-purple-100 outline-none transition-all bg-[#faf8fc] font-medium placeholder-purple-300/70"
                />
                <button className="bg-[#766a94] hover:bg-[#61567d] text-white px-6 py-3 rounded-full font-bold text-[0.95rem] transition-all shadow-md shrink-0" onClick={()=>handleComment()}>
                    Send
                </button>
                </div>

            </div>
        </div>
    )
}

export default CommentsModal
