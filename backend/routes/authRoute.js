import express from "express"
import { OAuth2Client } from "google-auth-library"
import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

const router = express.Router()

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

router.post("/google", async (req, res) => {

    try {

        const { credential } = req.body

        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID
        })

        const payload = ticket.getPayload()

        const {
            email,
            name,
            picture,
            sub
        } = payload

        let user = await User.findOne({ email })

        if (!user) {

            user = await User.create({
                name,
                email,
                googleId: sub,
                image: picture
            })
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        )

        res.status(200).json({
            success: true,
            token,
            user
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            success: false,
            message: "Google Login Failed"
        })
    }
})

export default router