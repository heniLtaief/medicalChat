const {connect} = require ("getstream");
const bcrypt = require ("bcrypt");
const streamChat= require("stream-chat");
const crypto = require("crypto");

const login = (req,res)=>{
    try {
       const {fullName,username,phoneNumber,password}= req.body;
       const userId= crypto 
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
};
const signup = ()=>{
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
};

module.exports={signup,login}