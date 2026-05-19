function ResourceHelp() {
    return (
        <section className="mt-20 max-w-7xl mx-auto bg-[#F5C0CB]/30 backdrop-blur-md rounded-[40px] p-8 md:p-12 text-center shadow-xl border border-white/20">
            <h2 className="text-3xl font-bold text-[#4B3573] mb-4">
            Need immediate help?
            </h2>
            <p className="text-[#5E4A7E] text-lg mb-8 max-w-2xl mx-auto">
            If you are in a crisis or need to talk to someone right away,
            professional help is available 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/60 px-6 py-4 rounded-2xl">
                <p className="font-bold text-[#4B3573]">National Crisis Hotline</p>
                <p className="text-xl font-black text-[#7B8DEB]">988</p>
            </div>
            <div className="bg-white/60 px-6 py-4 rounded-2xl">
                <p className="font-bold text-[#4B3573]">Text Support</p>
                <p className="text-xl font-black text-[#7B8DEB]">HOME to 741741</p>
            </div>
            </div>
        </section>
    )
}

export default ResourceHelp
