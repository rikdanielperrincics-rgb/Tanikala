import NavBar from "../Components/NavBar";

function Profile() {
  return (

    <div className="min-h-screen mt-[9vh] w-full bg-[linear-gradient(90deg,_#e9bfd6_0%,_#d7b3e6_50%,_#b8b3f4_100%)] px-4 sm:px-6 md:px-12 py-6 md:py-8">
      <NavBar />
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
        </div>
        <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-square rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl">
          <img
            src="your-profile-placeholder.png"
            alt="Profile Picture"
            className="object-cover w-full h-full"
          />
        </div>
      </main>

      <div className="createPost">
        <div className="mt-20 max-w-7xl mx-auto bg-white/30 backdrop-blur-md rounded-2xl p-6 md:p-12 shadow-lg">
          <h2 className="text-2xl font-bold text-[#4B3573] mb-4">
            Create a New Post
          </h2>
          <form className="flex flex-col gap-4">
            <textarea
              placeholder="What's on your mind?"
              className="w-full h-32 p-4 rounded-lg border-[1.5px] border-[#d8d8d8] focus:border-[#a78bda] transition-colors resize-none"
            ></textarea>

            <div>
              <label className="block text-sm font-medium text-[#444] mb-2">
                Tags (comma separated)
              </label>
              <select className="px-4 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-[#4B3573] shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 transition">
                <option value="">#MentalHealth</option>
                <option value="">#Support</option>
                <option value="">#Community</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button className="px-6 py-2 bg-purple-200 text-purple-800 rounded-full hover:bg-purple-300 transition-colors shadow-sm">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-16 max-w-7xl mx-auto bg-white/30 backdrop-blur-md rounded-2xl p-6 md:p-12 shadow-lg">
        <h2 className="text-2xl font-bold text-[#4B3573] mb-4">
          Recent Activity
        </h2>
        <div className="UserPosts">
          <div className="bg-white rounded-2xl min-h-[100px] p-4 font-bold text-[#5E4A7E] mb-4 shadow">
            <div className="flex items-center gap-4">
              <div className="relative w-full max-w-[30px] sm:max-w-[60px] lg:max-w-[75px] aspect-square rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl bg-blue">
                <img
                  src="your-profile-placeholder.png"
                  alt="Profile Picture"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="ml-4">
                <p className="text-sm text-[#5E4A7E]">Username</p>
                <p className="text-base text-[#4B3573]">
                  This is a sample post content.
                </p>
              </div>
            </div>
            <div className="m-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="tags flex flex-wrap gap-2">
              <span className="inline-block bg-pink-200 text-pink-800 text-xs font-medium px-3 py-1 rounded-full">
                #MentalHealth
              </span>

              <span className="inline-block bg-purple-200 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                #Support
              </span>

              <span className="inline-block bg-blue-200 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                #Community
              </span>
            </div>
            <div className="my-6 flex gap-4">
              <button className="px-5 py-2 bg-pink-200 text-pink-800 rounded-full hover:bg-pink-300 transition-colors shadow-sm">
                Like
              </button>

              <button className="px-5 py-2 bg-purple-200 text-purple-800 rounded-full hover:bg-purple-300 transition-colors shadow-sm">
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
