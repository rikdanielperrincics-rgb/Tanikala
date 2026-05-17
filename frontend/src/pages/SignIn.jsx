import { useState } from "react";
import { Link } from "react-router-dom";
import LogoLight from "../assets/LogoLight.png";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const EyeIcon = ({ show }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#bbb"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {show ? (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    ) : (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    )}
  </svg>
);

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing in with:", email, password);
  };

  return (
    <div className="w-screen overflow-x-hidden">
      <div className="flex min-h-screen w-full">
        {/* LEFT */}
        <div className="hidden md:flex flex-1 flex-col justify-center items-center px-[52px] py-[60px] gap-4 bg-[linear-gradient(160deg,_#c4b5f0_0%,_#bbaee8_15%,_#c8b8f0_35%,_#d8c4f4_55%,_#e4cef6_75%,_#eedaf8_90%,_#f5e4fa_100%)]">
          <h1 className="text-[80px] font-black text-[#2e1065] tracking-[-2px] leading-none">
            Tanikala
          </h1>

          <p className="text-[20px] font-semibold text-[#3b1a7a] leading-[1.65] max-w-[240px] text-center">
            Support that meets you exactly where you are.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-[1.1] bg-white flex flex-col items-center justify-center px-8 sm:px-12 md:px-16 py-11">

          <img src={LogoLight} className="w-[8rem] h-auto" alt="Tanikala Logo" />
          <h2 className="text-[50px] font-extrabold text-[#7d7b9b] tracking-[-0.5px] mt-2 mb-7">
            Log In
          </h2>

          <form className="w-full" onSubmit={handleSubmit}>
            <label className="block text-[14px] font-extrabold text-[#7d7b9b] mb-2 text-left">
              Email
            </label>

            <div className="flex items-center border-[1.5px] border-[#d8d8d8] rounded-full mb-[18px] overflow-hidden focus-within:border-[#a78bda] transition-colors">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 border-none outline-none px-5 py-[13px] text-[14px] font-medium text-[#333] bg-transparent placeholder:text-[#ccc]"
              />
            </div>

            <label className="block text-[14px] font-extrabold text-[#7d7b9b] mb-2 text-left">
              Password
            </label>

            <div className="flex items-center border-[1.5px] border-[#d8d8d8] rounded-full mb-[18px] overflow-hidden focus-within:border-[#a78bda] transition-colors">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="flex-1 border-none outline-none px-5 py-[13px] text-[14px] font-medium text-[#333] bg-transparent placeholder:text-[#ccc]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="bg-none border-none cursor-pointer px-4 flex items-center"
              >
                <EyeIcon show={showPassword} />
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-[14px] rounded-full border-none bg-[#7d7b9b] text-white text-[16px] font-black cursor-pointer mb-[18px] tracking-[0.3px] hover:bg-[#5a5a90] transition-colors"
            >
              Log in
            </button>
          </form>

          {/* OR */}
          <div className="flex items-center gap-3 w-full mb-4">
            <span className="flex-1 h-[1px] bg-[#e4e4e4]" />
            <span className="text-[13px] text-[#bbb] font-semibold">or</span>
            <span className="flex-1 h-[1px] bg-[#e4e4e4]" />
          </div>

          {/* GOOGLE */}
          <button className="w-full py-[13px] rounded-full border-[1.5px] border-[#d8d8d8] bg-white text-[14px] font-bold text-[#444] cursor-pointer flex items-center justify-center gap-[10px] mb-4 hover:bg-[#fafafa] hover:border-[#bbb] transition-all">
            <GoogleIcon />
            Log in with Google
          </button>

          {/* LINE */}
          <div className="flex items-center gap-3 w-full mb-4">
            <span className="flex-1 h-[1px] bg-[#e4e4e4]" />
          </div>

          {/* BOTTOM */}
          <div className="flex gap-3 w-full">
            <Link
              to="/ForgotPassword"
              className="flex-1 py-[13px] rounded-full border-[1.5px] border-[#d8d8d8] bg-white text-[13px] font-bold text-[#555] text-center hover:border-[#a78bda] hover:text-[#7c4dba] transition-all"
            >
              Forgot Password
            </Link>

            <Link
              to="/SignUp"
              className="flex-1 py-[13px] rounded-full border-[1.5px] border-[#d8d8d8] bg-white text-[13px] font-bold text-[#555] text-center hover:border-[#a78bda] hover:text-[#7c4dba] transition-all"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
