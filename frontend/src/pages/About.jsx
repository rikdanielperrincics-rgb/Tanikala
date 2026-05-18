import NavBar from "../Components/NavBar";
import therapistImg from "../assets/therapist.png";
import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    if (!elements) return;

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
    <div className="min-h-screen mt-[7vh] w-full bg-[linear-gradient(90deg,_#e9bfd6_0%,_#d7b3e6_50%,_#b8b3f4_100%)]">
      <NavBar />
      <section
        ref={sectionRef}
        className="w-full flex flex-row items-center px-20 py-16 gap-8"
      >
        <div className="flex flex-col gap-5 w-1/2">
          <p
            data-animate
            className="font-semibold text-[#d966c0] text-lg tracking-wide opacity-0 translate-y-6 transition-all duration-500 ease-out"
          >
            About Us
          </p>
          <h2
            data-animate
            className="text-5xl font-bold leading-tight text-[#5b2d8e] opacity-0 translate-y-6 transition-all duration-500 delay-100 ease-out"
          >
            Compassionate Mental
            <br />
            Health Support for
            <br />
            Everyone
          </h2>
          <p
            data-animate
            className="text-justify text-[#4a4a6a] text-base leading-relaxed opacity-0 translate-y-6 transition-all duration-500 delay-200 ease-out"
          >
            We believe healing begins with feeling heard. Tanikala connects
            people with accessible mental wellness resources, supportive
            communities and professional care.
          </p>
          <div
            data-animate
            className="flex flex-row gap-4 opacity-0 translate-y-6 transition-all duration-500 delay-300 ease-out"
          >
            <button className="rounded-lg bg-[#7ab3e8] px-10 py-3 font-semibold text-white shadow-md hover:bg-[#5a9fd4] transition-colors duration-200">
              Learn More
            </button>
            <button className="rounded-lg border-2 border-[#7b5ea7] bg-transparent px-10 py-3 font-semibold text-[#7b5ea7] hover:bg-[#7b5ea7] hover:text-white transition-colors duration-200">
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
    </div>
  );
}