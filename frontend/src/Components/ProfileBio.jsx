function ProfileBio({setIsEditModalOpen}) {
    function handleLogout() {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }
    
    return (
        <main className=" max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4B3573] leading-tight mb-6">
                User Profile Name
            </h1>
            <p className="text-base sm:text-lg text-[#5E4A7E] mb-8 md:mb-10 leading-relaxed">
                Profile Bio: This is a placeholder for the user's profile
                information. You can add details about yourself, your interests, and
                anything you'd like to share with the community.
            </p>
            <div className="flex justify-center lg:justify-start">
                <button
                onClick={() => setIsEditModalOpen(true)}
                className="bg-[#7B8DEB] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition hover:scale-105 active:scale-95"
                >
                Edit Profile
                </button>
                <button
                onClick={handleLogout}
                className="bg-[red] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition hover:scale-105 active:scale-95" style={{marginLeft: "15px"}}
                >
                Logout
                </button>
            </div>
            </div>
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-square rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl">
            <img
                src="your-profile-placeholder.png"
                alt="Profile Picture"
                className="object-cover w-full h-full"
            />
            </div>
        </main>
    )
}

export default ProfileBio
