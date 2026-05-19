import React from "react";
import NavBar from "../Components/NavBar";
import Accessibility from "../assets/Accessibility.png";
import CommunityIcon from "../assets/Community.png";
import Empathy from "../assets/Empathy.png";
import Therapist from "../assets/therapist.png";
import ResourceCard from "../Components/ResourceCard";
import ResourceHelp from "../Components/ResourceHelp";
import ResourceHeader from "../Components/ResourceHeader";

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

      <ResourceHeader />

      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </main>

      <ResourceHelp />
      
    </div>
  );
}

export default Resources;
