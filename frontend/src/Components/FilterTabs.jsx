import FilterTab from "./FilterTab"

function FilterTabs({ tags, activeTag, toggleTag }) {
    return (
    <div className="w-full bg-white border-b border-gray-500 py-3 flex justify-center items-center gap-8 md:gap-16 text-[1.2rem] font-semibold text-gray-400 tracking-wide shrink-0">
            {tags.map((tag) => (
                <FilterTab
                    key={tag.name}
                    tag={tag}
                    activeTag={activeTag}
                    toggleTag={toggleTag}
                />
            ))}
        </div>

    )
}

export default FilterTabs
