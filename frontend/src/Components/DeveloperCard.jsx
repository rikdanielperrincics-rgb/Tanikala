function DeveloperCard({ name, role, type, delay, img }) {
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("");
    const roleColors = {
        backend: {
        badge: "bg-[#ddd6fe] text-[#5b21b6]",
        ring: "ring-[#a78bfa]",
        avatar: "from-[#7c3aed] to-[#a78bfa]",
        },
        frontend: {
        badge: "bg-[#fce7f3] text-[#be185d]",
        ring: "ring-[#f9a8d4]",
        avatar: "from-[#d966c0] to-[#f472b6]",
        },
    };
    const colors = roleColors[type];
    return (
        <div
        data-animate
        className={`flex flex-col items-center gap-6 bg-white rounded-3xl px-12 py-14 w-80 shadow-sm opacity-0 translate-y-6 transition-all duration-500 ease-out ${delay}`}
        >
        {img ? (
            <img
            src={img}
            alt={name}
            className={`w-32 h-32 rounded-full object-cover ring-4 ${colors.ring} shadow-md`}
            />
        ) : (
            <div
            className={`w-32 h-32 rounded-full bg-gradient-to-br ${colors.avatar} ring-4 ${colors.ring} flex items-center justify-center text-white text-3xl font-bold tracking-wide shadow-md`}
            >
            {initials}
            </div>
        )}
        <div className="flex flex-col items-center gap-2">
            <h3 className="text-2xl font-bold text-[#3b2d6e] text-center leading-snug">
            {name}
            </h3>
            <span
            className={`text-base font-semibold px-4 py-1.5 rounded-full ${colors.badge}`}
            >
            {role}
            </span>
        </div>
        </div>
    );
}
export default DeveloperCard
