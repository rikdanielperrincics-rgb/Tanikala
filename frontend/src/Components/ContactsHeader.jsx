function ContactsHeader() {
    return (
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/60 border border-[#CBB2FE]/50 rounded-full px-5 py-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
                <span className="text-sm font-bold text-[#DD6CB1]">Support is always available</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-[#5b2d8e] leading-tight tracking-tight mb-4">
                You Are Not Alone
            </h1>
            <p className="text-[#584A6A] text-lg font-medium max-w-lg mx-auto leading-relaxed">
                Reach out. Real people are ready to listen — any time, any day.
                Here are trusted mental health resources just for you.
            </p>
        </div>
    )
}

export default ContactsHeader
