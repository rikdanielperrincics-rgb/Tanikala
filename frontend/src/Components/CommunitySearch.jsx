function CommunitySearch({ searchQuery, setSearchQuery }) {
    return (
        <div className="relative max-w-2xl mx-auto w-full px-4">
            <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search the community" 
                className="w-full pl-6 pr-12 py-3 rounded-full border border-transparent bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-600 placeholder-purple-300/80 transition-all text-[1rem] font-medium"
            />
            <div className="absolute right-9 top-1/2 -translate-y-1/2 text-purple-400 cursor-pointer hover:text-[#4B3573] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </div>
    )
}
export default CommunitySearch