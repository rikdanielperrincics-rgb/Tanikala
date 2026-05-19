function StorySection({ storyRef, chainsImg}) {
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
    )
}

export default StorySection
