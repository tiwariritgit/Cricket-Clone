const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users"); //"./routes/users"
const authRoute = require("./routes/auth");
const multer = require("multer");
const cors = require("cors");
const PORT = process.env.PORT || 4000

dotenv.config();
mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, () => {
        console.log("Mongo Connected")
    }
);
mongoose.set('strictQuery', true);
console.log(mongoose.connection.readyState);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


app.get("/", (req, res) => {
    res.send("Welcome to homepage")
})

app.listen(PORT, () => {
    console.log("Backend Server initiated")
})