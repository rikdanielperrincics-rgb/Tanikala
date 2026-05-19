import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

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

        if (!user) {
            return res.status(200).json({
                success: true,
                isNewUser: true,
                email
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                name: user.name
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return res.status(200).json({
            success: true,
            isNewUser: false,
            token,
            user
        });

    } catch (error) {
        console.log("Google Auth Error:", error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};