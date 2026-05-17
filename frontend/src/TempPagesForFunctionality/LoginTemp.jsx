import {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import GoogleLoginButton from "../Components/GoogleLogin";
import axios from "axios";

function LoginTemp() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Logging in with:", name, password);
        axios.post("http://localhost:8000/api/login", { name, password })
            .then(response => {
                console.log("Login response:", response.data);
                toast.success("Login successful!");
            })
            .catch(error => {
                console.error("Login error:", error.response ? error.response.data : error.message);
                toast.error("Login failed. Please try again. \nMessage: " + (error.response ? error.response.data.error : error.message));
            });
    }

    return (
        <div>
            <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name">Username/Password</label>
                <input type="text" id="name" placeholder="Enter your username" onChange={handleNameChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" onChange={handlePasswordChange} />
                <p id="password-error">{errorMessage}</p>
                <button type="submit">Sign Up</button>
            </form>
            <GoogleLoginButton />
        </div>
        </div>
    )
}

export default LoginTemp
