const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenBlacklistModel = require("../model/blacklist.model");

async function registerUser(req, res) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "Please provide username, email and password" });
    }


    try {
        const isUserAlreadyExists = await userModel.findOne({ $or: [{ username }, { email }] });
        if (isUserAlreadyExists) {
            return res.status(400).json({ message: "Account already exists with this email address or username" });
        }

        const hash = await bcrypt.hash(password, 10);

        const user = await userModel.create({ username, email, password: hash });

        const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        });

        res.status(201).json({
            message: "User registered successfully",
            user: { id: user._id, username: user.username, email: user.email }
        });
    } catch (err) {
        console.error("Register Error:", err);
        if (err && err.code === 11000) {
            return res.status(400).json({ message: "Account already exists" });
        }
        res.status(500).json({ message: "Internal server error" });
    }
}

async function loginUser(req, res) {
    console.log(req.body);
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields required" });
        }

        const user = await userModel.findOne({ email });
        console.log("User found:", user);
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match:", isMatch);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        });

        res.status(200).json({
            user: {
                id: user._id,
                email: user.email,
            },
        });

    } catch (error) {
        console.error("🔥 Login Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

async function logoutUser(req, res) {
    const token = req.cookies.token;

    if (token) {
        await tokenBlacklistModel.create({ token });
    }

    res.clearCookie("token");

    res.status(200).json({
        message: "User logged out successfully"
    })
}

async function getMe(req, res) {
    const user = await userModel.findById(req.user.id)

    res.status(200).json({
        message: "User details fetched successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
        }
    })
}


module.exports = { registerUser, loginUser, logoutUser, getMe };
