import {useState} from "react";
import validator from "validator";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import GoogleLoginButton from "../Components/GoogleLogin";
import axios from "axios";

function SignUpTemp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
        validate(e.target.value);
    }

    const validate = (value) => {

        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('');
            return true;
        } else {
            setErrorMessage('Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and symbols.')
            return false;
        }
        console.log("Password validation result:", errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const isEmailValid = validator.isEmail(email);
        const isPasswordValid = validate(password);

        if (isEmailValid && isPasswordValid) {            
            console.log("Signing up with:", email, password);
            axios.post("http://localhost:8000/api/user", { name, email, password })
                .then(response => {
                    console.log("Signup response:", response.data);
                    toast.success("Signup successful!");
                })
                .catch(error => {
                    console.error("Signup error:", error.response ? error.response.data : error.message);
                    toast.error("Signup failed. Please try again. \nMessage: " + (error.response ? error.response.data.error : error.message));
                });
        } else {
            console.log("Validation failed. Email valid:", isEmailValid, "Password valid:", isPasswordValid);
            toast.error(
                "Please enter a valid email and a strong password."
            );
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Username</label>
                <input type="text" id="name" placeholder="Enter your username" onChange={handleNameChange} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" onChange={handleEmailChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" onChange={handlePasswordChange} />
                <p id="password-error">{errorMessage}</p>
                <button type="submit">Sign Up</button>
            </form>
            <GoogleLoginButton />
        </div>
    )
}

export default SignUpTemp;
