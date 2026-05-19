import { Link } from "react-router-dom";
import LogoLight from "../assets/LogoLight.png";
import GoogleButton from "../components/GoogleButton";
import LoginForm from "../components/LoginForm";
import Redirect from "../Components/Redirect";

function SignIn() {

  return (
    <div className="w-screen overflow-x-hidden">
      <div className="flex min-h-screen w-full">
        {/* LEFT */}
        <div className="hidden md:flex flex-1 flex-col justify-center items-center px-[52px] py-[60px] gap-4 bg-[linear-gradient(160deg,_#c4b5f0_0%,_#bbaee8_15%,_#c8b8f0_35%,_#d8c4f4_55%,_#e4cef6_75%,_#eedaf8_90%,_#f5e4fa_100%)]">
          <h1 className="text-[85px] font-black text-[#2e1065] tracking-[-2px] leading-none">
            Tanikala
          </h1>

          <p className="text-[23px] font-semibold text-[#3b1a7a] leading-[1.65] max-w-[300px] text-center">
            Support that meets you exactly where you are.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-[1.1] bg-white flex flex-col items-center justify-center px-8 sm:px-12 md:px-16 py-11">

          <img src={LogoLight} className="w-[10rem] h-auto" alt="Tanikala Logo" />
          <h2 className="text-[65px] font-extrabold text-[#7d7b9b] tracking-[-0.5px] mt-2 mb-7">
            Log In
          </h2>

          <LoginForm />

          {/* OR */}
          <div className="flex items-center gap-3 w-full mb-4 max-w-[80vh]">
            <span className="flex-1 h-[1px] bg-[#e4e4e4]" />
            <span className="text-[13px] text-[#bbb] font-semibold">or</span>
            <span className="flex-1 h-[1px] bg-[#e4e4e4]" />
          </div>

          {/* GOOGLE */}
          <GoogleButton text="Log in with Google" />

          {/* LINE */}
          <div className="flex items-center gap-3 w-full mb-4 max-w-[80vh]">
            <span className="flex-1 h-[1px] bg-[#e4e4e4]" />
          </div>

          {/* BOTTOM */}
          <Redirect text="Don't have an account? Sign Up" to="/signup" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
