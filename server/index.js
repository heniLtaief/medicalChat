const express= require("express");
const cors= require("cors");
const authRoutes = require("./routes/auth.js")
const app= express();
PORT = process.env.PORT || 5000;

// it allows us to call all the variable from .env inside of our node app
require("dotenv").config();

// setting our middleware
app.use(cors()); // allows us to make cross origin requests
app.use(express.json()); // allows us to pass json payloads from the backend to the frontend
app.use(express.urlencoded());

app.get("/", (req,res)=>{
    res.send("Hello!")
});

app.use("/auth", authRoutes)


app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`));