import axios from "axios";
import { toast } from "react-toastify";

function DeleteCommunityPostModal({ deletingPost, closeDeleteModal, refreshPosts }) {
    const handleDeletePost = async (postId) => {
        try {
            await axios.delete(`http://localhost:8000/api/post/delete/${postId}`);

            toast.success("Post deleted successfully!");

            refreshPosts();

            setTimeout(() => {
            closeDeleteModal(); 
            }, 500);

        } catch (error) {


            toast.error("Failed to delete post");
        }
        };
    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4B3573]/20 backdrop-blur-sm transition-all duration-300">
            
            {/* Modal Card */}
            <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md p-8 mx-4 flex flex-col gap-5 transform scale-100 transition-all border border-purple-100">
                
                {/* Warning Header */}
                <div className="flex flex-col gap-2 text-center md:text-left">
                <h2 className="text-[1.8rem] font-extrabold text-[#4B3573] tracking-tight">
                    Delete Discussion?
                </h2>
                <p className="text-[1rem] text-[#5E4A7E] opacity-90 leading-relaxed">
                    Are you sure you want to permanently delete <span className="font-bold text-[#766a94]">"{deletingPost.title}"</span>? This process cannot be undone.
                </p>
                </div>

                {/* Actions Footer */}
                <div className="flex justify-end items-center gap-3 mt-2 pt-2">
                <button 
                    onClick={closeDeleteModal}
                    className="px-5 py-2.5 rounded-full font-bold text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors"
                >
                    Keep Post
                </button>
                <button 
                    onClick={() => handleDeletePost(deletingPost._id)} 
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                    <span>Delete Post</span>
                </button>
                </div>

            </div>
        </div>
    )
}

export default DeleteCommunityPostModal
