import CommunitySearch from "./CommunitySearch"
function CommunityBanner({ searchQuery, setSearchQuery }) {
    return (
                <div className="w-full bg-[linear-gradient(90deg,_#e9bfd6_0%,_#d7b3e6_50%,_#b8b3f4_100%)] py-14 px-4 text-center border-b border-gray-100 shrink-0">
            <h1 className="text-[3.5rem] font-extrabold text-[#4B3573] tracking-tight mb-2">
            Connect with the Community
            </h1>
            <p className="text-[1.5rem] mt-[-1vh] text-[#5E4A7E] font-medium max-w-[500vh] mx-auto mb-6 opacity-90">
            Real conversations, zero judgment. This is a place to be heard exactly as you are.
            </p>
            <CommunitySearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
    )
}

export default CommunityBanner
