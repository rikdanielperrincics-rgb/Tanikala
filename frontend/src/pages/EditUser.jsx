import React, { useEffect, useState } from "react";

function EditUser({ userId, onClose, onUpdate }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(
          `http://localhost:5000/api/user/getone/${userId}`,
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  }

  async function updateUser(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/user/update/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        },
      );

      if (response.ok) {
        alert("User updated successfully!");
        onUpdate();
        onClose();
      } else {
        alert("Error updating user.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Error updating user.");
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/80 backdrop-blur-xl p-6 md:p-10 max-w-md w-full mx-auto rounded-[30px] shadow-2xl relative border border-white/20">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#4B3573] hover:text-purple-800 transition-colors text-2xl font-bold"
        >
          &times;
        </button>
        
        <h2 className="text-3xl font-bold mb-8 text-[#4B3573] text-center">
          Edit Profile
        </h2>

        <form onSubmit={updateUser} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-[#5E4A7E] mb-2 px-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={userData.name || ""}
              onChange={handleChange}
              className="w-full bg-white/50 border-[1.5px] border-[#d8d8d8] p-3 rounded-2xl focus:border-[#a78bda] focus:ring-2 focus:ring-[#a78bda]/20 outline-none transition-all placeholder:text-gray-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#5E4A7E] mb-2 px-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={userData.email || ""}
              onChange={handleChange}
              className="w-full bg-white/50 border-[1.5px] border-[#d8d8d8] p-3 rounded-2xl focus:border-[#a78bda] focus:ring-2 focus:ring-[#a78bda]/20 outline-none transition-all placeholder:text-gray-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#5E4A7E] mb-2 px-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="New Password"
              value={userData.password || ""}
              onChange={handleChange}
              className="w-full bg-white/50 border-[1.5px] border-[#d8d8d8] p-3 rounded-2xl focus:border-[#a78bda] focus:ring-2 focus:ring-[#a78bda]/20 outline-none transition-all placeholder:text-gray-400"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-[#7B8DEB] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-[#6a7cd9] hover:scale-[1.02] active:scale-95 transition-all"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-[#F5C0CB] text-[#7B8DEB] font-bold py-3 px-6 rounded-full shadow-lg hover:bg-[#efabbb] hover:scale-[1.02] active:scale-95 transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
