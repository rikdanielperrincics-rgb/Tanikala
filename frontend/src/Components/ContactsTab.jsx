function ContactsTab({ tabs, activeTab, setActiveTab }) {
    return (
        <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((t, i) => (
                <button
                key={t}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                    i === activeTab
                    ? "bg-[#CBB2FE] text-[#512B7C] border-[#B197FC] shadow-md"
                    : "bg-white/40 text-[#584A6A] border-white/60 hover:bg-white/60"
                }`}
                >
                {t}
                </button>
            ))}
        </div>
    )
}

export default ContactsTab
