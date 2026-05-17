import User from "../models/userModel.js";

export const create = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const { email } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }
        const savedData = await newUser.save();
        res.status(201).json(newUser);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

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
        const userData = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!userData) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(userData);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

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