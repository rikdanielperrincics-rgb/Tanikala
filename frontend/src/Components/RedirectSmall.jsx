function RedirectSmall({ text, color, textColor }) {
    return (
        <button className={`${color} ${textColor} px-8 py-4 rounded-3xl font-semibold shadow-lg transition hover:scale-105`}>
            {text}
        </button>
    )
}

export default RedirectSmall
