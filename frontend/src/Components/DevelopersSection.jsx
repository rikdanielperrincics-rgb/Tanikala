import DeveloperCard from "./DeveloperCard";

function DevelopersSection({ devsRef, developers }) {
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
export default DevelopersSection
