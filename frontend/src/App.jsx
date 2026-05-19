import './index.css';
import React from "react";
import { Link } from "react-router-dom";
import NavBar from './Components/NavBar';
import RedirectSmall from './Components/RedirectSmall';

export default function App() {
  return (
    <div className="mt-[9vh] min-h-screen w-full bg-[linear-gradient(90deg,_#e9bfd6_0%,_#d7b3e6_50%,_#b8b3f4_100%)] px-4 sm:px-6 md:px-12 py-6 md:py-8">

      <NavBar />

      {/* HERO */}
      <main className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* TEXT */}
        <div className="max-w-xl text-center lg:text-left">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4B3573] leading-tight mb-6">
            A safe space for your heart to rest.
          </h1>

          <p className="text-base sm:text-lg text-[#5E4A7E] mb-8 md:mb-10 leading-relaxed">
            Join a nurturing community where vulnerability is celebrated.
            Find emotional support, shared stories, and the gentle care you deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <RedirectSmall text="Join our Community" color="bg-[#7B8DEB]" textColor="text-white" />
            <RedirectSmall text="Explore the Forum" color="bg-[#F5C0CB]" textColor="text-[#7B8DEB]" />
          </div>

        </div>

        {/* IMAGE */}
        <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-square rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl">

          <img
            src="your-cloud-image.png"
            alt="Cloud Illustration"
            className="object-cover w-full h-full"
          />

        </div>

      </main>
    </div>
  );
}