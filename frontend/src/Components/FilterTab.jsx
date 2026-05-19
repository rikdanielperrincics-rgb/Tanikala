function FilterTab({ tag, activeTag, toggleTag }) {
    return (
        <span
                key={tag.name}
                onClick={() => toggleTag(tag.name)}
                className={`
                cursor-pointer transition-all duration-300 
                hover:underline underline-offset-[15px] decoration-[4px]
                ${tag.hoverColor} 
                ${
                    activeTag.includes(tag.name)
                    ? `${tag.activeColor} underline` 
                    : "text-gray-400"            
                }
                `}
            >
                {tag.name}
            </span>
    )
}

export default FilterTab
