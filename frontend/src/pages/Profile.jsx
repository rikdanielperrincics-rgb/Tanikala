import NavBar from "../Components/NavBar";

function Profile() {
  return (
    <div className="min-h-screen w-full bg-[linear-gradient(90deg,_#e9bfd6_0%,_#d7b3e6_50%,_#b8b3f4_100%)] px-4 sm:px-6 md:px-12 py-6 md:py-8">
      <NavBar />
      <main className=" max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4B3573] leading-tight mb-6">
            User Profile
          </h1>
          <p className="text-base sm:text-lg text-[#5E4A7E] mb-8 md:mb-10 leading-relaxed">
            This is a placeholder for the user profile page. Here you can
            display user information, settings, and other relevant details.
          </p>
        </div>
        <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-square rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl">
          <img
            src="your-profile-placeholder.png"
            alt="Profile Placeholder"
            className="object-cover w-full h-full"
          />
        </div>
      </main>
    </div>
  );
}

export default Profile;
