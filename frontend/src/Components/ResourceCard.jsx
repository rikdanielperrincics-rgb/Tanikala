function ResourceCard({ title, description, link, category, image }) {
    return (
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
    )
}

export default ResourceCard
