import { useState } from "react";
import NavBar from "../Components/NavBar";

function Community() {
  const [activeTag, setActiveTag] = useState([]);
  
  // --- ADDED STATES & FUNCTIONS FOR MODAL ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    tags: [],
  });

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

  // --- NEWLY ADDED EDIT & DELETE MODAL STATES ---
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState({
    id: null,
    title: "",
    content: "",
    tags: [],
  });

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingPost, setDeletingPost] = useState(null);

  // --- NEWLY ADDED COMMENT MODAL STATES ---
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [selectedPostForComments, setSelectedPostForComments] = useState(null);

  const openEditModal = (post) => {
    setEditingPost({
      id: post.id,
      title: post.title,
      content: post.content,
      tags: [...post.postTags],
    });
    setIsEditModalOpen(true);
  };

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

  const openDeleteModal = (post) => {
    setDeletingPost(post);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeletingPost(null);
  };

  const openCommentModal = (post) => {
    setSelectedPostForComments(post);
    setIsCommentModalOpen(true);
  };

  const closeCommentModal = () => {
    setIsCommentModalOpen(false);
    setSelectedPostForComments(null);
  };
  // ------------------------------------------

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

  // HELPER
  const tagBgColors = {
    Announcement: "bg-[#E9BFD7]",
    Urgent: "bg-[#E2BADB]",
    Vent: "bg-[#DDB7E1]",
    Story: "bg-[#C7B3EE]",
    Help: "bg-[#B9B3F4]",
  };

  // DUMMY DATA
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
      isOwner: true, 
      commentsList: [
        {
          id: 101,
          author: "KindSoul44",
          date: "01/01/2027 at 12:15 AM",
          content: "Thank you for creating this wonderful, safe environment for all of us!",
          likes: 24
        },
        {
          id: 102,
          author: "AnonymousUser",
          date: "01/01/2027 at 12:30 AM",
          content: "This community has honestly helped me get through some of my toughest days lately.",
          likes: 12
        }
      ]
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
      commentsList: [] 
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
        <p className="text-[1.5rem] mt-[-1vh] text-[#5E4A7E] font-medium max-w-[500vh] mx-auto mb-6 opacity-90">
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
                      className={`px-4 py-1 rounded-full text-white text-[1rem] font-semibold ${tagBgColors[tag]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center px-8 py-4 border-t border-gray-300 text-[#766a94] text-[0.9rem] font-medium w-full">
                
                <div className="flex gap-6">
                  <div className="flex items-center gap-1.5 cursor-pointer hover:text-purple-400 transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span>{post.likes}</span>
                  </div>

                  <div 
                    onClick={() => openCommentModal(post)}
                    className="flex items-center gap-1.5 cursor-pointer hover:text-purple-400 transition-colors"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    </svg>
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* Right Side: Edit / Delete (Only show if owner) */}
                {post.isOwner && (
                  <div className="flex gap-4">
                    <button 
                      onClick={() => openEditModal(post)}
                      className="flex items-center gap-1 hover:text-purple-400 transition-colors"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                      Edit
                    </button>
                    <button 
                      onClick={() => openDeleteModal(post)}
                      className="flex items-center gap-1 hover:text-red-400 transition-colors"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                      Delete
                    </button>
                  </div>
                )}

              </div>
            </div>
          ))}

        </div>

        <div className="hidden md:block md:col-span-2 border-l border-gray-500 bg-white relative">

          {/* ADD POST BUTTON */}
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

      </div>

      {/* --- ADD POST POP-UP MODAL CONTAINER --- */}
      {isModalOpen && (
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
                onClick={closeModal} 
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
      )}

      {/* --- EDIT POST POP-UP MODAL CONTAINER --- */}
      {isEditModalOpen && (
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
                value={editingPost.title}
                onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                className="w-full text-[1.4rem] font-bold text-[#766a94] border-b-2 border-purple-100 focus:border-[#C7B3EE] outline-none pb-2 placeholder-purple-200/70 transition-colors bg-transparent"
              />
            </div>

            {/* Input: Discussion Body */}
            <div className="flex flex-col w-full">
              <textarea 
                placeholder="What's on your mind? This is a safe space to share." 
                value={editingPost.content}
                onChange={(e) => setEditingPost({...editingPost, content: e.target.value})}
                className="w-full h-44 text-[1rem] text-[#5E4A7E] border-2 border-purple-500/10 rounded-2xl p-5 focus:border-[#C7B3EE] focus:ring-4 focus:ring-purple-100 outline-none resize-none placeholder-purple-300/80 transition-all bg-[#faf8fc]"
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
                onClick={closeEditModal} 
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
      )}

      {/* --- DELETE CONFIRMATION POP-UP MODAL CONTAINER --- */}
      {isDeleteModalOpen && deletingPost && (
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
                onClick={closeDeleteModal} 
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <span>Delete Post</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ---COMMENTS FEED POP-UP MODAL CONTAINER------------------*/}
      {isCommentModalOpen && selectedPostForComments && (
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
                  <div key={comment.id} className="bg-[#faf8fc] border border-purple-100/60 rounded-2xl p-4 flex flex-col gap-1.5">
                    
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
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <span className="font-semibold">{comment.likes}</span>
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
                placeholder="Write a supportive comment..." 
                className="flex-1 px-5 py-3 text-[0.95rem] text-[#5E4A7E] border-2 border-purple-500/10 rounded-full focus:border-[#C7B3EE] focus:ring-4 focus:ring-purple-100 outline-none transition-all bg-[#faf8fc] font-medium placeholder-purple-300/70"
              />
              <button className="bg-[#766a94] hover:bg-[#61567d] text-white px-6 py-3 rounded-full font-bold text-[0.95rem] transition-all shadow-md shrink-0">
                Send
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Community;