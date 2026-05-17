import {useState} from "react";
import validator from "validator";
import toast from "react-toastify";

function SignUpTemp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    let isValid = false;

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
            setErrorMessage('Is Strong Password')
        } else {
            setErrorMessage('Is Not Strong Password')
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (isValid) {
            // Proceed with form submission or further processing
            console.log("Signing up with:", email, password);
        } else {
            toast.error("Please enter a valid email and a strong password.");
            return;
        }
        
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" onChange={handleEmailChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                <p id="password-error">{errorMessage}</p>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpTemp;
