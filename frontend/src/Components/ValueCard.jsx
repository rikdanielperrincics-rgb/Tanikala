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


export default ValueCard
