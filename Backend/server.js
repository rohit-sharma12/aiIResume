require("dotenv").config();

const app = require("./src/app");
const connectToDB = require("./src/config/database");

const PORT = process.env.PORT || 3000;

connectToDB()
    .then(() => {
        console.log("MongoDB Connected ✅");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("DB Connection Failed ❌", err);
    });