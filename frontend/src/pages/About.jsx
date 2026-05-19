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

// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-row items-center px-20 py-16 gap-8"
    >
      <div className="flex flex-col gap-5 w-1/2">
        <p
          data-animate
          className="font-semibold text-[#d966c0] text-3xl tracking-wide opacity-0 translate-y-6 transition-all duration-500 ease-out"
        >
          About Us
        </p>
        <h2
          data-animate
          className="text-7xl font-bold leading-tight text-[#5b2d8e] opacity-0 translate-y-6 transition-all duration-500 delay-100 ease-out"
        >
          Compassionate Mental
          <br />
          Health Support for
          <br />
          Everyone
        </h2>
        <p
          data-animate
          className="text-justify text-[#4a4a6a] text-2xl leading-relaxed opacity-0 translate-y-6 transition-all duration-500 delay-200 ease-out"
        >
          We believe healing begins with feeling heard. Tanikala connects people
          with accessible mental wellness resources, supportive communities and
          professional care.
        </p>
        <div
          data-animate
          className="flex flex-row gap-4 mt-6 justify-center opacity-0 translate-y-6 transition-all duration-500 delay-300 ease-out"
        >
          <button className="rounded-lg border-2 border-[#7ab3e8] bg-transparent px-14 py-4 text-lg font-semibold text-[#4682B4] hover:bg-[#7ab3e8] hover:text-white shadow-md transition-colors duration-200">
            Learn More
          </button>
          <button className="rounded-lg border-2 border-[#7b5ea7] bg-transparent px-14 py-4 text-lg font-semibold text-[#7b5ea7] hover:bg-[#7b5ea7] hover:text-white transition-colors duration-200">
            Get Support
          </button>
        </div>
      </div>
      <div
        data-animate
        className="w-1/2 flex justify-center items-center opacity-0 translate-y-6 transition-all duration-500 delay-150 ease-out"
      >
        <img
          src={therapistImg}
          alt="A therapist and client in a supportive session"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}

// ─── Our Story Section ────────────────────────────────────────────────────────
function StorySection({ storyRef }) {
  return (
    <section
      ref={storyRef}
      className="w-full flex flex-row items-center px-20 py-16 gap-12 bg-[#e8c4d8]"
    >
      <div
        data-animate
        className="w-1/2 flex justify-center items-center opacity-0 translate-y-6 transition-all duration-500 ease-out"
      >
        <img
          src={chainsImg}
          alt="Breaking chains illustration"
          className="w-full h-auto object-contain rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-5 w-1/2">
        <p
          data-animate
          className="font-semibold text-[#d966c0] text-2xl tracking-wide opacity-0 translate-y-6 transition-all duration-500 ease-out"
        >
          Who we are...
        </p>
        <h2
          data-animate
          className="text-6xl font-bold leading-tight text-[#5b2d8e] opacity-0 translate-y-6 transition-all duration-500 delay-100 ease-out"
        >
          Our Story
        </h2>
        <p
          data-animate
          className="text-[#4a4a6a] text-2xl text-justify leading-relaxed opacity-0 translate-y-6 transition-all duration-500 delay-200 ease-out"
        >
          Tanikala, translated as "chains" from Tagalog, was created to make
          mental health care approachable, inclusive and stigma-free.
        </p>
        <p
          data-animate
          className="text-[#4a4a6a] text-2xl text-justify leading-relaxed opacity-0 translate-y-6 transition-all duration-500 delay-300 ease-out"
        >
          We envision a world where everyone has the support they need to thrive
          emotionally, mentally and socially.
        </p>
      </div>
    </section>
  );
}

// ─── Value Card ───────────────────────────────────────────────────────────────
function ValueCard({ img, alt, title, description, delay }) {
  return (
    <div
      data-animate
      className={`flex flex-col items-center gap-6 bg-white rounded-3xl px-8 py-20 w-96 shadow-sm opacity-0 translate-y-6 transition-all duration-500 ease-out ${delay}`}
    >
      <img src={img} alt={alt} className="w-36 h-36 object-contain" />
      <h3 className="text-2xl font-bold text-[#3b2d6e]">{title}</h3>
      <p className="text-center text-[#4a4a6a] text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// ─── Our Values Section ───────────────────────────────────────────────────────
function ValuesSection({ valuesRef }) {
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
  return (
    <section
      ref={valuesRef}
      className="w-full flex flex-col items-center px-20 py-16 gap-10"
    >
      <div className="flex flex-col items-center gap-3">
        <p
          data-animate
          className="font-semibold text-[#d966c0] text-2xl tracking-wide opacity-0 translate-y-6 transition-all duration-500 ease-out"
        >
          Our Values
        </p>
        <h2
          data-animate
          className="text-6xl font-bold text-[#5b2d8e] opacity-0 translate-y-6 transition-all duration-500 delay-100 ease-out"
        >
          What drives us
        </h2>
      </div>
      <div className="flex flex-row gap-8 w-full justify-center">
        {values.map((v) => (
          <ValueCard key={v.title} {...v} />
        ))}
      </div>
    </section>
  );
}

// ─── Developer Card ───────────────────────────────────────────────────────────
function DeveloperCard({ name, role, type, delay, img }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  const roleColors = {
    backend: {
      badge: "bg-[#ddd6fe] text-[#5b21b6]",
      ring: "ring-[#a78bfa]",
      avatar: "from-[#7c3aed] to-[#a78bfa]",
    },
    frontend: {
      badge: "bg-[#fce7f3] text-[#be185d]",
      ring: "ring-[#f9a8d4]",
      avatar: "from-[#d966c0] to-[#f472b6]",
    },
  };
  const colors = roleColors[type];
  return (
    <div
      data-animate
      className={`flex flex-col items-center gap-6 bg-white rounded-3xl px-12 py-14 w-80 shadow-sm opacity-0 translate-y-6 transition-all duration-500 ease-out ${delay}`}
    >
      {img ? (
        <img
          src={img}
          alt={name}
          className={`w-32 h-32 rounded-full object-cover ring-4 ${colors.ring} shadow-md`}
        />
      ) : (
        <div
          className={`w-32 h-32 rounded-full bg-gradient-to-br ${colors.avatar} ring-4 ${colors.ring} flex items-center justify-center text-white text-3xl font-bold tracking-wide shadow-md`}
        >
          {initials}
        </div>
      )}
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-2xl font-bold text-[#3b2d6e] text-center leading-snug">
          {name}
        </h3>
        <span
          className={`text-base font-semibold px-4 py-1.5 rounded-full ${colors.badge}`}
        >
          {role}
        </span>
      </div>
    </div>
  );
}

// ─── Meet the Developers Section ──────────────────────────────────────────────
function DevelopersSection({ devsRef }) {
  const developers = [
    { name: "Jemel Zapanta", role: "Backend Developer", type: "backend", delay: "delay-100", img: JemelImg },
    { name: "Rik Daniel Perrin", role: "Backend Developer", type: "backend", delay: "delay-200", img: RikImg },
    { name: "Guillana Domingo", role: "Frontend Developer", type: "frontend", delay: "delay-300", img: GuillanahImg },
    { name: "Kenneth Espiritu", role: "Frontend Developer", type: "frontend", delay: "delay-[400ms]", img: KennethImg },
  ];
  return (
    <section
      ref={devsRef}
      className="w-full flex flex-col items-center px-20 py-16 gap-10 bg-[#e8c4d8]"
    >
      <div className="flex flex-col items-center gap-3">
        <p
          data-animate
          className="font-semibold text-[#d966c0] text-2xl tracking-wide opacity-0 translate-y-6 transition-all duration-500 ease-out"
        >
          Meet the Team
        </p>
        <h2
          data-animate
          className="text-6xl font-bold text-[#5b2d8e] opacity-0 translate-y-6 transition-all duration-500 delay-100 ease-out"
        >
          The Developers
        </h2>
        <p
          data-animate
          className="text-[#4a4a6a] text-xl text-center max-w-xl opacity-0 translate-y-6 transition-all duration-500 delay-200 ease-out"
        >
          The passionate people behind Tanikala, building a platform rooted in
          care and purpose.
        </p>
      </div>
      <div className="flex flex-row gap-8 w-full justify-center flex-wrap">
        {developers.map((dev) => (
          <DeveloperCard key={dev.name} {...dev} />
        ))}
      </div>
    </section>
  );
}

// ─── About Page ───────────────────────────────────────────────────────────────
export default function About() {
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
      <HeroSection sectionRef={sectionRef} />
      <StorySection storyRef={storyRef} />
      <ValuesSection valuesRef={valuesRef} />
      <DevelopersSection devsRef={devsRef} />
    </div>
  );
}