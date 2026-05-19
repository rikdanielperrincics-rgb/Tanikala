function AddCommunityPost({ setIsModalOpen }) {
    return (
        <div className="hidden md:block md:col-span-2 border-l border-gray-500 bg-white relative">
            <button 
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-12 right-14 bg-[#766a94] hover:bg-[#61567d] text-white font-bold px-6 py-3.5 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
                <svg className="w-6 h-6 stroke-white" fill="none" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span className="text-[1.2rem] tracking-wide">Add Post</span>
            </button>
        </div>
    )
}

export default AddCommunityPost
