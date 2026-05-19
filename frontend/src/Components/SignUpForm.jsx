import {useState, useEffect} from "react";
import validator from "validator";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import axios from "axios";
import {jwtDecode} from "jwt-decode";

function SignUpForm() {
    const [email, setEmail] = useState("");
    const [emailLoaded, setEmailLoaded] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfPassword, setErrorConfPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setShowConfPassword] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(false);

        const emailFromQuery = new URLSearchParams(window.location.search).get("email");

    useEffect(() => {
        if (emailFromQuery) {
            setEmail(emailFromQuery);
            setEmailLoaded(true);
            toast.info("Email pre-filled from Google authentication. Please complete the signup form.");
        }
    }, [emailFromQuery]);
    
    function EyeIcon({ show }) {
        return (
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
    }

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
        validate(e.target.value);
        if (confirmPassword === "") {
            setConfirmPassword("");
            setPasswordMatch(false);
        } else if (confirmPassword !== password) {
            setErrorConfPassword("Passwords do not match.");
            setPasswordMatch(false);
        } else {
            setErrorConfPassword("");
            setPasswordMatch(true);
        }
    }

    function validate(value) {

        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorPassword('');
            return true;
        } else {
            if (value.length === 0) {
                setErrorPassword("");
            } else {
                const errorMessages = [];
                if (value.length < 8) {
                    errorMessages.push("Password must be at least 8 characters long.");
                }
                if (!/[A-Z]/.test(value)) {
                    errorMessages.push("Password must include at least one uppercase letter.");
                }
                if (!/[a-z]/.test(value)) {
                    errorMessages.push("Password must include at least one lowercase letter.");
                }
                if (!/[0-9]/.test(value)) {
                    errorMessages.push("Password must include at least one number.");
                }
                if (!/[^A-Za-z0-9]/.test(value)) {
                    errorMessages.push("Password must include at least one symbol.");
                }
                setErrorPassword(errorMessages.join("\n"));  
            }
            return false;
        }
        console.log("Password validation result:", errorPassword);
    }

    function handleConfPasswordChange(e) {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setErrorConfPassword("Passwords do not match.");
            setPasswordMatch(false);
        } else {
            setErrorConfPassword("");
            setPasswordMatch(true);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const isEmailValid = validator.isEmail(email);
        const isPasswordValid = validate(password);

        if (isEmailValid && isPasswordValid && passwordMatch) {            
            console.log("Signing up with:", email, password);
            axios.post("http://localhost:8000/api/user", { name, email, password })
                .then(response => {
                    console.log("Signup response:", response.data);
                    toast.success("Signup successful!");
                    setTimeout(() => {
                        window.location.href = "/login";
                    }, 2000);
                })
                .catch(error => {
                    console.error("Signup error:", error.response ? error.response.data : error.message);
                    toast.error("Signup failed. Please try again. \n " + (error.response ? error.response.data.error : error.message));
                });
        } else {
            if (!isEmailValid) {
                toast.error("Please enter a valid email address.");
            } else if (!isPasswordValid) {
                toast.error("Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and symbols.");
            } else if (!passwordMatch) {
                toast.error("Passwords do not match.");
            }
        }
    };

    return (
            <form className="w-full max-w-[80vh]" onSubmit={handleSubmit}>

                        <label className="block text-[17px] font-extrabold text-[#7d7b9b] mb-2 text-left">
                        Email
                        </label>
            
                        <div className="flex items-center border-[1.5px] border-[#d8d8d8] rounded-full mb-[18px] overflow-hidden focus-within:border-[#a78bda] transition-colors">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            className="flex-1 border-none outline-none px-5 py-[13px] text-[17px] font-medium text-[#333] bg-transparent placeholder:text-[#ccc]"
                        />
                        </div>

                        <label className="block text-[17px] font-extrabold text-[#7d7b9b] mb-2 text-left">
                        Username
                        </label>
            
                        <div className="flex items-center border-[1.5px] border-[#d8d8d8] rounded-full mb-[18px] overflow-hidden focus-within:border-[#a78bda] transition-colors">
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={name}
                            onChange={handleNameChange}
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
                        <p className="whitespace-pre-line text-red-500">{errorPassword}</p>

                        <label className="block text-[17px] font-extrabold text-[#7d7b9b] mb-2 text-left">
                        Confirm Password
                        </label>
            
                        <div className="flex items-center border-[1.5px] border-[#d8d8d8] rounded-full mb-[18px] overflow-hidden focus-within:border-[#a78bda] transition-colors">
                        <input
                            type={showConfPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={handleConfPasswordChange}
                            required
                            className="flex-1 border-none outline-none px-5 py-[13px] text-[17px] font-medium text-[#333] bg-transparent placeholder:text-[#ccc]"
                        />
            
                        <button
                            type="button"
                            onClick={() => setShowConfPassword(!showConfPassword)}
                            className="bg-none border-none cursor-pointer px-4 flex items-center"
                        >
                            <EyeIcon show={showConfPassword} />
                        </button>
                        </div>
                        <p className="whitespace-pre-line text-red-500">{errorConfPassword}</p>
            
                        <button
                        type="submit"
                        className="w-full py-[14px] mt-[.5rem] rounded-full border-none bg-[#7d7b9b] text-white text-[22px] font-black cursor-pointer mb-[18px] tracking-[0.3px] hover:bg-[#5a5a90] transition-colors"
                        >
                        Sign Up
                        </button>
                    </form>
        )
    }

export default SignUpForm
