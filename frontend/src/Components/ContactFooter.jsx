function ContactFooter() {
    return (
        <div className="mt-16 text-center">
            <div className="bg-white/50 border border-white/70 rounded-2xl px-8 py-7 max-w-md mx-auto">
                <p className="text-2xl font-black text-[#512B7C] italic leading-snug mb-3">
                "Asking for help is a sign of strength."
                </p>
                <p className="text-sm font-semibold text-[#584A6A]">
                Unsure where to start?{" "}
                <a href="tel:1553" className="text-[#512B7C] underline underline-offset-2 font-black">
                    Call 1553
                </a>{" "}
                — the NCMH hotline will guide you.
                </p>
            </div>
            <p className="text-xs font-semibold text-[#584A6A]/60 mt-6">
                © 2025 Tanikala · Always verify hours directly with each institution.
            </p>
        </div>
    )
}

export default ContactFooter
