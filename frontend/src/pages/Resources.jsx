import React from "react";
import NavBar from "../Components/NavBar";
import Accessibility from "../assets/Accessibility.png";
import CommunityIcon from "../assets/Community.png";
import Empathy from "../assets/Empathy.png";
import Therapist from "../assets/therapist.png";

const ResourceCard = ({ title, description, link, category, image }) => (
  <div className="bg-white/40 backdrop-blur-md rounded-[30px] p-6 shadow-lg border border-white/20 hover:scale-[1.02] transition-all flex flex-col h-full">
    {image && (
      <div className="w-full h-48 mb-6 rounded-2xl overflow-hidden shadow-inner bg-white/20">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-4"
        />
      </div>
    )}
    <div className="flex-1">
      <span className="inline-block px-3 py-1 rounded-full bg-purple-200 text-purple-800 text-xs font-bold mb-4 uppercase tracking-wider">
        {category}
      </span>
      <h3 className="text-2xl font-bold text-[#4B3573] mb-3">{title}</h3>
      <p className="text-[#5E4A7E] leading-relaxed mb-6">{description}</p>
    </div>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-center bg-[#7B8DEB] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#6a7cd9] transition-colors mt-auto"
    >
      Learn More
    </a>
  </div>
);

function Resources() {
  const resources = [
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
    <div className="min-h-screen mt-[9vh] w-full bg-[linear-gradient(90deg,_#e9bfd6_0%,_#d7b3e6_50%,_#b8b3f4_100%)] px-4 sm:px-6 md:px-12 py-10 md:py-16">
      <NavBar />

      <header className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#4B3573] leading-tight mb-6">
          Helpful Resources
        </h1>
        <p className="text-lg sm:text-xl text-[#5E4A7E] leading-relaxed">
          Explore our curated collection of articles, tools, and guides designed
          to support your journey toward emotional wellness and community
          connection.
        </p>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </main>

      <section className="mt-20 max-w-7xl mx-auto bg-[#F5C0CB]/30 backdrop-blur-md rounded-[40px] p-8 md:p-12 text-center shadow-xl border border-white/20">
        <h2 className="text-3xl font-bold text-[#4B3573] mb-4">
          Need immediate help?
        </h2>
        <p className="text-[#5E4A7E] text-lg mb-8 max-w-2xl mx-auto">
          If you are in a crisis or need to talk to someone right away,
          professional help is available 24/7.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-white/60 px-6 py-4 rounded-2xl">
            <p className="font-bold text-[#4B3573]">National Crisis Hotline</p>
            <p className="text-xl font-black text-[#7B8DEB]">988</p>
          </div>
          <div className="bg-white/60 px-6 py-4 rounded-2xl">
            <p className="font-bold text-[#4B3573]">Text Support</p>
            <p className="text-xl font-black text-[#7B8DEB]">HOME to 741741</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
