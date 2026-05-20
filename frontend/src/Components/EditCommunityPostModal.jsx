import { toast } from "react-toastify";
import axios from "axios";

function EditCommunityPostModal({ tags, tagBgColors, setIsEditModalOpen, editingPost, setEditingPost }) {
    const toggleEditingPostTag = (tagName) => {
        if (editingPost.tags.includes(tagName)) {
        setEditingPost({ ...editingPost, tags: editingPost.tags.filter((t) => t !== tagName) });
        } else {
        setEditingPost({ ...editingPost, tags: [...editingPost.tags, tagName] });
        }
    };
    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setEditingPost({ id: null, title: "", content: "", tags: [] });
    };
    const handleEditSubmit = async () => {
    try {

        if (!editingPost.title.trim() || !editingPost.content.trim()) {
        toast.error("Please fill in both the title and content fields.");
        return;
        }

        if (editingPost.tags.length === 0) {
        toast.error("Please select at least one tag for your post.");
        return;
        }

        const updatedPost = {
        title: editingPost.title,
        content: editingPost.content,
        postTags: editingPost.tags
        };

        await axios.put(
        `http://localhost:8000/api/post/update/${editingPost._id}`,
        updatedPost
        );

        toast.success("Post updated successfully!");

        setTimeout(() => {
        closeEditModal();
        window.location.reload();
        }, 1000);

    } catch (error) {

        console.log(
        "Error updating post:",
        error.response?.data || error.message
        );

        toast.error("Failed to update post");
    }
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4B3573]/20 backdrop-blur-sm transition-all duration-300">
            
            {/* Modal Card */}
            <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl p-8 mx-4 flex flex-col gap-6 transform scale-100 transition-all border border-purple-100">
                
                {/* Header / Title Section */}
                <div className="flex justify-between items-center">
                <h2 className="text-[2.2rem] font-extrabold text-[#4B3573] tracking-tight">
                    Edit Discussion
                </h2>
                <button 
                    onClick={closeEditModal}
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
                    value={editingPost.title || ""}
                    onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                    className="w-full text-[1.4rem] font-bold text-[#766a94] border-b-2 border-purple-100 focus:border-[#C7B3EE] outline-none pb-2 placeholder-purple-200/70 transition-colors bg-transparent"
                    maxLength={64}
                />
                </div>

                {/* Input: Discussion Body */}
                <div className="flex flex-col w-full">
                <textarea 
                    placeholder="What's on your mind? This is a safe space to share." 
                    value={editingPost.content}
                    onChange={(e) => setEditingPost({...editingPost, content: e.target.value})}
                    className="w-full h-44 text-[1rem] text-[#5E4A7E] border-2 border-purple-500/10 rounded-2xl p-5 focus:border-[#C7B3EE] focus:ring-4 focus:ring-purple-100 outline-none resize-none placeholder-purple-300/80 transition-all bg-[#faf8fc]"
                    maxLength={1024}
                ></textarea>
                </div>

                {/* Togglable Tag Selector */}
                <div>
                <p className="text-[#766a94] font-bold mb-3 text-[0.95rem] tracking-wide">Modify Tags:</p>
                <div className="flex gap-2 flex-wrap">
                    {tags.map((tag) => {
                    const isSelected = editingPost.tags.includes(tag.name);
                    return (
                        <button
                        key={tag.name}
                        onClick={() => toggleEditingPostTag(tag.name)}
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
                    onClick={closeEditModal}
                    className="px-6 py-2.5 rounded-full font-bold text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors"
                >
                    Cancel
                </button>
                <button 
                    onClick={handleEditSubmit} 
                    className="bg-[#766a94] hover:bg-[#61567d] text-white px-8 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                    <span>Save Changes</span>
                    <svg className="w-5 h-5 fill-none stroke-white" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </button>
                </div>

            </div>
        </div>
    )
}

export default EditCommunityPostModal
