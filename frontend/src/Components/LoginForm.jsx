import { useState } from "react";
import EyeIcon from "./EyeIcon";
import { toast } from "react-toastify";
import axios from "axios";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Logging in with:", email, password);
        axios.post("http://localhost:8000/api/login", { email, password })
            .then(response => {
                toast.success("Login successful!");
                setTimeout(() => {
                    localStorage.setItem("token", response.data.token);
                    window.location.href = "/";
                }, 1500);
            })
            .catch(error => {
                toast.error("Login failed. Please try again. \n " + (error.response ? error.response.data.error : error.message));
            });
    }
    return (
            <form className="w-full max-w-[80vh]" onSubmit={handleSubmit}>
                <label className="block text-[17px] font-extrabold text-[#7d7b9b] mb-2 text-left">
                Email
                </label>

                <div className="flex items-center border-[1.5px] border-[#d8d8d8] rounded-full mb-[18px] overflow-hidden focus-within:border-[#a78bda] transition-colors">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className="flex-1 border-none outline-none px-5 py-[13px] text-[17px] font-medium text-[#333] bg-transparent placeholder:text-[#ccc]"
                />
                </div>

                <label className="block text-[17px] font-extrabold text-[#7d7b9b] mb-2 text-left">
                Password
                </label>

                <div className="flex items-center border-[1.5px] border-[#d8d8d8] rounded-full mb-[18px] overflow-hidden focus-within:border-[#a78bda] transition-colors">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    className="flex-1 border-none outline-none px-5 py-[13px] text-[17px] font-medium text-[#333] bg-transparent placeholder:text-[#ccc]"
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
                className="w-full py-[14px] mt-[.5rem] rounded-full border-none bg-[#7d7b9b] text-white text-[22px] font-black cursor-pointer mb-[18px] tracking-[0.3px] hover:bg-[#5a5a90] transition-colors"
                >
                Log in
                </button>
            </form>
    )
}

export default LoginForm
