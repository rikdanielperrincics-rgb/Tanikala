import NavBar from "../Components/NavBar";

function Community() {
  return (
    <div className="h-screen mt-[9vh] w-full flex flex-col bg-white">
      <NavBar />
      
      {/* 2. BANNER HERO SECTION - The gradient moves here so it stays contained at the top */}
      <div className="w-full bg-[linear-gradient(90deg,_#e9bfd6_0%,_#d7b3e6_50%,_#b8b3f4_100%)] py-14 px-4 text-center border-b border-gray-100">
        <h1 className="text-[3.5rem] font-extrabold text-[#4B3573] tracking-tight mb-2">
          Connect with the Community
        </h1>
        <p className="text-[1.5rem] mt-[-1vh] text-[#5E4A7E] font-medium max-w-500vh mx-auto mb-6 opacity-90">
          Real conversations, zero judgment. This is a place to be heard exactly as you are.
        </p>
        
        {/* SEARCH BAR */}
        <div className="relative max-w-2xl mx-auto w-full px-4">
          <input 
            type="text" 
            placeholder="Search the community" 
            className="w-full pl-6 pr-12 py-3 rounded-full border border-transparent bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-600 placeholder-purple-300/80 transition-all text-[1rem] font-medium"
          />
            <div className="absolute right-9 top-1/2 -translate-y-1/2 text-purple-400 cursor-pointer hover:text-[#4B3573] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
          </div>
        </div>
      </div>

      {/* 3. FILTER NAVIGATION TABS - Now touches both edges seamlessly */}
      <div className="w-full bg-white border-b border-gray-200 py-3.5 flex justify-center items-center gap-8 md:gap-16 text-[1.2rem] font-semibold text-gray-400 tracking-wide">
        <span className="hover:text-[#4B3573] mr-[3vh] cursor-pointer transition-colors">Announcement</span>
        <span className="hover:text-[#4B3573] mr-[3vh]  cursor-pointer transition-colors">Urgent</span>
        <span className="hover:text-[#4B3573] mr-[3vh] cursor-pointer transition-colors">Vent</span>
        <span className="hover:text-[#4B3573] cursor-pointer transition-colors">Story</span>
        <span className="hover:text-[#4B3573] ml-[3vh] cursor-pointer transition-colors">Help</span>
      </div>

      {/* POST SPACE */}
      <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-12 bg-white">
        
        {/* Left Spacing */}
        <div className="hidden md:block md:col-span-2 border-r border-gray-200 bg-white"></div>

        {/* CENTER/MAIN Panel */}
        <div className="col-span-12 md:col-span-8 flex items-center justify-center px-4 bg-white min-h-[350px]">
          <p className="text-[2rem] text-gray-400 font-light tracking-wide text-center selection:bg-purple-100">
            Hmm.. no one's here yet...
          </p>
        </div>

        {/* Right Panel Spacing with Sticky Button Context */}
        <div className="hidden md:block md:col-span-2 border-l border-gray-200 bg-white relative">

          {/* ADD POST BUTTON */}
          <button className="fixed bottom-6 right-6 bg-[#766a94] hover:bg-[#61567d] text-white font-bold px-5 py-3 rounded-full shadow-lg flex items-center gap-1.5 transition-all hover:scale-[1.02]">
            <svg className="w-5 h-5 stroke-white" fill="none" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className="text-20px tracking-wide">Add Post</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Community;