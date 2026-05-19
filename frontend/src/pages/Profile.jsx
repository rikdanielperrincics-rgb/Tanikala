import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import EditUser from "../Components/EditUser";
import ProfileBio from "../Components/ProfileBio";
import RecentActivity from "../Components/RecentActivity";

function Profile() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [userID, setUserID] = useState(null);
  const [userEmail, setUserEmail] = useState("")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts(params) {
          try {
      const response = await fetch("http://localhost:8000/api/posts");
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
    }
    } 

    const token = localStorage.getItem("token");
        const email = token        ? JSON.parse(atob(token.split(".")[1])).email
        : null;
        setUserEmail(email);  
    const id = token
      ? JSON.parse(atob(token.split(".")[1])).id
      : null;
    getPosts();
    setUserID(id);
    console.log(posts)
    console.log(userEmail)
  }, []);

  const handleUpdate = () => {
    console.log("Profile updated!");
  };

  return (
    <div className="min-h-screen mt-[9vh] w-full bg-[linear-gradient(90deg,_#e9bfd6_0%,_#d7b3e6_50%,_#b8b3f4_100%)] px-4 sm:px-6 md:px-12 py-6 md:py-8">
      <NavBar />
      
      <ProfileBio setIsEditModalOpen={setIsEditModalOpen} />
      {isEditModalOpen && (
        <EditUser
          userId={userID}
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={handleUpdate}
        />
      )}

      <RecentActivity posts={posts} userEmail={userEmail}/>
    </div>
  );
}

export default Profile;
