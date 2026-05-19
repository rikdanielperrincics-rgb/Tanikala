import ResourceCard from "../Components/ResourceCard";

function HomeResources({featuredResources}) {
    return (
        <section className="w-full mt-24 pt-16 border-t border-white/20">
            <div className="max-w-7xl mx-auto">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredResources.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
                ))}
            </div>

            </div>
        </section>
    )
}

export default HomeResources
