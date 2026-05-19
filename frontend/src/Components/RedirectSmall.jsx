import {Link} from "react-router-dom";
function RedirectSmall({ text, color, textColor, to }) {
    return (
        <Link
                to={to}
                className={`${color} ${textColor} px-8 py-4 rounded-3xl font-semibold shadow-lg transition hover:scale-105`}
            >
                {text}
        </Link>
    )
}

export default RedirectSmall
