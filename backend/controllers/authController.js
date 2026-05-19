import User from "../models/userModel.js";

export const googleAuth = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "No email provided"
            });
        }

        let user = await User.findOne({ email });

        let isNewUser = false;

        if (!user) {
            isNewUser = true;
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return res.status(200).json({
            success: true,
            token,
            user,
            isNewUser
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Google Login Failed"
        });
    }
}