import { useState } from "react";
import NavBar from "../Components/NavBar";

function Community() {
  const [activeTag, setActiveTag] = useState([]);

  const toggleTag = (tagName) => {
    if (activeTag.includes(tagName)) {
      setActiveTag(activeTag.filter((t) => t !== tagName));
    } else {
      setActiveTag([...activeTag, tagName]);
    }
  };

  const tags = [
    { name: "Announcement", activeColor: "text-[#E9BFD7]", hoverColor: "hover:text-[#E9BFD7]" },
    { name: "Urgent", activeColor: "text-[#E2BADB]", hoverColor: "hover:text-[#E2BADB]" },
    { name: "Vent", activeColor: "text-[#DDB7E1]", hoverColor: "hover:text-[#DDB7E1]" },
    { name: "Story", activeColor: "text-[#C7B3EE]", hoverColor: "hover:text-[#C7B3EE]" },
    { name: "Help", activeColor: "text-[#B9B3F4]", hoverColor: "hover:text-[#B9B3F4]" },
  ];

  // HELPER: Maps the tag name to the specific background color for the pill badges
  const tagBgColors = {
    Announcement: "bg-[#E9BFD7]",
    Urgent: "bg-[#E2BADB]",
    Vent: "bg-[#DDB7E1]",
    Story: "bg-[#C7B3EE]",
    Help: "bg-[#B9B3F4]",
  };

  // DUMMY DATA: Your mock posts based on the screenshot
  const dummyPosts = [
    {
      id: 1,
      author: "Username",
      date: "01/01/2027 at 12:00 AM",
      title: "Title of Discussion",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      postTags: ["Announcement", "Urgent", "Vent", "Story", "Help"],
      likes: 999,
      comments: 999,
      isOwner: true, // Used to show Edit/Delete buttons
    },
    {
      id: 2,
      author: "BatoDelaRoses",
      date: "05/15/2027 at 3:36 PM",
      title: "Everyone hates me, I miss my Papa D.",
      content: "Kapag wala ako rito nagtatanong kayo kung nasan ako tapos kapag nandito ako nagtatanong kayo bakit ako nandito. Ano ba gusto nyo huhuhuhuu I’m so sad... I miss my Papa Digong so much please come back home papa, everyone’s ganging up on me here :(",
      postTags: ["Vent"],
      likes: 0,
      comments: 12,
      isOwner: false,
    }
  ];

  return (
    <div className="h-screen mt-[9vh] w-full flex flex-col bg-white">
      <NavBar />
      
      {/* BANNER HERO SECTION */}
      <div className="w-full bg-[linear-gradient(90deg,_#e9bfd6_0%,_#d7b3e6_50%,_#b8b3f4_100%)] py-14 px-4 text-center border-b border-gray-100 shrink-0">
        <h1 className="text-[3.5rem] font-extrabold text-[#4B3573] tracking-tight mb-2">
          Connect with the Community
        </h1>
        <p className="text-[1.5rem] mt-[-1vh] text-[#5E4A7E] font-medium max-w-2xl mx-auto mb-6 opacity-90">
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

      {/* FILTER NAVIGATION TABS */}
      <div className="w-full bg-white border-b border-gray-500 py-3 flex justify-center items-center gap-8 md:gap-16 text-[1.2rem] font-semibold text-gray-400 tracking-wide shrink-0">
        {tags.map((tag) => (
          <span
            key={tag.name}
            onClick={() => toggleTag(tag.name)}
            className={`
              cursor-pointer transition-all duration-300 
              hover:underline underline-offset-[15px] decoration-[4px]
              ${tag.hoverColor} 
              ${
                activeTag.includes(tag.name)
                  ? `${tag.activeColor} underline` 
                  : "text-gray-400"            
              }
            `}
          >
            {tag.name}
          </span>
        ))}
      </div>

      {/* POST SPACE */}
      <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-12 bg-white overflow-hidden">
        
        {/* Left Spacing */}
        <div className="hidden md:block md:col-span-2 border-r border-gray-500 bg-white"></div>

        {/* CENTER/MAIN Panel */}
        <div className="col-span-12 md:col-span-8 flex flex-col bg-white overflow-y-auto">
          
          {/* DUMMY POSTS FEED */}
          {dummyPosts.map((post) => (
            <div key={post.id} className="w-full border-b border-gray-300 pt-6 flex flex-col">
              
              <div className="px-8">
                {/* Header: Author & Date */}
                <div className="flex justify-between items-center text-[0.85rem] text-[#766a94] mb-2 font-medium">
                  <span>By: {post.author}</span>
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h2 className="text-[1.8rem] font-bold text-[#766a94] mb-3 leading-tight tracking-tight">
                  {post.title}
                </h2>

                {/* Body Content */}
                <p className="text-[1rem] text-[#5E4A7E] opacity-90 mb-4 leading-relaxed">
                  {post.content}
                </p>

                {/* Colored Tag Pills */}
                <div className="flex gap-2 mb-6">
                  {post.postTags.map(tag => (
                    <span 
                      key={tag} 
                      className={`px-4 py-1 rounded-full text-white text-[0.8rem] font-semibold ${tagBgColors[tag]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-4 border-t border-gray-300 text-[#766a94] text-[0.9rem] font-medium w-full">
                
                {/* Left Side: Interactions */}
                <div className="flex gap-6">
                  <div className="flex items-center gap-1.5 cursor-pointer hover:text-purple-400 transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 cursor-pointer hover:text-purple-400 transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    </svg>
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* Right Side: Edit / Delete (Only show if owner) */}
                {post.isOwner && (
                  <div className="flex gap-4">
                    <button className="flex items-center gap-1 hover:text-purple-400 transition-colors">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                      Edit
                    </button>
                    <button className="flex items-center gap-1 hover:text-red-400 transition-colors">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                      Delete
                    </button>
                  </div>
                )}

              </div>
            </div>
          ))}

        </div>

        {/* Right Panel Spacing with Sticky Button Context */}
        <div className="hidden md:block md:col-span-2 border-l border-gray-500 bg-white relative">

          {/* ADD POST BUTTON */}
          <button className="fixed bottom-12 right-14 bg-[#766a94] hover:bg-[#61567d] text-white font-bold px-6 py-3.5 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-[1.02]">
            <svg className="w-6 h-6 stroke-white" fill="none" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className="text-[1.2rem] tracking-wide">Add Post</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Community;