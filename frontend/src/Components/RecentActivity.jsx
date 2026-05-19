function RecentActivity() {
    return (
        <div className="mt-16 max-w-7xl mx-auto bg-white rounded-[2rem] p-6 md:p-12 shadow-xl border border-purple-100/50">
            <h2 className="text-[2.2rem] font-extrabold text-[#4B3573] tracking-tight mb-6">
                Recent Activity
            </h2>
            
            <div className="UserPosts">
                <div className="w-full border-t border-b border-gray-300 py-6 flex flex-col">
                    
                    <div className="px-2 md:px-8">
                        {/* Post Header: Profile & Title */}
                        <div className="flex items-center gap-4 mb-4 w-full">
                            <div className="w-full">
                                <div className="flex justify-between items-center text-[0.85rem] text-[#766a94] mb-0.5 font-medium">
                                    <span>By: Username</span>
                                    <span>05/20/2026 at 2:00 PM</span>
                                </div>
                                <p className="text-[1.6rem] font-bold text-[#766a94] leading-tight tracking-tight">
                                    This is a sample post content.
                                </p>
                            </div>
                        </div>

                        {/* Post Body Content */}
                        <div className="text-[1rem] text-[#5E4A7E] opacity-90 mb-5 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>

                        {/* Tags */}
                        <div className="tags flex flex-wrap gap-2 mb-6">
                            <span className="px-4 py-1 rounded-full text-white text-[1rem] font-semibold bg-[#E9BFD7]">
                                Announcement
                            </span>

                            <span className="px-4 py-1 rounded-full text-white text-[1rem] font-semibold bg-[#C7B3EE]">
                                Vent
                            </span>

                            <span className="px-4 py-1 rounded-full text-white text-[1rem] font-semibold bg-[#B9B3F4]">
                                Help
                            </span>
                        </div>
                    </div>

                    {/* Actions Footer */}
                    <div className="flex gap-6 px-2 md:px-8 py-4 border-t border-gray-300 text-[#766a94] text-[0.9rem] font-medium w-full mt-2">
                        <button className="flex items-center gap-1.5 cursor-pointer hover:text-purple-400 transition-colors bg-transparent border-none">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            Like
                        </button>

                        <button className="flex items-center gap-1.5 cursor-pointer hover:text-purple-400 transition-colors bg-transparent border-none">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                            </svg>
                            Comment
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default RecentActivity;