const {connect} = require ("getstream");
const bcrypt = require ("bcrypt");
const streamChat= require("stream-chat");
const crypto = require("crypto");

const api_key= process.env.STREAM_API_KEY;
const api_secret= process.env.STREAM_API_SECRET;
const app_id= process.env.STREAM_APP_ID;



const signup = async (req,res)=>{
    try {
       const {fullName,username,phoneNumber,password}= req.body;

       const userId= crypto.randomBytes(16).toString("hex") // create a random sequence of hexadecimal digites

       const serverClient= connect(api_key,api_secret,app_id) // we will use this to create a new user Token

       const hashedPassword= await bcrypt.hash(password, 10);

       const token= serverClient.createUserToken(userId);

       res.status(200).json({token,fullName,username,phoneNumber,userId, hashedPassword})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
};
const login = async ()=>{
    try {
        const {username, password}= req.body;

       const serverClient= connect(api_key,api_secret,app_id);
       const client= streamChat.getInstance()

    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
};

module.exports={signup,login}