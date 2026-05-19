import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import CommunityBanner from "../Components/CommunityBanner";
import FilterTabs from "../Components/FilterTabs";
import CommunityPosts from "../Components/CommunityPosts";
import AddCommunityPost from "../Components/AddCommunityPost";
import AddCommunityPostModal from "../Components/AddCommunityPostModal";
import EditCommunityPostModal from "../Components/EditCommunityPostModal";
import DeleteCommunityPostModal from "../Components/DeleteCommunityPostModal";
import CommentsModal from "../Components/CommentsModal";

function Community() {
  const [activeTag, setActiveTag] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]); 
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");

  const refreshPosts = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/posts");
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
    }
  };

  useEffect(() => {
    const getInitial = async () => {
      refreshPosts();
      const token = localStorage.getItem('token');
        const email = token
        ? JSON.parse(atob(token.split(".")[1])).email
        : null;
        setUserEmail(email);
        const name = token        ? JSON.parse(atob(token.split(".")[1])).name
        : null;
        setUserName(name);  
    };

    getInitial();
  }, []);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState({
    _id:"",
    title: "",
    content: "",
    tags: [],
  });
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingPost, setDeletingPost] = useState(null);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [selectedPostForComments, setSelectedPostForComments] = useState(null);

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeletingPost(null);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const closeCommentModal = () => {
    setIsCommentModalOpen(false);
    setSelectedPostForComments(null);
  };

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

  const tagBgColors = {
    Announcement: "bg-[#E9BFD7]",
    Urgent: "bg-[#E2BADB]",
    Vent: "bg-[#DDB7E1]",
    Story: "bg-[#C7B3EE]",
    Help: "bg-[#B9B3F4]",
  };

const filteredPosts = posts.filter((post) => {
  const query = searchQuery.toLowerCase().trim();

  const matchesTagFilter =
    activeTag.length === 0
      ? true
      : post.postTags?.some((tag) => activeTag.includes(tag));

  const matchesSearch =
    !query
      ? true
      : post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.postTags?.some((tag) => tag.toLowerCase().includes(query));

  return matchesTagFilter && matchesSearch;
});

  return (
    <div className="h-screen mt-[9vh] w-full flex flex-col bg-white">
      <NavBar />
      
      <CommunityBanner searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterTabs tags={tags} activeTag={activeTag} toggleTag={toggleTag} />
      
      {/* POST SPACE */}
      <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-12 bg-white overflow-hidden">
        
        {/* Left Spacing */}
        <div className="hidden md:block md:col-span-2 border-r border-gray-500 bg-white"></div>

        <CommunityPosts posts={filteredPosts} activeTag={activeTag} tagBgColors={tagBgColors} userEmail={userEmail} setIsEditModalOpen={setIsEditModalOpen} setEditingPost={setEditingPost} setDeletingPost={setDeletingPost} setIsDeleteModalOpen={setIsDeleteModalOpen} refreshPosts={refreshPosts} setSelectedPostForComments={setSelectedPostForComments} setIsCommentModalOpen={setIsCommentModalOpen}/>
        <AddCommunityPost setIsModalOpen={setIsModalOpen} />

      </div>

      {/* --- ADD POST POP-UP MODAL CONTAINER --- */}
      {isModalOpen && (
        <AddCommunityPostModal 
          tags={tags}
          tagBgColors={tagBgColors}
          userEmail={userEmail}
          userName={userName}
          setIsModalOpen={setIsModalOpen}
          refreshPosts = {refreshPosts}
          editingPost = {editingPost}
          setEditingPost={setEditingPost}
        />
      )}

      {/* --- EDIT POST POP-UP MODAL CONTAINER --- */}
      {isEditModalOpen && (
        <EditCommunityPostModal 
          tags={tags}
          tagBgColors={tagBgColors}
          setIsEditModalOpen={setIsEditModalOpen}
          editingPost={editingPost}
          setEditingPost={setEditingPost}
        />
      )}

      {/* --- DELETE CONFIRMATION POP-UP MODAL CONTAINER --- */}
      {isDeleteModalOpen && deletingPost && (
        <DeleteCommunityPostModal 
          deletingPost={deletingPost}
          closeDeleteModal={closeDeleteModal}
          refreshPosts={refreshPosts}
        />
      )}

      {/* ---COMMENTS FEED POP-UP MODAL CONTAINER------------------*/}
      {isCommentModalOpen && selectedPostForComments && (
        <CommentsModal 
          selectedPostForComments={selectedPostForComments}
          closeCommentModal={closeCommentModal}
          userName={userName}
          refreshPosts={refreshPosts}
          userEmail={userEmail}
        />
      )}

    </div>
  );
}

export default Community;