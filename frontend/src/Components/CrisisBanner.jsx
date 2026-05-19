function CrisisBanner() {
    return (
        <div className="flex flex-wrap items-center gap-4 bg-white/50 border-2 border-[#DD6CB1]/30 rounded-2xl px-6 py-4 mb-8">
            <span className="bg-[#DD6CB1] text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shrink-0">
                ⚡ In Crisis Now?
            </span>
            <p className="text-sm font-semibold text-[#512B7C]">
                If you or someone is in immediate danger, call{" "}
                <a href="tel:911" className="text-[#DD6CB1] underline underline-offset-2 font-black">911</a>{" "}
                or the NCMH hotline{" "}
                <a href="tel:1553" className="text-[#DD6CB1] underline underline-offset-2 font-black">1553</a>{" "}
                — free, 24/7.
            </p>
        </div>
    )
}

export default CrisisBanner
