import { useGoogleLogin } from "@react-oauth/google";
import GoogleIcon from "../Components/GoogleIcon";
import { toast } from "react-toastify";
import axios from "axios";

function GoogleButton({ text }) {
    const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
        try {

            const userInfo = await axios.get(
                "https://www.googleapis.com/oauth2/v3/userinfo",
                {
                    headers: {
                        Authorization: `Bearer ${tokenResponse.access_token}`
                    }
                }
            );

            const res = await axios.post(
                "http://localhost:8000/api/auth/google",
                {
                    email: userInfo.data.email,
                    name: userInfo.data.name,
                    picture: userInfo.data.picture,
                    googleId: userInfo.data.sub
                }
            );

            console.log(res.data);

            localStorage.setItem("token", res.data.token);

        } catch (error) {
            console.log(error);
        }
    },
    onError: () => {
        console.log("Login Failed");
    }
});

    return (
        <button
            onClick={() => login()}
            className="w-full py-[13px] rounded-full border-[1.5px] border-[#d8d8d8] bg-white text-[17px] font-bold text-[#444] cursor-pointer flex items-center justify-center gap-[10px] mb-4 hover:bg-[#fafafa] hover:border-[#bbb] transition-all max-w-[80vh]"
        >
            <GoogleIcon />
            {text}
        </button>
    )
}

export default GoogleButton
