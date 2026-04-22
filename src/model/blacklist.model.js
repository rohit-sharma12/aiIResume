const mongoose = require("mongoose");

const blacklistTokenSchem = new mongoose.Schema({
    token: {
        type: String,
        required: [true, 'token is required to be added in blacklist']
    }
}, {
    timestamps: true
})

const tokenBlacklistModel = mongoose.model("blacklistToken", blacklistTokenSchem)

module.exports = tokenBlacklistModel;