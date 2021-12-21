const express= require("express");
const cors= require("cors");

const app= express();
PORT = process.env.PORT || 5000;

// it allows us to call all the variable from .env inside of our node app
require("dotenv").config();