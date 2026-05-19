function ContactCard({ item }) {
    return (
        <div className="rounded-2xl p-6 bg-white/50 border border-white/70 hover:-translate-y-1 transition-transform duration-200 flex flex-col gap-3">
        <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-[#512B7C] bg-[#CBB2FE]/30 border border-[#CBB2FE]/50 px-3 py-1 rounded-full">
            {item.tag}
            </span>
            {item.available && (
            <span className="text-xs font-semibold text-[#DD6CB1] bg-white/40 border border-[#DD6CB1]/30 px-3 py-1 rounded-full">
                {item.available}
            </span>
            )}
        </div>

        <p className="text-base font-extrabold text-[#512B7C] leading-snug">{item.name}</p>
        <p className="text-sm font-medium text-[#584A6A] leading-relaxed">{item.desc}</p>

        <div className="flex flex-col gap-2 mt-1">
            {item.number && (
            <a href={`tel:${item.number.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-sm font-bold text-[#512B7C] bg-white/70 border border-[#CBB2FE]/40 hover:bg-[#CBB2FE]/20 rounded-xl px-4 py-2.5 w-fit transition-colors duration-150">
                📞 {item.number}
            </a>
            )}
            {item.url && (
            <a href={item.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-[#512B7C] bg-white/70 border border-[#CBB2FE]/40 hover:bg-[#CBB2FE]/20 rounded-xl px-4 py-2.5 w-fit transition-colors duration-150">
                🔗 Visit Website
            </a>
            )}
            {item.email && (
            <a href={`mailto:${item.email}`}
                className="flex items-center gap-2 text-sm font-bold text-[#512B7C] bg-white/70 border border-[#CBB2FE]/40 hover:bg-[#CBB2FE]/20 rounded-xl px-4 py-2.5 w-fit transition-colors duration-150">
                ✉️ {item.email}
            </a>
            )}
        </div>
        </div>
    );
}

export default ContactCard
