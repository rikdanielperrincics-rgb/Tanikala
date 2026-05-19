import { GoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { toast } from 'react-toastify'

function GoogleLoginButton() {

    const handleSuccess = async (credentialResponse) => {
        try {

            const res = await axios.post(
                'http://localhost:8000/api/auth/google',
                {
                    credential: credentialResponse.credential
                }
            )


            localStorage.setItem("token", res.data.token)

        } catch (error) {
            toast.error("Google login failed. Please try again.");
        }
    }

    return (
        <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => toast.error("Google login failed. Please try again.")}
        />
    )
}

export default GoogleLoginButton;