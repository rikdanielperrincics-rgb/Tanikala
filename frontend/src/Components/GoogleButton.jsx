import GoogleIcon from "../Components/GoogleIcon";

function GoogleButton({ text }) {

    return (
        <button className="w-full py-[13px] rounded-full border-[1.5px] border-[#d8d8d8] bg-white text-[17px] font-bold text-[#444] cursor-pointer flex items-center justify-center gap-[10px] mb-4 hover:bg-[#fafafa] hover:border-[#bbb] transition-all max-w-[80vh]">
                    <GoogleIcon />
                    {text}
        </button>
    )
}

export default GoogleButton
