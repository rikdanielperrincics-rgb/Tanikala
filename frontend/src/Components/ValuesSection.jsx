import ValueCard from "./ValueCard";

function ValuesSection({ valuesRef , values}) {
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

export default ValuesSection
