const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
           unique:[true, "username already taken"],
        },

        email: {
            type: String,
            required: true,
            unique: [true, "Accoun already exists with this email address"],
        },

        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, 
    }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;