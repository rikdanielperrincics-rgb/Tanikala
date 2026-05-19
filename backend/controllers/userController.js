import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const create = async (req, res) => {
    try {
        const { email } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                error: "User with this email already exists"
            });
        }
        const { name } = req.body;
        const nameExists = await User.findOne({ name });
        if (nameExists) {
            return res.status(400).json({
                error: "User with this name already exists"
            });
        }
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
        return res.status(404).json({ error: "User not found" });
        }

        if (user.password !== password) {
        return res.status(401).json({ error: "Invalid password" });
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

        res.status(200).json({
        message: "Login successful",
        token,
        user: {
            id: user._id,
            email: user.email,
            name: user.name
        }
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData) {
            return res.status(404).json({ error: 'No users found' });
        }
        res.status(200).json(userData);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getUserByID = async (req, res) => {
    try {
        const { id } = req.params;
        const userData = await User.findById(id);
        if (!userData) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(userData);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        if (name) {
        const existingUser = await User.findOne({
            name,
            _id: { $ne: id } 
        });

        if (existingUser) {
            return res.status(400).json({
            error: "Name already in use by another user",
            });
        }
        }

        const userData = await User.findByIdAndUpdate(
        id,
        req.body,
        { new: true, runValidators: true }
        );

        if (!userData) {
        return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userData = await User.findByIdAndDelete(id);
        if (!userData) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }       
}