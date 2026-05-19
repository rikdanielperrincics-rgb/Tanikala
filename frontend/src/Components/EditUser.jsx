import React, { use, useEffect, useState } from "react";
import EyeIcon from "./EyeIcon";
import { toast } from "react-toastify";
import validator from "validator";

function EditUser({ userId, onClose, onUpdate }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(
          `http://localhost:8000/api/user/${userId}`,
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
    if (name === "password") {
      validate(value);
      if (confirmPassword && value !== confirmPassword) {
          setErrorConfirmPassword("Passwords do not match.");
      } else {
          setErrorConfirmPassword("");
      }
    }
  }

  function validate(value) {
      if (validator.isStrongPassword(value, {
          minLength: 8, minLowercase: 1,
          minUppercase: 1, minNumbers: 1, minSymbols: 1
      })) {
          setErrorPassword('');
          return true;
      } else {
          if (value.length === 0) {
              setErrorPassword("");
          } else {
              const errorMessages = [];
              if (value.length < 8) {
                  errorMessages.push("Password must be at least 8 characters long.");
              }
              if (!/[A-Z]/.test(value)) {
                  errorMessages.push("Password must include at least one uppercase letter.");
              }
              if (!/[a-z]/.test(value)) {
                  errorMessages.push("Password must include at least one lowercase letter.");
              }
              if (!/[0-9]/.test(value)) {
                  errorMessages.push("Password must include at least one number.");
              }
              if (!/[^A-Za-z0-9]/.test(value)) {
                  errorMessages.push("Password must include at least one symbol.");
              }
              setErrorPassword(errorMessages.join("\n"));  
          }
          return false;
      }
  }

  async function updateUser(e) {
    e.preventDefault();
    try {
      if (userData.password && !validate(userData.password)) {
        toast.error("Please fix password errors before submitting.");
        return;
      }
      
      if (userData.password !== confirmPassword) {
        toast.error("Passwords do not match.");
        setErrorConfirmPassword("Passwords do not match.");
        return;
      }

      const response = await fetch(
        `http://localhost:8000/api/update/user/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        },
      );

      if (response.ok) {
        toast.success("User updated successfully!");
        onUpdate();
        onClose();
      } else {
          const errorData = await response.json();
          toast.error("Error updating user: " + errorData.error);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user.");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4B3573]/20 backdrop-blur-sm transition-all duration-300 p-4">
      
      {/* Modal Card */}
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md p-8 mx-4 flex flex-col gap-6 transform scale-100 transition-all border border-purple-100">
        
        {/* Header / Title Section */}
        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
          <h2 className="text-[2rem] font-extrabold text-[#4B3573] tracking-tight">
            Edit Profile
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-red-400 transition-colors p-1.5 rounded-full hover:bg-gray-50"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Edit User Form */}
        <form onSubmit={updateUser} className="flex flex-col gap-5">
          
          {/* Input: Name */}
          <div className="flex flex-col w-full">
            <label className="text-[#766a94] font-bold mb-1.5 text-[0.95rem] tracking-wide block">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={userData.name || ""}
              onChange={handleChange}
              className="w-full px-5 py-3 text-[0.95rem] text-[#5E4A7E] border-2 border-purple-500/10 rounded-2xl focus:border-[#C7B3EE] focus:ring-4 focus:ring-purple-100 outline-none transition-all bg-[#faf8fc] font-medium placeholder-purple-300/70"
              required
            />
          </div>

          {/* Input: Email */}
          <div className="flex flex-col w-full">
            <label className="text-[#766a94] font-bold mb-1.5 text-[0.95rem] tracking-wide block">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={userData.email || ""}
              onChange={handleChange}
              className="w-full px-5 py-3 text-[0.95rem] text-[#5E4A7E] border-2 border-purple-500/10 rounded-2xl outline-none bg-gray-100/60 font-medium cursor-not-allowed opacity-70"
              required
              disabled
            />
          </div>

          {/* Input: Password */}
          <div className="flex flex-col w-full">
            <label className="text-[#766a94] font-bold mb-1.5 text-[0.95rem] tracking-wide block">
              Password
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="New Password"
                value={userData.password || ""}
                onChange={handleChange}
                className="w-full px-5 py-3 pr-12 text-[0.95rem] text-[#5E4A7E] border-2 border-purple-500/10 rounded-2xl focus:border-[#C7B3EE] focus:ring-4 focus:ring-purple-100 outline-none transition-all bg-[#faf8fc] font-medium placeholder-purple-300/70"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-purple-400 hover:text-[#4B3573] transition-colors"
              >
                <EyeIcon show={showPassword} />
              </button>
            </div>
            {errorPassword && (
              <p className="whitespace-pre-line text-red-500 text-sm mt-1.5 px-1 leading-relaxed">
                {errorPassword}
              </p>
            )}
          </div>

          {/* Input: Confirm Password */}
          <div className="flex flex-col w-full">
            <label className="text-[#766a94] font-bold mb-1.5 text-[0.95rem] tracking-wide block">
              Confirm Password
            </label>
            <div className="relative w-full">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (e.target.value !== userData.password) {
                    setErrorConfirmPassword("Passwords do not match.");
                  } else {
                    setErrorConfirmPassword("");
                  }
                }}
                className="w-full px-5 py-3 pr-12 text-[0.95rem] text-[#5E4A7E] border-2 border-purple-500/10 rounded-2xl focus:border-[#C7B3EE] focus:ring-4 focus:ring-purple-100 outline-none transition-all bg-[#faf8fc] font-medium placeholder-purple-300/70"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-purple-400 hover:text-[#4B3573] transition-colors"
              >
                <EyeIcon show={showConfirmPassword} />
              </button>
            </div>
            {errorConfirmPassword && (
              <p className="whitespace-pre-line text-red-500 text-sm mt-1.5 px-1 leading-relaxed">
                {errorConfirmPassword}
              </p>
            )}
          </div>

          {/* Actions Footer */}
          <div className="flex justify-end items-center gap-4 mt-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full font-bold text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#766a94] hover:bg-[#61567d] text-white px-8 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Save Changes</span>
              <svg className="w-5 h-5 fill-none stroke-white" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default EditUser;