import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import EditUser from "../Components/EditUser";
import ProfileBio from "../Components/ProfileBio";
import RecentActivity from "../Components/RecentActivity";

function Profile() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const id = token
      ? JSON.parse(atob(token.split(".")[1])).id
      : null;

    setUserID(id);
    console.log("User ID from token:", id);
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

      <RecentActivity />
    </div>
  );
}

export default Profile;
