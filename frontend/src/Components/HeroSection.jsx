function HeroSection({ sectionRef, therapistImg }) {
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
                    <button className="rounded-lg border-2 border-[#7ab3e8] bg-transparent px-14 py-4 text-lg font-semibold text-[#4682B4] hover:bg-[#7ab3e8] hover:text-white shadow-md transition-colors duration-200" onClick={() => window.location.href = "/resources"}>
                        Learn More
                    </button>
                    <button className="rounded-lg border-2 border-[#7b5ea7] bg-transparent px-14 py-4 text-lg font-semibold text-[#7b5ea7] hover:bg-[#7b5ea7] hover:text-white transition-colors duration-200" onClick={() => window.location.href = "/contacts"}>
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

export default HeroSection
