const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenBlacklistModel = require("../model/blacklist.model");

async function registerUser(req, res) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "Please provide username, email and password" });
    }


    const isUserAlreadyExists = await userModel.findOne({ $or: [{ username }, { email }] });
    if (isUserAlreadyExists) {
        return res.status(400).json({ message: "Account already exists with this email address or username" });
    }

    let hash;
    try {
        hash = await bcrypt.hash(password, 10);
    } catch (err) {
        console.error("Error hashing password:", err);
        return res.status(500).json({ message: "Internal server error" });
    }

    const user = await userModel.create({ username, email, password: hash });

    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("token", token);

    res.status(201).json({
        message: "User registered successfully",
        user: { id: user._id, username: user.username, email: user.email }
    });
}

async function loginUser(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please provide email and password" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("token", token);

    res.status(200).json({
        message: "User logged in successfully",
        user: { id: user._id, username: user.username, email: user.email }
    });
}

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



module.exports = { registerUser, loginUser, logoutUser };
