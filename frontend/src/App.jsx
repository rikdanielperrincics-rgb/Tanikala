import './index.css';
import React from "react";
import { Link } from "react-router-dom";
import NavBar from './Components/NavBar';
import RedirectSmall from './Components/RedirectSmall';
import peaceImg from "./assets/peace.jpg";

// Added necessary imports for the resources section
import ResourceCard from "./Components/ResourceCard";
import Empathy from "./assets/Empathy.png";
import Accessibility from "./assets/Accessibility.png";
import CommunityIcon from "./assets/Community.png";
import Therapist from "./assets/therapist.png";

export default function App() {
  // Full curated resources list including Professional Counseling
  const featuredResources = [
    {
      title: "Understanding Anxiety",
      description:
        "A comprehensive guide on recognizing symptoms and finding effective coping mechanisms for daily life.",
      category: "Mental Health",
      link: "https://www.psychologytoday.com/us/blog/a-deeper-wellness/202506/understanding-and-managing-anxiety?msockid=3663e492bb6c6f483075f269baf16ef1",
      image: Empathy,
    },
    {
      title: "Self-Care Rituals",
      description:
        "Discover simple yet powerful daily habits to nurture your emotional and physical well-being.",
      category: "Wellness",
      link: "https://symbolsage.com/self-care-rituals-and-practices/",
      image: Accessibility,
    },
    {
      title: "Community Support",
      description:
        "How to stay connected and find strength in shared experiences within our nurturing network.",
      category: "Community",
      link: "https://in-touch.org/community-support/",
      image: CommunityIcon,
    },
    {
      title: "Professional Counseling",
      description:
        "Guidance on when to seek professional help and how to find the right therapist for your needs.",
      category: "Support",
      link: "https://www.psychologytoday.com/us/therapists",
      image: Therapist,
    },
  ];

  return (
    <div className="mt-[9vh] min-h-screen w-full bg-[linear-gradient(90deg,_#e9bfd6_0%,_#d7b3e6_50%,_#b8b3f4_100%)] px-4 sm:px-6 md:px-12 py-6 md:py-8">

      <NavBar />

      {/* HERO - Added mt-12 sm:mt-20 md:mt-28 to push it down from the NavBar */}
      <main className="max-w-7xl mx-auto mt-12 sm:mt-20 md:mt-28 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* TEXT */}
        <div className="max-w-xl text-center lg:text-left">

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#4B3573] leading-tight mb-6">
            A safe space for your mind and heart to rest.
          </h1>

          <p className="text-lg sm:text-xl text-[#5E4A7E] mb-8 md:mb-10 leading-relaxed">
            Join a nurturing community where vulnerability is celebrated.
            Find emotional support, shared stories, and the gentle care you deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start transform scale-105 sm:scale-110 origin-center lg:origin-left mt-4">
            <RedirectSmall text="Join our Community" color="bg-[#7B8DEB]" textColor="text-white" />
            <RedirectSmall text="Explore the Forum" color="bg-[#F5C0CB]" textColor="text-[#7B8DEB]" />
          </div>

        </div>

        {/* IMAGE */}
        <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-square rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl">

          <img
            src={peaceImg}
            alt="mind illustration"
            className="object-cover w-full h-full"
          />

        </div>

      </main>

      {/* --- ADDED FEATURED RESOURCES SECTION --- */}
      <section className="w-full mt-24 pt-16 border-t border-white/20">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-10 text-center lg:text-left">
            <span className="text-xs font-black uppercase tracking-widest text-[#DD6CB1] block mb-2">
              Explore Our Library
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#512B7C] tracking-tight">
              Recommended Wellness Resources
            </h2>
            <p className="text-[#584A6A] mt-2 max-w-xl text-base font-medium mx-auto lg:mx-0">
              Carefully curated guides, tools, and articles to support you on your mental health journey.
            </p>
          </div>

          {/* Resources Cards Grid - Fits 4 items perfectly */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredResources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}