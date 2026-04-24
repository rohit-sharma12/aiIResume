const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const { authUser } = require("../middlewares/auth.middleware");

const authRouter = Router();

authRouter.post("/register", authController.registerUser)

authRouter.post("/login", authController.loginUser)

authRouter.get('/logout', authController.logoutUser)

authRouter.get("/get-me", authUser,authController.getMe)

module.exports = authRouter;