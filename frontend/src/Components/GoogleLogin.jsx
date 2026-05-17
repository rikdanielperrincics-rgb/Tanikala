import { GoogleLogin } from '@react-oauth/google'
import axios from 'axios'

function GoogleLoginButton() {

    const handleSuccess = async (credentialResponse) => {
        try {

            const res = await axios.post(
                'http://localhost:8000/api/auth/google',
                {
                    credential: credentialResponse.credential
                }
            )

            console.log(res.data)

            localStorage.setItem("token", res.data.token)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => console.log("Login Failed")}
        />
    )
}

export default GoogleLoginButton;