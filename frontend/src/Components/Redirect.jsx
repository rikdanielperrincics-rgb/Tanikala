import { Link } from "react-router-dom";

function Redirect( {text, to} ) {
    return (
        <div className="flex gap-3 w-full max-w-[80vh]">
            <Link
                to={to}
                className="flex-1 py-[13px] rounded-full border-[1.5px] border-[#d8d8d8] bg-white text-[17px] font-bold text-[#555] text-center hover:border-[#a78bda] hover:text-[#7c4dba] transition-all"
            >
                {text}
            </Link>
        </div>
    )
}

export default Redirect
