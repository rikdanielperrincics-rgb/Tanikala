import { useState } from "react";
import { Link } from "react-router-dom";
import LogoDark from "../assets/LogoDark.png";
import GoogleButton from "../Components/GoogleButton"; 
import SignUpForm from "../Components/SignUpForm";
import Redirect from "../Components/Redirect";

function SignUp() {

    return (
        <div className="w-screen overflow-x-hidden">
              <div className="flex min-h-screen w-full">

                {/* LEFT */}
                <div className="flex-[1.1] bg-white flex flex-col items-center justify-center px-8 sm:px-12 md:px-16 py-11 ">
        
                  <SignUpForm />
        
                  {/* OR */}
                  <div className="flex items-center gap-3 w-full mb-4 max-w-[80vh]">
                    <span className="flex-1 h-[1px] bg-[#e4e4e4]" />
                    <span className="text-[13px] text-[#bbb] font-semibold">or</span>
                    <span className="flex-1 h-[1px] bg-[#e4e4e4]" />
                  </div>
        
                  {/* GOOGLE */}
                  <GoogleButton text="Sign Up with Google" />
        
                  {/* LINE */}
                  <div className="flex items-center gap-3 w-full mb-4 max-w-[80vh]">
                    <span className="flex-1 h-[1px] bg-[#e4e4e4]" />
                  </div>
        
                  {/* BOTTOM */}
                  <Redirect text="Already have an account? Log In" to="/SignIn" />
                
                </div>
        
                {/* RIGHT */}
                <div className="hidden md:flex flex-1 flex-col justify-center items-center px-[52px] py-[60px] gap-4 bg-[linear-gradient(160deg,_#c4b5f0_0%,_#bbaee8_15%,_#c8b8f0_35%,_#d8c4f4_55%,_#e4cef6_75%,_#eedaf8_90%,_#f5e4fa_100%)]">
                    <div className="relative w-[40vh] h-[30vh] rounded-3xl overflow-hidden flex flex-col items-center justify-center mt-10">
      
                    <img 
                        src={LogoDark} 
                        alt="Sign up background" 
                        className="absolute top-0 left-0 w-full h-full  z-0 opacity-10" 
                    />

                    <div className="relative z-20 flex flex-col items-center gap-4">
                        <h1 className="text-[85px] font-black text-[#2e1065] tracking-[-2px] leading-none">
                        Sign Up
                        </h1>
                        
                        <p className="text-[23px] font-semibold text-[#3b1a7a] leading-[1.65] max-w-[500px] text-center">
                        Find your people, find your peace. Join a community that truly gets it.
                        </p>

                    </div>
                    
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SignUp;
