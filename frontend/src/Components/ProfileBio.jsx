function ProfileBio({setIsEditModalOpen}) {
    function handleLogout() {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }
    
    return (
        <main className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mt-16 px-6 md:px-12">
            
            {/* Text & Actions Section */}
            <div className="max-w-xl text-center lg:text-left flex flex-col items-center lg:items-start">
                <span className="text-[1rem] text-purple-400 font-bold tracking-wide uppercase mb-2">
                    Welcome Back
                </span>
                
                <h1 className="text-[3rem] md:text-[4rem] font-extrabold text-[#4B3573] tracking-tight leading-tight mb-4">
                    User Profile Name
                </h1>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full">
                    <button
                        onClick={() => setIsEditModalOpen(true)}
                        className="bg-[#766a94] hover:bg-[#61567d] text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center gap-2"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                        </svg>
                        Edit Profile
                    </button>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center gap-2"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                        </svg>
                        Logout
                    </button>
                </div>
            </div>
            
        </main>
    )
}

export default ProfileBio;