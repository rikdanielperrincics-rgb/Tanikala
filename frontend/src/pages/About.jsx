import NavBar from "../Components/NavBar";
import therapistImg from "../assets/therapist.png";
import chainsImg from "../assets/chains.jpg";
import empathyImg from "../assets/Empathy.png";
import accessibilityImg from "../assets/Accessibility.png";
import communityImg from "../assets/Community.png";
import RikImg from "../assets/Rik.jpg";
import JemelImg from "../assets/Jemel.jpg";
import GuillanahImg from "../assets/Guillana.jpg";
import KennethImg from "../assets/Kenneth.png";
import { useEffect, useRef } from "react";
import HeroSection from "../Components/HeroSection";
import StorySection from "../Components/StorySection";
import ValuesSection from "../Components/ValuesSection";
import DevelopersSection from "../Components/DevelopersSection";

export default function About() {
  const values = [
    {
      img: empathyImg,
      alt: "Empathy",
      title: "Empathy",
      description: "We lead with kindness and understanding in every interaction",
      delay: "delay-100",
    },
    {
      img: accessibilityImg,
      alt: "Accessibility",
      title: "Accessibility",
      description: "Mental health support should be available to everyone, everywhere.",
      delay: "delay-200",
    },
    {
      img: communityImg,
      alt: "Community",
      title: "Community",
      description: "We believe in the power of connection and shared experiences",
      delay: "delay-300",
    },
  ];

    const developers = [
    { name: "Jemel Zapanta", role: "Backend Developer", type: "backend", delay: "delay-100", img: JemelImg },
    { name: "Rik Daniel Perrin", role: "Backend Developer", type: "backend", delay: "delay-200", img: RikImg },
    { name: "Guillana Domingo", role: "Frontend Developer", type: "frontend", delay: "delay-300", img: GuillanahImg },
    { name: "Kenneth Espiritu", role: "Frontend Developer", type: "frontend", delay: "delay-[400ms]", img: KennethImg },
  ];

  const sectionRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const devsRef = useRef(null);

  useEffect(() => {
    const elements = [
      ...(sectionRef.current?.querySelectorAll("[data-animate]") || []),
      ...(storyRef.current?.querySelectorAll("[data-animate]") || []),
      ...(valuesRef.current?.querySelectorAll("[data-animate]") || []),
      ...(devsRef.current?.querySelectorAll("[data-animate]") || []),
    ];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen mt-[9vh] w-full bg-[linear-gradient(90deg,_#e9bfd6_0%,_#d7b3e6_50%,_#b8b3f4_100%)]">
      <NavBar />
      <HeroSection sectionRef={sectionRef} therapistImg={therapistImg} />
      <StorySection storyRef={storyRef} chainsImg={chainsImg}/>
      <ValuesSection valuesRef={valuesRef} values={values} />
      <DevelopersSection devsRef={devsRef} developers={developers} />
    </div>
  );
}